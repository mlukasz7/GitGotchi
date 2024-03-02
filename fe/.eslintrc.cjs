module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'vue'],
  extends: ['eslint:recommended', '@nuxtjs/eslint-config-typescript'],
  rules: {
    'comma-dangle': 'off',
    semi: 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};
