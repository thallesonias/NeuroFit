const cacheName = 'neurofit-v1'; // Mude esse v1 para v2 quando atualizar o código
const filesToCache = ['NeuroFit.html', 'manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});