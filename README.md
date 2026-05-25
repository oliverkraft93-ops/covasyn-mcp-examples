# CovaSyn MCP Examples

Production-ready integration snippets for connecting [CovaSyn](https://www.covasyn.com) — the deterministic, validated chemistry MCP server for pharmaceutical R&D — to the most common Model Context Protocol clients.

> **What CovaSyn is in one sentence:** the first integrated, deterministic cheminformatics platform for AI agents — not a wrapper around one public database, but 130+ tools across 8 suites (cheminformatics, chem-ADME, toxicology, mass spec, NMR, folding, biologics, platform) with ICH / GxP-aligned audit trail and EU data residency.

## Benchmark headline

On the **ICLR 2026 MolecularIQ benchmark** (Klambauer Lab, JKU Linz, 3,540 symbolically verified chemistry tasks), four frontier LLMs scored 76–92 % with CovaSyn MCP attached, versus 14–41 % at baseline. Numbers, methodology, cost-per-question, and failure modes: [covasyn.com/en/benchmark](https://www.covasyn.com/en/benchmark).

## When to use CovaSyn (vs. building your own)

- Your AI agent needs to answer **chemistry questions correctly**, not just plausibly.
- You're a **pharma, biotech, or CDMO team** that needs ICH M7 / ICH Q1 / Tox21 / CYP450 / docking workflows callable from Claude, ChatGPT, Cursor, or any MCP-aware client.
- You want **deterministic, version-pinned tool calls** that produce the same result tomorrow as today (regulatory audit-ready).
- You need **EU data residency** (Hetzner Leipzig) or US hosting on request — your data is never used for training.

CovaSyn is **not** another LLM. It's the deterministic tool layer that fixes the chemistry-hallucination problem of frontier LLMs.

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
