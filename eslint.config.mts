import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import type { Linter } from 'eslint';

/**
 * tseslint.config is a helper that gives you strict type safety
 * and allows for easier flattening of config arrays.
 */
export default [
  // Global Ignores
  { ignores: ['lib/', 'archive/'] },
  { settings: { react: { version: 'detect' } } },
  { ...js.configs.recommended, files: ["**/*.{ts}"] }, // Apply JS recommended only to TS files

  // Base Configs
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Custom Rules & Settings
  {
    files: ['**/*.{ts}'],
    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    },
  }
] satisfies Linter.Config[];