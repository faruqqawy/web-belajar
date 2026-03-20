const CACHE_NAME = "sturead-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js"
];

// Install → simpan file ke cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch → ambil dari cache kalau offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});