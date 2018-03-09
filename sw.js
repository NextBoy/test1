// 保存service worker
let sw = this

sw.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1')
            .then(cache => {
                return cache.addAll([
                    './index.html',
                    './static/js/manifest.4b311f6f04d156464c82.js',
                    './static/js/vendor.26dc01fa29168a43c768.js',
                    './static/js/app.f8a29dd30a33f24bce71.js',
                    './static/css/app.c2fd0948b12fbbccda9b977d8043c6ef.css'
                ])
            })
    )
})


sw.addEventListener('fetch', (event) => {
    console.log(event)
    event.respondWith(
        caches.match(event.request)
            .catch(() => fetch(event.request))
    )
})


/*
sw.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).catch(function () {
            return fetch(event.request).then(function (response) {
                return caches.open('v1').then(function (cache) {
                    cache.put(event.request, response.clone());
                    return response;
                })
            })
        }).catch(function () {
            return caches.match('/sw-test/gallery/myLittleVader.jpg');
        })
    )
})*/
