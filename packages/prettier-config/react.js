module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: ['plugin:react/recommended', 'prettier/react'],
    plugins: ['react', 'react-hooks'],
    rules: {
        // NOTE: we can rely heavily on TS to provide prop safety checks
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};