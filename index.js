module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'prefer-const': 'warn',
  },
};
