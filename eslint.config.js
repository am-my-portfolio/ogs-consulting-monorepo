import eslintJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import pluginVue from 'eslint-plugin-vue';

// https://eslint.org/docs/latest/use/getting-started
export default [
  {
    // Note: there should be no other properties in this object
    ignores: [
      'coverage',
      '**/public',
      '**/*dist',
      '**/node_modules',
      '**/*.config.js',
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
    ],
  },
  // general defaults
  eslintJs.configs['recommended'],
  // general
  {
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },

  // chosen typescript defaults - could not get this working
  // ...tsEslint.configs['recommended'],
  // typescript
  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: tsEslint.parser,
    },
  },

  // chosen vue defaults
  ...pluginVue.configs['flat/essential'],
  // vue
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser, // parse TS inside VUE
      },
    },
  },
];
