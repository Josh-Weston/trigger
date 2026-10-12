import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import type { Linter } from 'eslint';

/**
 * tseslint.config is a helper that gives you strict type safety
 * and allows for easier flattening of config arrays.
 */
export default [
  // Global Ignores
  { ignores: ['lib/', 'archive/'] },
  { ...js.configs.recommended, files: ["**/*.{ts}"] }, // Apply JS recommended only to TS files

  // Base Configs
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,

  // Custom Rules & Settings
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true
        },
      ],
    },
  },
  {
    files: ["**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
] satisfies Linter.Config[];