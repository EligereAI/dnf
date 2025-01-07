/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';

// Ensure __WB_MANIFEST is available before calling precacheAndRoute
if (self.__WB_MANIFEST) {
    precacheAndRoute(self.__WB_MANIFEST);
}


// Enable immediate claim of clients so the service worker can take control of pages as soon as it is activated
clientsClaim();

// Cache assets with CacheFirst strategy for images, JavaScript, CSS, and other files
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});

// Clear old caches after the service worker is activated
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [self.__WB_MANIFEST]; // This will keep the cache fresh with new assets

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
