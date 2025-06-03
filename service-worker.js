self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("python-app-cache").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./service-worker.js",
        "https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
