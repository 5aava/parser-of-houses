module.exports = {
  root: true,
  env: {
    'browser': true,
    'es6': true,
    'node': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'off',
    'indent': [2, 2, { 'SwitchCase': 1, 'VariableDeclarator': 2 }],
    'curly': [2, 'all'],
    'operator-linebreak': [2, 'after'],
    'quotes': [2, 'single'],
    'no-multi-str': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'keyword-spacing': [2, {}],
    'space-infix-ops': 2,
    'space-before-blocks': [2, 'always'],
    'eol-last': 2,
    'space-before-function-paren': [2, 'always'],
    'array-bracket-spacing': [2, 'never', { 'singleValue': false }],
    'space-in-parens': [2, 'never'],
    'no-multiple-empty-lines': 2,
    'space-unary-ops': [2, { 'nonwords': false, 'overrides': {} }],
  },
};
