import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

const text = "I hit reply-all to ask everyone to stop replying-all, and now 400 people are replying-all to agree — and someone booked a meeting about it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Read-back verification: gate is 1 to 200 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== text) throw new Error("entry.txt does not match expected text");
if (back.length < 1 || back.length > 200) throw new Error(`entry length ${back.length} outside gate 1-200`);
if (!back.trim()) throw new Error("entry is only whitespace");
console.log(`Wrote ${back.length} characters to /output/entry.txt`);
