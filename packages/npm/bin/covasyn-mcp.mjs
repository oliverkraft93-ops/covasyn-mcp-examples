#!/usr/bin/env node
// covasyn-mcp — stdio bridge to the hosted CovaSyn MCP server.
//
// MCP clients that only speak stdio (or whose users prefer a one-liner)
// run `npx covasyn-mcp`; the actual protocol bridging is delegated to
// mcp-remote, the de-facto standard stdio<->streamable-http adapter.
// This wrapper contributes exactly two things: the endpoint URL and the
// key onboarding, so a missing key produces instructions instead of a
// cryptic 401.

import { spawn } from "node:child_process";

const ENDPOINT = "https://mcp.covasyn.com/mcp";

function readKey(argv) {
  const i = argv.indexOf("--key");
  if (i !== -1 && argv[i + 1]) return { key: argv[i + 1], rest: [...argv.slice(0, i), ...argv.slice(i + 2)] };
  if (process.env.COVASYN_API_KEY) return { key: process.env.COVASYN_API_KEY, rest: argv };
  return { key: null, rest: argv };
}

const { key, rest } = readKey(process.argv.slice(2));

if (!key) {
  // Onboarding goes to stderr: stdout belongs to the MCP protocol.
  process.stderr.write(
    [
      "covasyn-mcp: no API key found.",
      "",
      "  1. Create a free account:  https://workspace.covasyn.com/en/auth/signup",
      "     (100 analyses/week, no payment details required)",
      "  2. Generate a key:         https://workspace.covasyn.com/en/dashboard/keys",
      "  3. Provide it either way:",
      "       export COVASYN_API_KEY=<your-key>",
      "       npx covasyn-mcp --key <your-key>",
      "",
      "  Docs: https://covasyn.com/en/docs/mcp/auth",
      "",
    ].join("\n"),
  );
  process.exit(1);
}

const child = spawn(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["-y", "mcp-remote@latest", ENDPOINT, "--header", `X-CovaSyn-Key:${key}`, ...rest],
  { stdio: "inherit" },
);

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
child.on("error", (err) => {
  process.stderr.write(`covasyn-mcp: failed to start mcp-remote: ${err.message}\n`);
  process.exit(1);
});
