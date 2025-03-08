import path from "node:path";
import uiConfig from "@repo/ui/tailwind.config";
import type { Config } from "tailwindcss";

const userConfig: Config = {
  ...uiConfig,
  presets: [uiConfig],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("@repo/ui")), "**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
      },
    },
  },
};
export default userConfig;
