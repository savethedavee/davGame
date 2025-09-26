import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['icons/*.png'],
            manifest: {
                name: 'davGame',
                short_name: 'davGame',
                start_url: '/',
                display: 'standalone',
                background_color: '#0f172a',
                theme_color: '#0ea5e9',
                icons: [
                    { src: 'icons/192.png', sizes: '192x192', type: 'image/png' },
                    { src: 'icons/512.png', sizes: '512x512', type: 'image/png' },
                    { src: 'icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
                ]
            }
        })
    ]
})
