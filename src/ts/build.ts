import links from "../json/links.json" with { type: "json" };
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";

const OUTPUT_DIRECTORY = "./dist";
const OUTPUT_PATH = path.join(OUTPUT_DIRECTORY, "_redirects");

const modifiedLinks: Array<(typeof links)[number]> = [];

for (const link of links) {
    if (link.source === "/") continue;

    if (link.source.endsWith("/")) {
        modifiedLinks.push({
            source: link.source.slice(0, -1),
            destination: link.destination,
            code: link.code
        });
    } else {
        modifiedLinks.push({
            source: `${link.source}/`,
            destination: link.destination,
            code: link.code
        });
    }
}

links.push(...modifiedLinks);

const main = async () => {
    const redirects = links.map((link) => `${link.source} ${link.destination} ${link.code ?? 302}`);
    const redirectsString = `${redirects.join("\n")}\n`;

    if (!fsSync.existsSync(OUTPUT_DIRECTORY)) {
        await fs.mkdir(OUTPUT_DIRECTORY);
    }

    await fs.writeFile(OUTPUT_PATH, redirectsString);
};

void main();
