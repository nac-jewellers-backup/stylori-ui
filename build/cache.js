

const cacheFiles = [
'/appversion.js',
'/asset-manifest.json',
'/cache.js',
'/index.html',
'/manifest.json'
], _cacheName_one = 'test-cache';

// NOTE: Caching custom files
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(event) {
    console.info('OFFLINE ENTRY TESTING','offline cache testing');
    event.waitUntil(
      caches.open(_cacheName_one).then(function(cache) {
        return cache.addAll(cacheFiles );
      })
    );
  });


  self.addEventListener("fetch", e => {
    e.respondWith(caches.match(e.request).then(async res => {
        if (res) {
            console.info('FOUND', e.request.url);
            const cacheKeys = await caches.keys();
            const ca = await caches.open(cacheKeys[0]);
            const cb = await caches.open(cacheKeys[1]);
            const inA = Boolean((await ca.keys()).find(r => r.url === e.request.url))
            const inB = Boolean((await cb.keys()).find(r => r.url === e.request.url))
            
            console.info('LOADING CACHES FROM',inA ? cacheKeys[0] : cacheKeys[1]);
            return caches.open(inA ? cacheKeys[0] : cacheKeys[1]).then(c => {
                c.put(e.request.url, res.clone());
                return res;
            })
        } else {
            return fetch(e.request);
        }
    }).catch(err => {
        if (err) {
            console.info('ERROR CACHING')
        }
    }))
})