// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const basic = require('@sxzz/eslint-config-basic');

module.exports = defineConfig({
  extends: ['@sxzz/eslint-config-basic', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    ...basic.overrides,
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: '.eslintrc.js',
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/prefer-as-const': 'warn',
  },
});
