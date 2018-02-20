module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: { 
    'arrow-parens': 0,
    'no-new': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}