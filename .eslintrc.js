module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'indent': "off",
        'comma-dangle': 'off',
        'vue/html-indent': 'off',
        'vue/html-self-closing': 'off',
        'vue/custom-event-name-casing': 'off',
    }
}
