#!/usr/bin/env bash
set -euo pipefail

if [ -z "${COVASYN_API_KEY:-}" ]; then
  echo "Set COVASYN_API_KEY first."
  exit 1
fi

API="https://api.covasyn.com/mcp"

echo "=== List tools ==="
curl -s -X POST "$API" \
  -H "Authorization: Bearer ${COVASYN_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | head -50

echo ""
echo "=== Canonicalize aspirin ==="
curl -s -X POST "$API" \
  -H "Authorization: Bearer ${COVASYN_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc":"2.0","id":2,"method":"tools/call",
    "params":{"name":"covabasic_canonicalize","arguments":{"smiles":"CC(=O)Oc1ccccc1C(=O)O"}}
  }'
echo ""
