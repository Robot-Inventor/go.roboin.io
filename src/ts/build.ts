import links from "../json/links.json";
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";

const OUTPUT_DIRECTORY = "./dist";
const OUTPUT_PATH = path.join(OUTPUT_DIRECTORY, "_redirects");

const main = async () => {
    const redirects = links.map((link) => `${link.source} ${link.destination} ${link.code ?? 302}`);
    const redirectsString = `${redirects.join("\n")}\n`;

    if (!fsSync.existsSync(OUTPUT_DIRECTORY)) {
        await fs.mkdir(OUTPUT_DIRECTORY);
    }

    await fs.writeFile(OUTPUT_PATH, redirectsString);
};

void main();
