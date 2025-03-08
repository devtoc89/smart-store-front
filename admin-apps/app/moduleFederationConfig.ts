import type { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";

const remotes: ModuleFederationOptions["remotes"] = {
  styler: "styler@http://localhost:1001/mf-manifest.json",
  ui: "ui@http://localhost:2001/mf-manifest.json",
};

const exposes: ModuleFederationOptions["exposes"] = {};

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
    name: "app",
    remotes,
    exposes,
    shared,
  };
}
