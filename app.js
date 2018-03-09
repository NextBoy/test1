if('serviceWorker' in navigator) {
    console.log('this is app.js')
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {})
    .catch(err => {
            console.log(err)
    })
    })
}