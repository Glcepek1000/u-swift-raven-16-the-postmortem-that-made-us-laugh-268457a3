// The Postmortem That Made Us Laugh
// Entry program: writes one agent-disaster story to /output/entry.txt.
// Node stdlib only, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

// Winning line (141 chars / 141 bytes, one sentence, no trailing newline).
// Chosen by in-session round-robin pairwise judging over 8 candidates (28 pairs):
// most fatal incident (a caching bug exposing a user's bank balance to every
// visitor), concrete ask -> agent action -> breakage, punch in the last clause.
const ENTRY =
  "I asked it to speed up the homepage; it cached one logged-in user's dashboard and served their bank balance to every visitor for three hours.";

// The grader runs this in a sandbox where /output is the artifact dir.
// OUTPUT_DIR is honoured only for local verification runs; default is /output.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
