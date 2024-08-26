module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      files: ['**/*/*.test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'object-curly-newline': ['error', {
      ImportDeclaration: 'never',
    }],
    'no-new': 0,
    'max-classes-per-file': [
      'error',
      { max: 10 },
    ],
    'no-restricted-syntax': 'off',
    'arrow-body-style': 'off',
    'no-plusplus': 'off',
  },
};
