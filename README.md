# CovaSyn MCP Examples

Production-ready integration snippets for connecting [CovaSyn](https://www.covasyn.com) — the deterministic, validated chemistry MCP server for pharmaceutical R&D — to the most common Model Context Protocol clients.

## What's in here

| Example | Client | Description |
|---------|--------|-------------|
| [claude-desktop/](./claude-desktop/) | Claude Desktop | `claude_desktop_config.json` snippet |
| [cursor/](./cursor/) | Cursor IDE | `.cursor/mcp.json` snippet |
| [vscode/](./vscode/) | VS Code with MCP extension | `settings.json` snippet |
| [python-agent/](./python-agent/) | Custom Python agent | minimal stdio-MCP client |
| [typescript-agent/](./typescript-agent/) | Custom TypeScript agent | minimal MCP TS client |
| [curl/](./curl/) | Direct HTTP | shell snippets for tool discovery + invocation |

## What CovaSyn covers

130 functions across 8 tool families:

- `covabasic` — core cheminformatics (canonicalization, fingerprints, druglikeness)
- `covachem` — chem ADME, pKa, profile, compare
- `covatox` — toxicology with ICH M7 batch assessment, Tox21, CYP450
- `covams` — mass spectrometry (formula, fragments, impurities, RT)
- `covanmr` — NMR analysis (1D, 2D, batch, identification)
- `covafold` — protein and RNA folding, binding sites
- `covabio` — antibody, peptide, ADC, mRNA, oligo, siRNA
- `covaplatform` — stability (ICH Q1), DoE, solubility, chromatography, UV/IR, regulatory DB, docking

Full tool reference: [covasyn.com/en/mcp](https://www.covasyn.com/en/mcp)

## Pricing

- Free tier: 100 credits/week
- Pro: €250/month
- Unlimited: €750/month
- Enterprise: custom (SLA, single-tenant, GxP validation pack)

[See pricing →](https://www.covasyn.com/en/pricing)

## Compliance posture

CovaSyn is GxP-ready (EU Annex 11, 21 CFR Part 11), GAMP 5 Software Category 4, with ICH M7 (R2) mutagenic impurity assessment and ICH Q1A/E stability workflows. Deterministic, version-pinned, audit-trail-complete.

[See compliance details →](https://www.covasyn.com/en/trust)

## License

The example snippets in this repository are released under the [MIT License](./LICENSE) — use, modify, and redistribute freely.

CovaSyn itself is commercial software. See [covasyn.com](https://www.covasyn.com) for terms.

## Contributing

PRs welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Comparison

How CovaSyn compares to other chemistry MCP options:

- [vs Aichemy (Databricks)](https://www.covasyn.com/en/comparison/aichemy)
- [vs ChemMCP](https://www.covasyn.com/en/comparison/chemmcp)
- [vs DIY Python](https://www.covasyn.com/en/comparison/diy-python)
- [vs OpenChem MCP](https://www.covasyn.com/en/comparison/openchem-mcp)
