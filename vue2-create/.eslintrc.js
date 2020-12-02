module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'indent': 'off',
    'semi': 'off',
    'quote': 'off',
    'space-infix-ops': 'off'
  }
}
