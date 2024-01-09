// codegen.ts
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://mrkool.online:7002/graphql/",
  documents: "services/graphql/*.graphql",
  generates: {
    // generate types.ts
    "__generated__/graphql/types.ts": { plugins: ["typescript"] },
    // generate operations.ts
    "__generated__/graphql/operations.ts": {
      preset: "import-types",
      plugins: ["typescript-operations", "typescript-urql"],
      presetConfig: {
        typesPath: "./types",
      },
      config: {
        withHooks: false,
      },
    },
    // generate hooks in separate files
    "__generated__/graphql/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".hooks.ts",
        baseTypesPath: "./types.ts",
        folder: "../../__generated__/graphql/",
      },
      plugins: ["typescript-urql"],
      config: {
        withHooks: true,
        importOperationTypesFrom: "Operations",
        documentMode: "external",
        importDocumentNodeExternallyFrom: "./operations.ts",
        //* must import urql from @urql/next
        urqlImportFrom: "@urql/next",
      },
    },
    // schema
    "__generated__/graphql/schema.json": {
      plugins: ["urql-introspection"],
    },
  },
};

export default config;
