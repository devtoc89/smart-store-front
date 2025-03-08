// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

import type { Preview } from "@storybook/react";
import InitializeComponents from "../src/InitializeComponents";
const preview: Preview = {
  decorators: [
    (Story) => (
      <InitializeComponents>
        <Story />
      </InitializeComponents>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: "None", value: "transparent" },
        { name: "Dark", value: "#333" },
        { name: "Light", value: "#F7F9F2" },
        { name: "Maroon", value: "#400" },
        { name: "Background", value: "#E5E5E5" },
      ],
      // 👇 Specify which background is shown by default
      default: "None",
    },
  },
};

export default preview;
