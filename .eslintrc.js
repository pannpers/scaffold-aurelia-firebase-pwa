module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module', // allow for the use of imports
    project: './tsconfig.json',
  },
  plugins: ['prettier'],
  extends: [
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
    'airbnb-base',
    // https://github.com/typescript-eslint/typescript-eslint/blob/ecc96318f47d821c19513652f262b47b15fd8257/packages/eslint-plugin/src/configs/recommended.json
    'plugin:@typescript-eslint/recommended',
    // https://prettier.io/docs/en/integrating-with-linters.html
    'prettier',
    'prettier/@typescript-eslint', // disable ESLint rules that would conflict with prettier.
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
};
