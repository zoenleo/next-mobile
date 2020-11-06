module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'handle-callback-err': 'off',
    'comma-dangle': 'warn',
    'no-unused-vars': 'warn',
    'prefer-promise-reject-errors': 'off',
    'no-console': 'off',
    'space-before-function-paren': 0,
    'no-new': 'off',
    'no-inner-declarations': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      rules: {}
    }
  ]
}
