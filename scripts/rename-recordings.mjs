/**
 * rename-recordings.mjs
 * Renames the timestamped .webm files Playwright outputs
 * into human-readable names.
 *
 * Run AFTER both record scripts:
 *   node scripts/rename-recordings.mjs
 */

import { readdirSync, renameSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, "..", "recordings");

const webms = readdirSync(DIR)
  .filter((f) => f.endsWith(".webm"))
  .map((f) => ({ name: f, mtime: statSync(join(DIR, f)).mtimeMs }))
  .sort((a, b) => a.mtime - b.mtime); // oldest = desktop, newest = mobile

const names = ["desktop-walkthrough.webm", "mobile-walkthrough.webm"];

webms.forEach((f, i) => {
  if (names[i] && f.name !== names[i]) {
    renameSync(join(DIR, f.name), join(DIR, names[i]));
    console.log(`  ${f.name} → ${names[i]}`);
  }
});

console.log("\nDone. Files in recordings/:");
readdirSync(DIR).forEach((f) => console.log(" •", f));
console.log(
  "\nTo convert to MP4, run:\n  ffmpeg -i recordings/desktop-walkthrough.webm -c:v libx264 -crf 18 -preset slow recordings/desktop-walkthrough.mp4\n  ffmpeg -i recordings/mobile-walkthrough.webm -c:v libx264 -crf 18 -preset slow recordings/mobile-walkthrough.mp4"
);
