import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import test, { after, before } from "node:test";
import { fileURLToPath } from "node:url";

const PORT = Number(process.env.TEST_PORT ?? 3123);
const BASE_URL = `http://127.0.0.1:${PORT}`;
const READY_TIMEOUT_MS = 60_000;

let server;

/** Polls the production server until it answers, so tests never race the boot. */
async function waitForServer(signal) {
  const deadline = Date.now() + READY_TIMEOUT_MS;

  while (Date.now() < deadline) {
    if (signal.exited) {
      throw new Error(`next start exited early:\n${signal.output}`);
    }
    try {
      const response = await fetch(BASE_URL, { headers: { accept: "text/html" } });
      if (response.ok) return;
    } catch {
      // Server is still binding; retry.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`next start did not become ready in ${READY_TIMEOUT_MS}ms:\n${signal.output}`);
}

function stop(child) {
  if (!child || child.exitCode !== null) return;
  if (process.platform === "win32") {
    // Next spawns workers, so kill the whole tree rather than just the parent.
    spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    child.kill("SIGTERM");
  }
}

before(async () => {
  const state = { exited: false, output: "" };
  const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
  server = spawn(process.execPath, [nextBin, "start", "-p", String(PORT)], {
    cwd: fileURLToPath(new URL("..", import.meta.url)),
    stdio: ["ignore", "pipe", "pipe"],
  });

  server.stdout.on("data", (chunk) => (state.output += chunk));
  server.stderr.on("data", (chunk) => (state.output += chunk));
  server.on("exit", () => (state.exited = true));

  await waitForServer(state);
});

after(() => stop(server));

async function render(path = "/") {
  return fetch(`${BASE_URL}${path}`, { headers: { accept: "text/html" } });
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
  assert.match(html, /App Store/);
  assert.match(html, /Google Play/);
  assert.match(html, /app-store-badge-ko\.svg/);
  assert.match(html, /google-play-badge-ko\.png/);
  assert.match(html, /app-icon-original\.png/);
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

test("serves the static assets referenced by the pages", async () => {
  const assets = [
    "/app-icon.png",
    "/app-icon-original.png",
    "/app-store-badge-ko.svg",
    "/google-play-badge-ko.png",
    "/og.png",
  ];

  for (const asset of assets) {
    const response = await fetch(`${BASE_URL}${asset}`);
    assert.equal(response.status, 200, `${asset} should be served`);
  }
});

test("ships project assets and removes the starter preview", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");

  assert.match(layout, /\/og\.png/);
  assert.match(layout, /lang="ko"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await access(new URL("../public/app-icon.png", import.meta.url));
  await access(new URL("../public/app-icon-original.png", import.meta.url));
  await access(new URL("../public/app-store-badge-ko.svg", import.meta.url));
  await access(new URL("../public/google-play-badge-ko.png", import.meta.url));
  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
