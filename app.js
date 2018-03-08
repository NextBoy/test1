if('serviceWorker' in navigator) {
    console.log('this is app.js')
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/vue-service-worker-test/sw.js', {scope: '/vue-service-worker-test/'})
            .then(registration => {})
    .catch(err => {
            console.log(err)
    })
    })
}