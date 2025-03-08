import type { StorybookConfig } from "storybook-react-rsbuild";

const config: StorybookConfig = {
  framework: "storybook-react-rsbuild",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@chromatic-com/storybook", "@storybook/addon-interactions"],
  rsbuildFinal: (config) => {
    return config;
  },
};

export default config;
