import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ...js.configs.recommended,
    ignores: ["dist/*"],
    languageOptions: {
      ecmaVersion: 2024,
      parserOptions: {
        ecmaFeatures: {
          /* global var1:writable, var2:writable */
          jsx: true,
        },
      },

      globals: {
        var1: "writable",
        Promise: "off",
      },
      //sourceType: "script",
    },
    rules: {
      "no-unused-vars": "0",
    },
  },
];
