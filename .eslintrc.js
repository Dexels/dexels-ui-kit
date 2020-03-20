module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        browser: true,
    },
    plugins: [
        'babel',
        'react',
        '@typescript-eslint',
        'typescript-sort-keys',
    ],
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
    ],
    rules: {
        '@typescript-eslint/indent': [2, 4, {
            SwitchCase: 1,
        }],
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-unused-vars': 2,
        'brace-style': [2, '1tbs'],
        curly: [2, 'all'],
        'import/extensions': [2, 'ignorePackages', {
            'js': 'never',
            'jsx': 'never',
            'ts': 'never',
            'tsx': 'never',
        }],
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/order': 0,
        'import/prefer-default-export': 0,
        indent: 0,
        'max-len': [2, {
            code: 120,
            ignoreTemplateLiterals: true,
            tabWidth: 4,
        }],
        'no-multiple-empty-lines': [2, {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
        }],
        'object-property-newline': [2, {
            allowAllPropertiesOnSameLine: false,
        }],
        'padding-line-between-statements': [2,
            {
                blankLine: 'always',
                prev: [
                    'case',
                    'multiline-block-like',
                    'multiline-const',
                    'multiline-expression',
                    'multiline-let',
                    'multiline-var',
                ],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: [
                    'multiline-block-like',
                    'multiline-const',
                    'multiline-expression',
                    'multiline-let',
                    'multiline-var',
                    'return',
                ],
            },
        ],
        'react/jsx-curly-brace-presence': 0,
        'react/jsx-filename-extension': [2, {
            extensions: ['.tsx'],
        }],
        'react/jsx-indent': [2, 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-key': [2, {
            checkFragmentShorthand: true,
        }],
        'react/jsx-no-literals': [2, {
            noStrings: false,
        }],
        'react/jsx-max-props-per-line': [2, {
            maximum: 3,
        }],
        'react/jsx-no-useless-fragment': 2,
        'react/jsx-one-expression-per-line': [2, {
            allow: 'none',
        }],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-sort-default-props': [2, {
            ignoreCase: false,
        }],
        'react/jsx-sort-props': [2, {
            callbacksLast: false,
            ignoreCase: false,
            noSortAlphabetically: false,
            reservedFirst: false,
            shorthandFirst: false,
            shorthandLast: false,
        }],
        'react/prop-types': 0,
        'sort-imports': [2, {
            ignoreCase: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],
        'sort-keys': [2, 'asc', {
            caseSensitive: true,
            natural: false,
        }],
        'typescript-sort-keys/interface': 2,
        'typescript-sort-keys/string-enum': 2,
    }
}
