module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      globals: {
        // script setup
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',

        // Ref sugar
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $computed: 'readonly',
        $fromRefs: 'readonly',
        $raw: 'readonly',
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',

        // Ref sugar
        'prefer-const': 'off',
      },
    },
  ],
  extends: ['plugin:vue/vue3-recommended', '@sxzz/eslint-config-ts'],
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/no-v-html': 'off',
  },
};
