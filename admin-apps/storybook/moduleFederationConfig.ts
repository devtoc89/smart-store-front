import type { ModuleFederationOptions } from "@module-federation/rsbuild-plugin";

const remotes: ModuleFederationOptions["remotes"] = {
  styler: "styler@http://localhost:1001/mf-manifest.json",
  ui: "ui@http://localhost:2001/mf-manifest.json",
};

const shared: ModuleFederationOptions["shared"] = {
  react: {
    singleton: true,
    eager: true,
    shareStrategy: "loaded-first",
  },
  "react-dom": {
    singleton: true,
    eager: true,
    shareStrategy: "loaded-first",
  },
};

export default function getModuleFederationConfig(): ModuleFederationOptions {
  return {
    name: "storybook",
    remotes,
    shared,
    // shareStrategy: "loaded-first",
    // dataPrefetch: true,
  };
}
