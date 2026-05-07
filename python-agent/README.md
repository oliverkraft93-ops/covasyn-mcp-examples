# Python Agent + CovaSyn

Minimal example showing how to spawn the CovaSyn MCP client from a Python agent and invoke a tool.

## Requirements

- Python 3.11+
- `mcp` Python package (`pip install mcp`)
- A CovaSyn API key (Free tier works for this example)

## Run

```bash
export COVASYN_API_KEY=your_key_here
python agent.py
```

The script connects via stdio, lists available tools, and invokes `covabasic_canonicalize` on a sample SMILES.
