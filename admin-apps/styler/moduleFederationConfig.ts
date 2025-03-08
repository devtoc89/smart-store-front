import type { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";

const remotes: ModuleFederationOptions["remotes"] = {};

const exposes: ModuleFederationOptions["exposes"] = {
  "./loadStyle": "./src/load.style.ts",
};

const shared: ModuleFederationOptions["shared"] = {
  react: {
    singleton: true,
    strictVersion: true,
    requiredVersion: "19.0.0",
  },
  "react-dom": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "19.0.0",
  },
};

export default function getModuleFederationConfig(): ModuleFederationOptions {
  return {
    name: "styler",
    remotes,
    exposes,
    shared,
  };
}
