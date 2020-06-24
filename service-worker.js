const CACHE_NAME = "yogasmarawebsitev01";
var urlsToCache = [
  "/",
  "index.html",
  "main.js",
  "/js/materialize.min.js",
  "/images/backend.jpg",
  "/images/frontend.jpg",
  "/images/testi-1-min.jpg",
  "/images/testi-2-min.jpg",
  "/images/testi-3-min.jpg",
  "/images/testi-4-min.jpg",
  "/css/main.css",
  "/css/materialize.min.css",
  "/components/footer.js",
  "/components/navbar.js",
  "/components/pageLoader.js",
  "/components/about/about.js",
  "/components/home/home/js",
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