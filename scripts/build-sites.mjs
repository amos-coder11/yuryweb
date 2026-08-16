import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const projectDir = dirname(dirname(fileURLToPath(import.meta.url)));
const nextBin = join(projectDir, "node_modules", "next", "dist", "bin", "next");

const build = spawnSync(process.execPath, [nextBin, "build", "--webpack"], {
  cwd: projectDir,
  env: { ...process.env, SITE_STATIC_EXPORT: "1" },
  stdio: "inherit",
});

if (build.status !== 0) process.exit(build.status ?? 1);

const distDir = join(projectDir, "dist");
const clientDir = join(distDir, "client");
const serverDir = join(distDir, "server");

rmSync(distDir, { recursive: true, force: true });
mkdirSync(clientDir, { recursive: true });
mkdirSync(serverDir, { recursive: true });
cpSync(join(projectDir, "out"), clientDir, { recursive: true });

writeFileSync(
  join(serverDir, "index.js"),
  `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || request.method !== "GET") return response;

    const url = new URL(request.url);
    if (url.pathname.includes(".")) return response;

    url.pathname = url.pathname.replace(/\\/$/, "") + "/index.html";
    return env.ASSETS.fetch(new Request(url, request));
  },
};
`,
  "utf8",
);

console.log("Sites bundle ready in dist/");
