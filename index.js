// example/index.js
// Demonstrates basic usage of the mcp-secrets-guard package.

import { scanProject } from "mcp-secrets-guard";

/**
 * Directory that will be scanned.
 * By default we scan the parent folder (the repository root).
 * Change this to any path you want to check.
 */
const targetPath = ".."; // relative to this example folder

// Run the scanner and print the results.
scanProject(targetPath)
  .then(findings => {
    if (findings.length === 0) {
      console.log("✅ No secrets found!");
    } else {
      console.log(`🔎 Found ${findings.length} secret${findings.length > 1 ? "s" : ""}:`);
      findings.forEach(f => {
        console.log(`- ${f.filePath}:${f.lineNumber} – ${f.message}`);
      });
    }
  })
  .catch(err => {
    console.error("❌ Scan failed:", err);
  });
