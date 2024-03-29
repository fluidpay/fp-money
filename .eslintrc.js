module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Added to shut up linting for now
    camelcase: 'off',
    'no-useless-escape': 'off',
    'no-empty-pattern': 'off',
    'no-new': 'off',

    // Vue ones
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
