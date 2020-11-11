import colors from 'vuetify/es5/util/colors'

export default {
    server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3006,
    },
    head: {
        titleTemplate: '%s - SolvesPro',
        title: 'SolvesPro - TakeHome',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    css: [
    ],

    plugins: [
        { src: '~/plugins/vuex-persist', ssr: false }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/pwa',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/apollo',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    pwa: {
        workbox: {
            // workboxURL: 'https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js',
            workboxURL: 'https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js',
            autoRegister: true,
            // preCaching
        },
        manifest: {
            name: 'SolvesPro - Take home',
            short_name: 'SolvesPro - take home',
            theme_color: '#777',
            background_color: '#000000',
            display: 'standalone',
            lang: 'ru'
        }
    },

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://taskmgr.info/graphqlapi',
            }
        }
    },

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    }
}
