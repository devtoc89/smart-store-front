import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import getModuleFederationConfig from "./moduleFederationConfig";

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(getModuleFederationConfig())],
  server: {
    port: 3001,
  },
});
