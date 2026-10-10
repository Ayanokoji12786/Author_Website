const esbuild = require("esbuild");
const fs = require("node:fs");
const path = require("node:path");
// This directory contains only this build's generated assets. Remove stale chunks.
fs.rmSync(path.resolve(__dirname, "../public/book-world"), {
  recursive: true,
  force: true,
});
esbuild.buildSync({
  entryPoints: [path.resolve(__dirname, "../lib/book-world/controller.js")],
  outdir: path.resolve(__dirname, "../public/book-world"),
  bundle: true,
  format: "esm",
  splitting: true,
  target: ["es2020"],
  minify: true,
  chunkNames: "[name]-[hash]",
  legalComments: "eof",
  define: { "process.env.NODE_ENV": '"production"' },
});
fs.writeFileSync(
  path.resolve(__dirname, "../public/book-journey.js"),
  '/* Lazy, same-origin 3D journey. The semantic document remains usable if loading fails. */\nimport("./book-world/controller.js").catch(function(){var r=document.getElementById("literary-experience");if(r)r.dataset.worldStatus="unavailable";});\n',
);
fs.copyFileSync(
  path.resolve(__dirname, "../node_modules/three/LICENSE"),
  path.resolve(__dirname, "../public/book-world/LICENSE.txt"),
);
console.log("Bundled the persistent Three.js book journey.");
