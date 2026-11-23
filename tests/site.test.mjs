import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

const file = (p) => readFileSync(resolve(p), "utf8");
test("SCSS is component-oriented and uses BEM", () => {
  const source = file("scss/layout.scss");
  assert.match(source, /\.header\s*\{/);
  assert.match(source, /&__drawer/);
  assert.match(source, /\.product2\s*\{/);
  assert.match(source, /&__button/);
  assert.doesNotMatch(source, /@use\s+["']reset/);
  assert.match(source, /prefers-reduced-motion/);
});
test("Both language pages have valid product controls and image paths", () => {
  for (const p of ["html/index.html", "html/en.html"]) {
    const html = file(p);
    assert.match(html, /class="header__menu-toggle"/);
    const ids = [...html.matchAll(/aria-controls="(panel-[^"]+)"/g)].map(m => m[1]);
    assert.equal(ids.length, 10, p);
    for (const id of ids) assert.ok(html.includes(`id="${id}"`), `${p}: missing ${id}`);
    for (const [, path] of html.matchAll(/<img\b[^>]*?src="([^"]+)"/g)) {
      if (path.startsWith("../")) assert.ok(existsSync(resolve(dirname(p), path)), `${p}: missing ${path}`);
    }
  }
});
test("JavaScript preserves BEM, responsive carousel, and keyboard escape", () => {
  const js = file("js/main.js");
  for (const cls of [".product2__button", ".product2__panel", ".header__menu-toggle"]) assert.ok(js.includes(cls));
  assert.match(js, /breakpoints:/);
  assert.match(js, /Escape/);
});
