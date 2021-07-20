module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  ignorePatterns: ["node_modules/*", ".next/*"],
  extends: ["eslint:recommended"],
  // overrides: [
  //     // This configuration will apply only to TypeScript files
  //     {
  //         files: ['**/*.ts', '**/*.tsx'],
  //         parser: '@typescript-eslint/parser',
  //         settings: { react: { version: 'detect' } },
  //         env: {
  //             browser: true,
  //             node: true,
  //             es6: true,
  //         },
  //         extends: [
  //             'eslint:recommended',
  //             'plugin:@typescript-eslint/recommended', // TypeScript rules
  //             'plugin:react/recommended', // React rules
  //             'plugin:react-hooks/recommended', // React hooks rules
  //             'plugin:jsx-a11y/recommended', // Accessibility rules
  //             'plugin:prettier/recommended',
  //         ],
  //         rules: {
  //             'jsx-a11y/accessible-emoji': 'off',
  //             'react/prop-types': 'off',
  //             'react/no-unescaped-entities': 'off',
  //             'react/react-in-jsx-scope': 'off',
  //             'jsx-a11y/anchor-is-valid': 'off',
  //             '@typescript-eslint/no-unused-vars': ['error'],
  //             '@typescript-eslint/explicit-function-return-type': [
  //                 'warn',
  //                 {
  //                     allowExpressions: false,
  //                     allowConciseArrowFunctionExpressionsStartingWithVoid: false,
  //                 },
  //             ],
  //             'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  //         },
  //     },
  // ],
};
