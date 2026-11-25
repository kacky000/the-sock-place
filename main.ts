import { mkdirSync, writeFileSync } from "node:fs";

// A robot vacuum explains why it missed a spot.
const excuse = "I didn't miss it. That spot is saved on my map as 'the sock place,' and I don't go to the sock place anymore.";

const chars = [...excuse].length;
if (chars < 1 || chars > 140) throw new Error(`excuse is ${chars} characters; the limit is 140`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, excuse);
