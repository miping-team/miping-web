import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the MiPing landing page with product-specific content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>미핑 — 우리 사이, 딱 좋은 중간<\/title>/);
  assert.match(html, /우리, 어디서 만날까\?/);
  assert.match(html, /실제 이동시간/);
  assert.match(html, /최대 8명/);
  assert.match(html, /공평함의 기준/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /href="\/terms"/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("renders the imported legal documents", async () => {
  const [privacyResponse, termsResponse] = await Promise.all([
    render("/privacy"),
    render("/terms"),
  ]);

  assert.equal(privacyResponse.status, 200);
  assert.equal(termsResponse.status, 200);

  const [privacy, terms] = await Promise.all([
    privacyResponse.text(),
    termsResponse.text(),
  ]);
  assert.match(privacy, /개인정보처리방침/);
  assert.match(privacy, /Google LLC \(Firebase\)/);
  assert.match(privacy, /tr_cycle-miping@naver\.com/);
  assert.match(terms, /서비스 이용약관/);
  assert.match(terms, /중간지점 및 이동시간/);
  assert.match(terms, /준거법 및 관할/);
});

test("ships project assets and removes the starter preview", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");

  assert.match(layout, /\/og\.png/);
  assert.match(layout, /lang="ko"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await access(new URL("../public/app-icon.png", import.meta.url));
  await access(new URL("../public/miping-character.png", import.meta.url));
  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
