module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true
    },
    settings: {
        jsx: true
    },
    plugins: [
        'babel',
        'react',
    ],
    extends: 'airbnb',
    rules: {
        'babel/semi': 1,
        'brace-style': ['error', '1tbs'],
        curly: ['error', 'all'],
        'import/no-extraneous-dependencies': 0,
        'import/order': 0,
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        'jsx-a11y/media-has-caption': 0,
        'max-len': ['error', {
            code: 120,
            ignoreTemplateLiterals: true,
            tabWidth: 4,
        }],
        'no-alert': 0,
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxBOF: 0,
            maxEOF: 1,
        }],
        'object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: false,
        }],
        'padding-line-between-statements': ['error',
        {
            blankLine: 'always',
            prev: [
                'case',
                'export',
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
                'export',
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
        'react/jsx-curly-spacing': ['error', {
            when: 'never',
            children: true,
            allowMultiline: false,
        }],
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': ['error', 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-key': ['error', {
            checkFragmentShorthand: true,
        }],
        'react/jsx-max-props-per-line': ['error', {
            maximum: 3,
        }],
        'react/jsx-no-literals': ['error', {
            noStrings: false,
        }],
        'react/jsx-one-expression-per-line': ['error', {
            allow: 'literal',
        }],
        'react/jsx-sort-default-props': ['error', {
            ignoreCase: false,
        }],
        'react/jsx-sort-props': ['error', {
            callbacksLast: false,
            ignoreCase: false,
            noSortAlphabetically: false,
            reservedFirst: false,
            shorthandFirst: false,
            shorthandLast: false,
        }],
        'react/sort-prop-types': ['error', {
            callbacksLast: false,
            ignoreCase: false,
            requiredFirst: false,
            sortShapeProp: false,
        }],
        'sort-imports': ['error', {
            ignoreCase: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],
        'sort-keys': ['warn', 'asc', {
            caseSensitive: true,
            natural: false,
        }],
    },
};
