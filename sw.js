// sw.js
const CACHE_NAME = 'treemo-cache-v1';

const CACHE_ASSETS = [
  './',
  './app.html',
  './icon.svg',
  './sw.js'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});