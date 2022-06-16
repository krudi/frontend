module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: ['eslint:recommended'],
    plugins: [],
    parserOptions: {
        parser: '@babel/eslint-parser',
        allowImportExportEverywhere: true,
        sourceType: 'module',
        ecmaVersion: 2020
    },
    globals: {
        TimelineLite: false,
        TimelineMax: false,
        TweenLite: false,
        TweenMax: false,
        Back: false,
        Bounce: false,
        Circ: false,
        Cubic: false,
        Ease: false,
        EaseLookup: false,
        Elastic: false,
        Expo: false,
        Linear: false,
        Power0: false,
        Power1: false,
        Power2: false,
        Power3: false,
        Power4: false,
        Quad: false,
        Quart: false,
        Quint: false,
        RoughEase: false,
        Sine: false,
        SlowMo: false,
        SteppedEase: false,
        Strong: false,
        Draggable: false,
        SplitText: false,
        VelocityTracker: false,
        CSSPlugin: false,
        ThrowPropsPlugin: false,
        BezierPlugin: false
    },
    overrides: [
        {
            files: ['*.php'],
            rules: {
                indent: 'off'
            }
        }
    ],
    settings: {},
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        quotes: [2, 'single'],
        camelcase: [
            2,
            {
                ignoreDestructuring: true,
                properties: 'never'
            }
        ],
        'consistent-return': 'off',
        'comma-dangle': ['error', 'never'],
        eqeqeq: 'off',
        'import/no-cycle': 'off',
        'import/no-dynamic-require': 'off',
        indent: ['error', 4],
        'no-tabs': 'off',
        'no-else-return': 'off',
        'no-nested-ternary': 'off',
        'no-param-reassign': [
            2,
            {
                props: false
            }
        ],
        'no-return-assign': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': [
            2,
            {
                allowTernary: true
            }
        ],
        'no-unused-vars': [
            2,
            {
                args: 'after-used',
                argsIgnorePattern: 'commit',
                ignoreRestSiblings: true
            }
        ],
        'no-use-before-define': 'off',
        'no-trailing-spaces': 'off',
        'object-curly-newline': 'off',
        semi: [2, 'never'],
        'semi-style': 'off',
        'space-before-function-paren': [2, 'never']
    }
}
