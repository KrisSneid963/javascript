import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,

  {
    rules: {
      "no-unused-vars": warn,
      "prefer-const": [error, { ignoreReadBeforeAssign: true }],
    },
  },
];
eslintConfigPrettier;
