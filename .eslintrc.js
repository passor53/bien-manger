module.exports = {
    root: true,
    env: {
        "node": true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
    ],
    plugins: [],
    // add your custom rules here
    "parserOptions": {
        "ecmaVersion": 2021
    },
    rules: {
        'vue/multi-word-component-names': 0,
    },
}