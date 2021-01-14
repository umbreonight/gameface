var cacheName = 'PockitTV';
var filesToCache = [
  '/'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
  if (e.request.headers.get('Accept').indexOf('text/html') !== -1) {
    var extension = e.request.url.split('.').pop(); 
    if(extension == "mp4") return

    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});