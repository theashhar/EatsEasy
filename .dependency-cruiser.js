module.exports = {
  options: {
    doNotFollow: {
      dependencyTypes: [
        "npm",
        "npm-dev",
        "npm-optional",
        "npm-peer",
        "npm-bundled",
        "npm-no-pkg",
      ],
    },

    // Update the includeOnly option to reflect your folder structure
    includeOnly: "^(app|assets|constants|hooks|components)",

    tsPreCompilationDeps: false,

    tsConfig: {
      fileName: "./tsconfig.json",
    },

    // If you are not using Yarn Plug'n'Play, set this to 'node_modules' or remove it
    externalModuleResolutionStrategy: "node_modules",

    progress: { type: "performance-log" },

    reporterOptions: {
      archi: {
        collapsePattern: 
          "^app/[^/] + | assets/[^/] + |constants/[^/] + |hooks/[^/] + |components/[^/]+", // Adjusted for your folder structure

        theme: {
          modules: [
            {
              criteria: { collapsed: true },
              attributes: { shape: "tab" },
            },
            {
              criteria: { source: "^app/[^/]+" },
              attributes: { fillcolor: "#ffbdbd" },
            },
            {
              criteria: { source: "^assets/[^/]+" },
              attributes: { fillcolor: "#ffd9a3" },
            },
            {
              criteria: { source: "^constants/[^/]+" },
              attributes: { fillcolor: "#aedaff" },
            },
            {
              criteria: { source: "^hooks/[^/]+" },
              attributes: { fillcolor: "#efefef" },
            },
            {
              criteria: { source: "^components/[^/]+" },
              attributes: { fillcolor: "#d1c4e9" }, // Example color for components
            },
          ],
          graph: {
            splines: "ortho",
            rankdir: "TB",
            ranksep: "1",
          },
        },
      },
    },
  },
};
