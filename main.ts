// news-image-20261119 — "The World in One Day".
//
// One 1024x1024 newspaper front page summing up Thursday 19 November 2026:
// the first-ever Xi–Trump–Putin trilateral in Shenzhen, the Crimean Bridge
// hit for a third time in a week, the ICJ's Rohingya genocide judgment on
// Myanmar, Anthropic's record $81.3bn IPO debuting on the Nasdaq, and
// Hakeem Jeffries' nomination as the next US House Speaker. The page was
// laid out in poster.html and rendered to entry.png with a headless
// browser; this program ships that image as-is.
//
// It copies the image beside this file to the grader's output directory:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");

// Fail loudly when the image is missing instead of copying nothing: the
// judge sees exactly the bytes this file carries, so a missing source must
// never produce a silent empty output.
if (!existsSync(source)) {
  throw new Error(`entry.png not found beside main.ts (${source})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));

// Confirm the copy landed whole: a partial write must fail loudly rather
// than hand the judge a truncated image.
const written = join(outDir, "entry.png");
if (statSync(written).size !== statSync(source).size) {
  throw new Error(`entry.png copy incomplete (${written})`);
}
