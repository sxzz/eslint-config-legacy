const { defineConfig } = require('eslint-define-config')
const { getPackageInfoSync } = require('local-pkg')

const pkg = getPackageInfoSync('vue')
let vueVersion = pkg && pkg.version
vueVersion = +(vueVersion && vueVersion[0])
vueVersion = Number.isNaN(vueVersion) ? 3 : vueVersion

module.exports = defineConfig({
  globals: {
    // Reactivity Transform
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $shallowRef: 'readonly',
    $computed: 'readonly',
    $customRef: 'readonly',
    $toRef: 'readonly',
  },
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
      globals: {
        // script setup
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',

        // RFC: https://github.com/vuejs/rfcs/discussions/430
        defineOptions: 'readonly',
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  extends: [
    vueVersion === 3 ? 'plugin:vue/vue3-recommended' : 'plugin:vue/recommended',
    '@sxzz/eslint-config-ts',
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],

    // Reactivity Transform
    'vue/no-setup-props-destructure': 'off',
  },
})
