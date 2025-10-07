// Service Worker for Muso Music - Offline Audio & Image Caching
const CACHE_NAME = 'muso-music-v1';
const AUDIO_CACHE_NAME = 'muso-music-audio-v1';
const IMAGE_CACHE_NAME = 'muso-music-images-v1';

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

// ALL images to cache for instant display - ZERO delays!
const IMAGES_TO_CACHE = [
  // Logo and main images
  'https://lh3.google.com/u/0/d/1p5pYU4CkMt_icS1f11dNhoRQGK9VbUEl=w542-h406-p-k-nu-iv1', // Muso Music Logo
  
  // Artist profile pictures
  'https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1', // Yee Mon Khant
  'https://lh3.google.com/u/0/d/1J5c32EHpGaTZypllg0gkH6HlIZJUYueO=w2378-h1624-iv1?auditContext=forDisplay', // Hein Thiha
  'https://lh3.google.com/u/0/d/1reIwZsi0tIOZOmRDW7nlT5PcbJA5c1Iw=w542-h406-p-k-nu-iv1', // Lin Htet
  'https://lh3.google.com/u/0/d/1GjzdUaSOrnKkneVLoyCrqVc5g6BIuK9K=w542-h406-p-k-nu-iv2', // Kyaw Htut
  'https://lh3.google.com/u/0/d/15i2DH_ZubPoGHJIVCmxUnauI_udGilo4=w542-h406-p-k-nu-iv1', // Artist 5
  
  // Adventure and UI images
  'https://lh3.google.com/u/0/d/1IdNnlhWav4YMgMxUNqxrUrF0FyYtJMvO=w2378-h1624-iv1?auditContext=prefetch', // Default Avatar
  'https://lh3.google.com/u/0/d/1JyiGE9iw7JZ-aix9pzV6QytGL3-NhPGQ=w2378-h1624-iv1?auditContext=forDisplay', // Adventure 1
  'https://lh3.google.com/u/0/d/1aGA-wzMTGBKQegON76csQCJA-a4E0XsW=w2378-h1624-iv1?auditContext=forDisplay', // Adventure 3
];

// Install event - cache audio files and images
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    Promise.all([
      caches.open(AUDIO_CACHE_NAME).then((cache) => {
        console.log('Caching audio files...');
        return cache.addAll(AUDIO_FILES_TO_CACHE);
      }),
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        console.log('Caching images...');
        return cache.addAll(IMAGES_TO_CACHE);
      })
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== AUDIO_CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve cached audio files and images
self.addEventListener('fetch', (event) => {
  // Handle audio files
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
  
  // Handle images (Google Drive images)
  if (event.request.url.includes('lh3.google.com')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log('Serving cached image:', event.request.url);
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

          caches.open(IMAGE_CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
  }
});
