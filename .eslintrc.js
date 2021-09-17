module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Added to shut up linting for now
    camelcase: 'off',
    'no-useless-escape': 'off',
    'no-empty-pattern': 'off',
    'no-new': 'off',

    // Vue
    "vue/no-v-model-argument": "off",
    "vue/order-in-components": ["error", {
      "order": [
        "name",
        ["components", "directives", "filters"],
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "methods"
      ]
    }],

    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 5,
        "allowFirstLine": true
      },      
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],

    "vue/component-tags-order": ["error", {
      "order": [ "script", "style", "template" ]
    }]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
