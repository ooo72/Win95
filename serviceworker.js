const CACHE_NAME = "pwa-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/win95.html",
  "/manifest.json",
  "/assets/win95.png",
  "/assets/icon.png",
  "/assets/styles.css",
  "/assets/WIN.ZIP"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files...");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Clearing old cache...");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});