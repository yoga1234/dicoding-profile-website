const CACHE_NAME = "yogasmarawebsitev02";
var urlsToCache = [
  "/",
  "index.html",
  "main.js",
  "icon-512x512.png",
  "/js/materialize.min.js",
  "/images/backend.jpg",
  "/images/frontend.jpg",
  "/images/testi-1-min.jpg",
  "/images/testi-2-min.jpg",
  "/images/testi-3-min.jpg",
  "/images/testi-4-min.jpg",
  "/images/top-icon.png",
  "/css/main.css",
  "/css/materialize.min.css",
  "/components/footer.js",
  "/components/navbar.js",
  "/components/pageLoader.js",
  "/components/about/about.js",
  "/components/home/home.js",
  "/components/skill/skill.js",
  "/components/testimonials/testimonials.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
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