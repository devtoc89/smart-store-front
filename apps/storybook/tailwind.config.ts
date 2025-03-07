import path from "node:path";
import preset from "@repo/ui/tailwind.config";
import type { Config } from "tailwindcss";

const config: Config = {
  ...preset,
  presets: [preset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("@repo/ui")), "**/*.{js,ts,jsx,tsx,mdx}"),
  ],
};
export default config;
