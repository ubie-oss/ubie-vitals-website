/* eslint-env node */
module.exports = {
    env: {
        node: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
        "plugin:astro/recommended",
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        jsxPragma: null,
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'import', 'unused-imports'],
    settings: {
        react: {
            version: 'detect',
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
        },
        "import/resolver": 'typescript'
    },
    rules: {
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
                'newlines-between': 'never',
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'parent',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
        'unused-imports/no-unused-imports': 'error',
        'import/no-unresolved': 2,
        'import/no-named-as-default': 0
    },
    overrides: [
        {
            files: ['*.jsx', '*.tsx'],
            extends: [
                'plugin:react/recommended',
                'plugin:react/jsx-runtime',
                'plugin:jsx-a11y/recommended',
            ]
        },
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
            rules: {
                "react/no-unknown-property": ['error', { ignore: ['class', 'class:list'] }]
            }
        }
    ]
};