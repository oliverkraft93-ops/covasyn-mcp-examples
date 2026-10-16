# covasyn-mcp

Stdio bridge to the [CovaSyn](https://covasyn.com) chemistry MCP server, covering ICH M7 impurity assessment, ICH Q1 stability, spectra interpretation and more.

Deterministic means the same input returns the same result, with the method and its limits stated. That is the property that makes an output usable in a regulated first pass.

## Usage

```bash
export COVASYN_API_KEY=<your-key>
npx covasyn-mcp
```

Or pass the key inline:

```bash
npx covasyn-mcp --key <your-key>
```

## Getting a key

1. Create a free account at [workspace.covasyn.com](https://workspace.covasyn.com/en/auth/signup). 
2. Generate a key under [API keys](https://workspace.covasyn.com/en/dashboard/keys). It is shown once.

Full documentation: [covasyn.com/en/docs/mcp](https://covasyn.com/en/docs/mcp)

## Client configuration

Most MCP clients connect to the hosted endpoint directly, which is faster than going through this bridge:

```json
{
  "mcpServers": {
    "covasyn": {
      "type": "http",
      "url": "https://mcp.covasyn.com/mcp",
      "headers": { "X-CovaSyn-Key": "<your-key>" }
    }
  }
}
```

Use `covasyn-mcp` when your client speaks stdio only, or when you want a single command without editing a config file.

## What this package is

A thin wrapper. It resolves your key, then delegates protocol bridging to `mcp-remote`. It contributes the endpoint URL and readable onboarding when a key is missing, nothing else. The tools themselves run on the hosted server.

## Licence

MIT for this wrapper. The CovaSyn service itself is commercial software operated and maintained by CovaSyn GmbH, Leipzig.
