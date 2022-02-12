# @sxzz/eslint-config

Forked from [antfu/eslint-config](https://github.com/antfu/eslint-config)

## Usage

```bash
pnpm i -D @sxzz/eslint-config-basic # JavaScript only
# Or yarn add -D / npm install -D
pnpm i -D @sxzz/eslint-config-ts # JavaScript and TypeScript
pnpm i -D @sxzz/eslint-config-vue # JavaScript, TypeScript and Vue 3
pnpm i -D @sxzz/eslint-config-vue2 # JavaScript, TypeScript and Vue 2

pnpm i -D @sxzz/eslint-config-prettier # Prettier only
pnpm i -D @sxzz/eslint-config # JavaScript, TypeScript, Vue 3 and Prettier
```

## Quick start

### Vue 3

```bash
pnpm i -D @sxzz/eslint-config
```

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: ['@sxzz/eslint-config'],
  rules: {
    // Your custom rules
  },
};
```

```json
// .prettierrc
{
  "singleQuote": true,
  "semi": true,
  "arrowParens": "avoid",
  "jsxSingleQuote": true,
  "endOfLine": "lf",
  "trailingComma": "es5"
}
```

### VSCode

```json
// settings.json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "json",
    "json5",
    "jsonc",
    "yaml"
  ],
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "json",
    "json5",
    "jsonc",
    "yaml"
  ]
}
```

## License

MIT License © 2021-PRESENT [三咲智子](https://github.com/sxzz)
