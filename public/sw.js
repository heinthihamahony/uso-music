// Service Worker for Muso Music - Offline Audio Caching
const CACHE_NAME = 'muso-music-v1';
const AUDIO_CACHE_NAME = 'muso-music-audio-v1';

// Audio files to cache for offline playback
const AUDIO_FILES_TO_CACHE = [
  '/audio/pracha-song.mp3',
  '/audio/Somewhere We Could Stay (Duo).mp3',
  '/audio/One Day.mp3',
  '/audio/Lost in the Cracks.mp3',
  '/audio/Ignite-the-Sky.mp3',
  '/audio/Golden-Light.mp3',
  '/audio/Its-not-living.mp3',
  '/audio/Pracha Songkhro Rd. 59 (Cover).mp3',
  '/audio/Raw (Cover) (1) (Add Vocal) (1).mp3',
  '/audio/Rock + Electro pop.mp3',
  '/audio/You Shine Anyway .mp3'
];

// Install event - cache audio files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(AUDIO_CACHE_NAME).then((cache) => {
      console.log('Caching audio files...');
      return cache.addAll(AUDIO_FILES_TO_CACHE);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== AUDIO_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve cached audio files
self.addEventListener('fetch', (event) => {
  // Only handle audio files
  if (event.request.url.includes('/audio/')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log('Serving cached audio:', event.request.url);
          return response;
        }
        
        // If not in cache, fetch and cache it
        return fetch(event.request).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(AUDIO_CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
  }
});
