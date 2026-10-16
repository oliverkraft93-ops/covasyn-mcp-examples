# CovaSyn MCP Examples

Configuration snippets for connecting [CovaSyn](https://www.covasyn.com) to common Model Context Protocol clients.

CovaSyn delivers verified chemistry and analytics evaluations for pharma, biotech and chemical labs: impurity assessment under ICH M7, stability under ICH Q1, spectra interpretation, method development and more. Every result comes with its method and limits stated, so your experts can check and sign it off.

## Benchmark headline

On the **MolecularIQ benchmark** (Klambauer Lab, JKU Linz, 3,540 symbolically verified chemistry tasks), results were 14 to 41 % correct without CovaSyn and 76 to 92 % with CovaSyn. Methodology: [covasyn.com/en/benchmark](https://www.covasyn.com/en/benchmark).

## What's in here

| Example | Client | Description |
|---------|--------|-------------|
| [claude-desktop/](./claude-desktop/) | Claude Desktop | `claude_desktop_config.json` snippet |
| [cursor/](./cursor/) | Cursor IDE | `.cursor/mcp.json` snippet |
| [vscode/](./vscode/) | VS Code with MCP extension | `settings.json` snippet |
| [python-agent/](./python-agent/) | Custom Python agent | minimal stdio MCP client |
| [typescript-agent/](./typescript-agent/) | Custom TypeScript agent | minimal MCP TS client |
| [curl/](./curl/) | Direct HTTP | shell snippets for connecting |

## Getting access

Create an account at [workspace.covasyn.com](https://workspace.covasyn.com/en/auth/signup) and generate a key under API keys. Plans and terms are shown in the workspace.

If you would rather receive the finished evaluation than run it yourself, or need it inside your own infrastructure, maintained by CovaSyn: [book an introductory call](https://www.covasyn.com/en/kennenlernen).

## Compliance posture

Designed for GxP environments (EU Annex 11, 21 CFR Part 11), with audit trail and EU data residency. Details: [covasyn.com/en/trust](https://www.covasyn.com/en/trust).

## License

The example snippets in this repository are released under the [MIT License](./LICENSE).

CovaSyn itself is commercial software and is operated and maintained by CovaSyn GmbH. See [covasyn.com](https://www.covasyn.com) for terms.

## Questions

oliver.kraft@covasyn.com
