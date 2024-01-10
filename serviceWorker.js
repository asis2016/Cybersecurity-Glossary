
let STATIC_CS_G = 'cybersecurity-glossary-v1';

let ASSETS = [
    './',
    './index.html',
    './assets/js/bootstrap.bundle.min.js',
    './assets/js/color-modes.js',
    './assets/js/script.js',
    './assets/css/bootstrap.min.css',
    './assets/css/style.css'
]

/**
 * Start the service and cache ASSETS.
 */
self.addEventListener('install', installEvent => {
    installEvent.waitUntil(caches.open(STATIC_CS_G).then(cache => {
        cache.addAll(ASSETS)
    }))
});

/**
 * For offline mode
 */
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
    }))
});