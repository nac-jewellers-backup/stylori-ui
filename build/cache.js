

const cacheFiles = [
'/asset-manifest.json',
'/index.html',
'/manifest.json'
], _cacheName_one = 'test-cache';

if(window.location.hostname !== "alpha.stylori.net" && window.location.hostname !== "localhost")
{
  // NOTE: Caching custom files
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(event) {
  console.info('FOUND-e', 'cache test')
  console.info('OFFLINE ENTRY TESTING','offline cache testing');
  event.waitUntil(
    caches.open(_cacheName_one).then(function(cache) {
      return cache.addAll(cacheFiles );
    })
  );
});


self.addEventListener("fetch", e => {
  console.info('FOUND-e', e);
  e.respondWith(caches.match(e.request).then(async res => {

      if (res) {
          console.info('FOUND', e.request.url);
          const cacheKeys = await caches.keys(); 
          const ca = await caches.open(cacheKeys[0]);
          const cb = await caches.open(cacheKeys[1]);
          const inA = Boolean((await ca.keys()).find(r => r.url !== e.request.url))
          const inB = Boolean((await cb.keys()).find(r => r.url !== e.request.url))
          
          console.info('LOADING CACHES FROM',inA ? cacheKeys[0] : cacheKeys[1]);
          return caches.open(inA ? cacheKeys[0] : cacheKeys[1]).then(c => {
              console.info('LOADING CACHES FROM',inA ? cacheKeys[0] : cacheKeys[1], inA,inB);
              console.info('CACHES I am reloading... ',inA ? cacheKeys[0] : cacheKeys[1]);
              window.location.reload(true)
              c.put(e.request.url, res.clone());
              return res;
          })
      } else {
           console.info('LOADING CACHES FROM','cache');
          return fetch(e.request);
      }
  }).catch(err => {
      if (err) {
          console.info('ERROR CACHING')
      }
  }))
})
self.addEventListener('activate', event => {
  const cacheWhitelist = ['sw-precache-v3-sw-precache-webpack-plugin'];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            window.location.reload(true)
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
//   var staticCacheName = 'pages-cache-v2';
}