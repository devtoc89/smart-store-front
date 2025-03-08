import path from "node:path";
import preset from "@repo/ui/tailwind.config";
import type { Config } from "tailwindcss";

const config: Config = {
  ...preset,
  presets: [preset],
  content: [
    "./src/**/*.{tsx, jsx}",
    "../app/src/**/*.{tsx, jsx}",
    "../ui/src/**/*.{tsx, jsx}",
    "../widget-test/src/**/*.{tsx, jsx}",
    "../storybook/src/**/*.{tsx, jsx}",
    path.join(path.dirname(require.resolve("@repo/ui")), "**/*.{js,ts,jsx,tsx,mdx}"),
  ],
};
export default config;
