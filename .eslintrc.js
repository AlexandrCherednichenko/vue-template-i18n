module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-recommended', '@vue/standard'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        'import/first': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'index',
                    'sibling',
                    'parent',
                    'internal',
                    'external',
                    'builtin',
                    'object',
                    'type',
                ],
            },
        ],
        'arrow-parens': ['error', 'as-needed'],
        'no-plusplus': 'off',
        'max-len': ['error', { code: 150 }],
        'comma-dangle': ['error', 'always-multiline'],
        semi: ['error', 'always'],
        'no-extra-semi': 'off',
        'no-bitwise': ['error', { allow: ['~'] }],
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof'],
                ],
                allowSamePrecedence: true,
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                array: true,
                object: true,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: false,
                objectsInObjects: false,
            },
        ],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: { multiline: true, consistent: true },
                ObjectPattern: { multiline: true, consistent: true },
            },
        ],
        'array-bracket-newline': ['error', 'consistent'],
        'array-element-newline': ['error', 'consistent'],
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/component-tags-order': [
            'error',
            {
                order: [
                    'template',
                    'script:not([setup])',
                    'script[setup]',
                    'style:not([scoped])',
                    'style[scoped]',
                ],
            },
        ],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: true,
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 3,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'key',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    ['components', 'directives', 'filters'],
                    'extends',
                    'mixins',
                    ['provide', 'inject'],
                    'ROUTER_GUARDS',
                    'layout',
                    'middleware',
                    'validate',
                    'scrollToTop',
                    'transition',
                    'loading',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'emits',
                    'setup',
                    'asyncData',
                    'data',
                    'fetch',
                    'head',
                    'computed',
                    'watch',
                    'watchQuery',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    ['template', 'render'],
                    'renderError',
                ],
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: false,
                skipTemplates: false,
                skipHTMLAttributeValues: false,
                skipHTMLTextContents: false,
            },
        ],
        'vue/no-dupe-keys': [
            'error',
            {
                groups: [],
            },
        ],
    },
}
