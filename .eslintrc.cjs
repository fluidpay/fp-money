module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    // Debugging
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // TypeScript
    'indent': ['error', 2],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': ['error', {
      'skipBlankLines': true,
      'ignoreComments': true
    }],

    // Vue
    'vue/multi-word-component-names': 'off',
    'vue/block-lang': ['error',
      {
        'script': {
          'lang': 'ts'
        }
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'style', 'template'],
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        order: ['name', 'components', 'props', 'data', 'setup', 'mounted', 'computed', 'watch', 'methods'],
      },
    ],
  },
}
