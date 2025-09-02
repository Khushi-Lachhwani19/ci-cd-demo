import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactNative from 'eslint-plugin-react-native';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react': reactRecommended,
      'react-native': reactNative,
    },
    rules: {
      // Add your custom rules here
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];