

// const cacheFiles = [
//     '/static/css/2.css'
// ], _cacheName_one = 'test-cache';

// NOTE: Caching custom files
// eslint-disable-next-line no-restricted-globals
window.addEventListener('install', function(event) {
    console.info('OFFLINE ENTRY TESTING','offline cache testing');
    event.waitUntil(
      caches.open('cacheName').then(function(cache) {
        return cache.addAll(
          
            '/static/css/2.css',
          
        );
      })
    );
  });