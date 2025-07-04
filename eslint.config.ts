import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import oxlint from 'eslint-plugin-oxlint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...oxlint.configs['flat/recommended'],
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript"
    ],
    rules: {
      "no-console": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  }),
];

export default eslintConfig;