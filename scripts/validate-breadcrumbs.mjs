#!/usr/bin/env node
// Validate BreadcrumbList JSON-LD produced by the auto-generator.
// Runs pre-build; a non-zero exit code fails the deploy.

import { buildBreadcrumbTrail, breadcrumbJsonLd } from "../src/lib/breadcrumb.ts";

const errors = [];

// Static routes + a dynamic sample to prove the fallback covers unknown segments.
const SAMPLE_PATHS = [
  "/empresa",
  "/cooperativas",
  "/servicos",
  "/blog",
  "/legislacao",
  "/clientes",
  "/contato",
  "/blog/artigo-exemplo-dinamico",
  "/servicos/consultoria/tributaria",
];

function validate(pathname) {
  const trail = buildBreadcrumbTrail(pathname);
  if (trail.length === 0) {
    errors.push(`${pathname}: empty trail`);
    return;
  }
  let parsed;
  try {
    parsed = JSON.parse(breadcrumbJsonLd(trail));
  } catch (e) {
    errors.push(`${pathname}: invalid JSON (${e.message})`);
    return;
  }
  if (parsed["@context"] !== "https://schema.org")
    errors.push(`${pathname}: bad @context`);
  if (parsed["@type"] !== "BreadcrumbList")
    errors.push(`${pathname}: bad @type`);
  if (!Array.isArray(parsed.itemListElement) || parsed.itemListElement.length < 2)
    errors.push(`${pathname}: itemListElement < 2`);
  parsed.itemListElement?.forEach((it, i) => {
    if (it["@type"] !== "ListItem")
      errors.push(`${pathname}: item[${i}] @type`);
    if (it.position !== i + 1)
      errors.push(`${pathname}: item[${i}] position=${it.position} expected ${i + 1}`);
    if (typeof it.name !== "string" || !it.name.trim())
      errors.push(`${pathname}: item[${i}] name empty`);
    try {
      const u = new URL(it.item);
      if (!/^https?:$/.test(u.protocol))
        errors.push(`${pathname}: item[${i}] non-http URL`);
    } catch {
      errors.push(`${pathname}: item[${i}] invalid URL "${it.item}"`);
    }
  });
}

for (const p of SAMPLE_PATHS) validate(p);

if (errors.length) {
  console.error("[breadcrumbs] Validation FAILED:");
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}

console.log(
  `[breadcrumbs] OK — validated auto-generated BreadcrumbList for ${SAMPLE_PATHS.length} path(s).`,
);
