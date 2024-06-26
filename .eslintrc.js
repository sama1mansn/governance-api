module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node:https:false,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'migrations/*', 'dist/*'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        'pathGroupsExcludedImportTypes': ['builtin'],
        'pathGroups': [
          {
            pattern: '@src/**/**',
            group: 'parent',
          },
          {
            pattern: '@lib/**/**',
            group: 'parent',
          },
        ],
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
