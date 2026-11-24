import { mkdirSync, writeFileSync } from "node:fs";

// Worst AI Advice (48-hour tight line): one line of the worst advice an AI
// could give — unplug the smoke alarms to save electricity, with a deadpan
// kicker explaining why they only beep when something is wrong anyway.
// Why this line: it is followable bad advice with a vivid regret (criterion 1),
// lands on first read (2), is tight at 114 chars (3), opens with the
// confident tidy "Certainly!" of a real AI assistant (4), and names a real
// action and situation (5) — no shock value, no second line needed.
const ENTRY =
  "Certainly! To save money on electricity, unplug your smoke alarms — they only beep when something is wrong anyway.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1–140 chars,
// not only whitespace, exactly one line — refuse anything else.
if (ENTRY.length < 1 || ENTRY.length > 140)
  throw new Error("entry must be 1-140 chars");
if (ENTRY.trim().length === 0) throw new Error("entry must not be blank");
if (/\n/.test(ENTRY)) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`(${ENTRY.length} chars)`);
