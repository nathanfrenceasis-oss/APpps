const CACHE_NAME = "lumi-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./js/home.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];


self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Caching app shell");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});


self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim();
});


self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {

        const resClone = res.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
