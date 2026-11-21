import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `May I? I asked the mountain.
Yes, said the mountain —
and the yes came back as my own voice,
louder than I had ever heard it.
I had been the permission all along.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");

mkdirSync(join(process.cwd(), "output"), { recursive: true });
writeFileSync(join(process.cwd(), "output", "entry.txt"), poem + "\n", "utf8");

console.log("poem chars: " + poem.length);
console.log("wrote /output/entry.txt and output/entry.txt");
