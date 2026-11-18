# Example usage of `mcp-secrets-guard`

This folder contains a minimal Node.js script that demonstrates how to use the **`mcp-secrets-guard`** package to scan a directory for exposed secrets.

## Prerequisites

- Node.js >= 18 (the package specifies this in its `engines`).
- The package must be installed. You can install it globally after publishing:
  ```bash
  npm install -g mcp-secrets-guard
  ```
  or install it locally in another project with `npm i mcp-secrets-guard`.

## Run the example

```bash
cd example
node index.js
```

The script will:
1. Import the `scanProject` function from the package.
2. Scan the **parent directory** (the repository itself) for secrets.
3. Print the findings (if any) to the console.

You can adapt the `targetPath` variable to point at any folder you want to scan.
