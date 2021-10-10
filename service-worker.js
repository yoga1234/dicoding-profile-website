const CACHE_NAME = "yogasmarawebsitev01";
var urlsToCache = [
  "./",
  "./index.html",
  "./main.js",
  "./manifest.json",
  "./registering-service-worker.js",
  "./js/materialize.min.js",
  "./images/backend.jpg",
  "./images/frontend.jpg",
  "./images/testi-1-min.jpg",
  "./images/testi-2-min.jpg",
  "./images/testi-3-min.jpg",
  "./images/testi-4-min.jpg",
  "./images/top-icon.png",
  "./images/manifest-icon/72x72.png",
  "./images/manifest-icon/96x96.png",
  "./images/manifest-icon/128x128.png",
  "./images/manifest-icon/144x144.png",
  "./images/manifest-icon/152x152.png",
  "./images/manifest-icon/167x167.png",
  "./images/manifest-icon/180x180.png",
  "./images/manifest-icon/192x192.png",
  "./images/manifest-icon/384x384.png",
  "./images/manifest-icon/512x512.png",
  "./css/main.css",
  "./css/materialize.min.css",
  "./components/footer.js",
  "./components/navbar.js",
  "./components/pageLoader.js",
  "./components/about/about.js",
  "./components/home/home.js",
  "./components/skill/skill.js",
  "./components/testimonials/testimonials.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    }).catch(function(err) {
      console.log(err);
    })
  );
});

self.addEventListener("fetch", function(event) {
  console.log('entering fetch mode');
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function(response) {
        if(response) {
          console.log("serviceWorker: aset yang digunakan: ", response.url);
          return response;
        }

        console.log(
          "serviceWorker: memuat aset dari server",
          event.request.url
        );
        return fetch(event.request);
      }).catch(function(err) {
        console.log(err);
      })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if(cacheName != CACHE_NAME){
            console.log("serviceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});