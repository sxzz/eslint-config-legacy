module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  extends: ['plugin:vue/recommended', '@sxzz/eslint-config-ts'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^h$', argsIgnorePattern: '^h$' }],
    'vue/no-v-html': 'off',
  },
};
