module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'no-var': 'warn',
    'prefer-const': 'warn',
  },
};
