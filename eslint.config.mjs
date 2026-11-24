import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettier,
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@next/next/no-img-element': 'off',
      'react/jsx-key': 'warn',
      // New in react-hooks v7; flags existing, working hooks. Revisit separately.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.yarn/**',
      '.next/**',
      'out/**',
      'build/**',
      'coverage/**',
      'public/**',
      'next-env.d.ts',
    ],
  },
];

export default eslintConfig;
