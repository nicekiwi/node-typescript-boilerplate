module.exports = {
    env: {
      es2022: true,
      node: true,
    },
    globals: {},
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 13,
      sourceType: 'module',
      project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      'no-console': 'off',
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'semi': ['error', 'never'],
      '@typescript-eslint/quotes': ['error', 'single'],
      '@typescript-eslint/indent': ['error', 2],
      '@typescript-eslint/semi': ['error', 'never'],
    },
    ignorePatterns: [
      'dist/',
      'node_modules/',
      '.eslintrc.js'
    ]
  }
  