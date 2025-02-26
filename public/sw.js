"use strict";
/// <reference lib="webworker" />
Object.defineProperty(exports, "__esModule", { value: true });
var CACHE_NAME = 'your-app-cache-v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    // Add other files you want to cache
];
self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(CACHE_NAME)
        .then(function (cache) { return cache.addAll(urlsToCache); }));
});
self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request)
        .then(function (response) { return response || fetch(event.request); }));
});
self.addEventListener('activate', function (event) {
    event.waitUntil(caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames.map(function (cacheName) {
            if (cacheName !== CACHE_NAME) {
                return caches.delete(cacheName);
            }
        }));
    }));
});
