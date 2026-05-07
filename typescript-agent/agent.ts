import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const apiKey = process.env.COVASYN_API_KEY;
if (!apiKey) {
  console.error("Set COVASYN_API_KEY first.");
  process.exit(1);
}

const transport = new StdioClientTransport({
  command: "npx",
  args: ["-y", "@covasyn/mcp-client"],
  env: { ...process.env, COVASYN_API_KEY: apiKey },
});

const client = new Client({ name: "covasyn-example", version: "0.0.1" }, { capabilities: {} });
await client.connect(transport);

const tools = await client.listTools();
console.log(`Connected — ${tools.tools.length} tools`);

const result = await client.callTool({
  name: "covabasic_canonicalize",
  arguments: { smiles: "CC(=O)Oc1ccccc1C(=O)O" },
});
console.log("Aspirin canonical:", result.content);

await client.close();
