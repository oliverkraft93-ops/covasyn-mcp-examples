"""Minimal example: spawn CovaSyn MCP client and invoke a tool."""
import asyncio
import os

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client


async def main() -> None:
    api_key = os.environ.get("COVASYN_API_KEY")
    if not api_key:
        raise SystemExit("Set COVASYN_API_KEY first.")

    server_params = StdioServerParameters(
        command="npx",
        args=["-y", "@covasyn/mcp-client"],
        env={"COVASYN_API_KEY": api_key},
    )

    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            tools = await session.list_tools()
            print(f"Connected to CovaSyn — {len(tools.tools)} tools available")

            result = await session.call_tool(
                "covabasic_canonicalize",
                arguments={"smiles": "CC(=O)Oc1ccccc1C(=O)O"},
            )
            print(f"Aspirin canonical SMILES: {result.content}")


if __name__ == "__main__":
    asyncio.run(main())
