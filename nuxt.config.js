// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/soft-design-system.min.css',
        '~/assets/css/global.css'
    ],
    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
                }
            ]
        }
    },

    buildModules: ['@nuxtjs/sanity'],
    sanity: {
        projectId: "bqqkmxyy",
        dataset: "production"
    }

})

