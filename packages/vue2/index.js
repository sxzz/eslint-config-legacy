module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  extends: ['plugin:vue/recommended', '@sxzz/eslint-config-ts'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^h$', argsIgnorePattern: '^h$' }],
    'vue/no-v-html': 'off',
  },
};
