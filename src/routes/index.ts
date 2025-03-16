import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const filesRead = fs.readdirSync(__dirname).filter(file =>
    file !== "index.ts" && file.endsWith(".ts")
);

await Promise.all(
    filesRead.map(async (file) => {
        const routeModule = await import(`./${file}`);
        const routeName = file.replace(".ts", "");

        if (routeModule.default) {
            router.use(`/${routeName}`, routeModule.default);
        }
    })
);

export default router;
