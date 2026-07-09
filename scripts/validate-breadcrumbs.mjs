#!/usr/bin/env node
// Validate BreadcrumbList JSON-LD emitted by breadcrumbScript() across route files.
// Fails the build with a non-zero exit code if any route's schema is invalid.

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const ROUTES_DIR = "src/routes";
const HELPER_PATH = "src/lib/breadcrumb.ts";

const errors = [];
const checked = [];

// Dynamically import the helper by transpiling the TS via a tiny shim.
// The helper is plain TS with no imports, so we can strip types manually.
const helperSrc = readFileSync(HELPER_PATH, "utf8")
  .replace(/:\s*Array<\{[^}]+\}>/g, "")
  .replace(/\s+as const/g, "")
  .replace(/export\s+function/, "export function");
const helperUrl =
  "data:text/javascript;base64," + Buffer.from(helperSrc).toString("base64");
const { breadcrumbScript } = await import(helperUrl);

function extractTrails(source) {
  const trails = [];
  const re = /breadcrumbScript\(\s*(\[[\s\S]*?\])\s*\)/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    const literal = m[1];
    // Convert JS object literal to JSON: quote keys, use double quotes.
    const jsonish = literal
      .replace(/([{,]\s*)([A-Za-z_][\w]*)\s*:/g, '$1"$2":')
      .replace(/'/g, '"')
      .replace(/,\s*([\]}])/g, "$1");
    try {
      trails.push(JSON.parse(jsonish));
    } catch (e) {
      errors.push(`Failed to parse trail literal: ${literal} (${e.message})`);
    }
  }
  return trails;
}

function validateJsonLd(obj, file) {
  if (obj["@context"] !== "https://schema.org")
    errors.push(`${file}: @context must be https://schema.org`);
  if (obj["@type"] !== "BreadcrumbList")
    errors.push(`${file}: @type must be BreadcrumbList`);
  if (!Array.isArray(obj.itemListElement) || obj.itemListElement.length < 2)
    errors.push(`${file}: itemListElement must have >= 2 entries`);
  else {
    obj.itemListElement.forEach((it, i) => {
      if (it["@type"] !== "ListItem")
        errors.push(`${file}: item[${i}] @type must be ListItem`);
      if (it.position !== i + 1)
        errors.push(`${file}: item[${i}] position must be ${i + 1}`);
      if (typeof it.name !== "string" || !it.name.trim())
        errors.push(`${file}: item[${i}] name missing`);
      try {
        const u = new URL(it.item);
        if (!/^https?:$/.test(u.protocol))
          errors.push(`${file}: item[${i}].item not http(s) URL`);
      } catch {
        errors.push(`${file}: item[${i}].item is not a valid URL (${it.item})`);
      }
    });
  }
}

for (const name of readdirSync(ROUTES_DIR)) {
  if (!name.endsWith(".tsx")) continue;
  const file = join(ROUTES_DIR, name);
  const src = readFileSync(file, "utf8");
  if (!src.includes("breadcrumbScript(")) continue;
  const trails = extractTrails(src);
  for (const trail of trails) {
    const script = breadcrumbScript(trail);
    if (script.type !== "application/ld+json")
      errors.push(`${file}: script type must be application/ld+json`);
    let parsed;
    try {
      parsed = JSON.parse(script.children);
    } catch (e) {
      errors.push(`${file}: invalid JSON in script (${e.message})`);
      continue;
    }
    validateJsonLd(parsed, file);
    checked.push(file);
  }
}

if (checked.length === 0) {
  console.error("[breadcrumbs] No breadcrumbScript() usages found — aborting.");
  process.exit(1);
}

if (errors.length) {
  console.error("[breadcrumbs] Validation FAILED:");
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}

console.log(
  `[breadcrumbs] OK — validated BreadcrumbList JSON-LD in ${checked.length} route(s).`,
);
