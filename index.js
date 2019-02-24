module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['react-hooks'],
  rules: {
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
