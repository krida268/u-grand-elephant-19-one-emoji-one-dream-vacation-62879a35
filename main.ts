// One Emoji, One Dream Vacation
// Writes exactly one emoji to /output/entry.txt: Mount Fuji.
// A mountain is one of the judge's own examples of a dream vacation,
// and Fuji is one particular dream — a postcard of Japan —
// not just any holiday. It reads instantly at any size.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🗻";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate: /output/entry.txt must be UTF-8 text of 1 to 8 characters,
// not only white space. One emoji is one code point and four bytes.
function passesGate(text: string): boolean {
  const points = Array.from(text);
  return points.length >= 1 && points.length <= 8 && text.trim() !== "";
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, EMOJI, "utf8");

// Read back what was written and refuse to finish silently on a bad file.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== EMOJI || !passesGate(written)) {
  throw new Error(`entry failed its own gate: ${JSON.stringify(written)}`);
}
