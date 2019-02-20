module.exports = {
  root: true,
  env: {
    node: true
  },
  // 使用第三方发规则库  eslint官网
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'

  ],
  // 配置自己的规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
