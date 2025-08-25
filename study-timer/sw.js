const CACHE_NAME = 'study-timer-v3-2025-08-25';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>{ if(k!==CACHE_NAME) return caches.delete(k);} ))));
});
self.addEventListener('fetch', (e)=>{
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then(res=> res || fetch(e.request).then(resp=>{
        // Optionally: put runtime GET requests into cache
        return resp;
      }))
    );
  }
});
