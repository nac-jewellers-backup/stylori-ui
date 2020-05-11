// const cacheCheck = async () => {

    
//     // read text from URL location
//     var request = new XMLHttpRequest();
  
  
//     // alert('i came in', myJson)
  
//     var local_storage = localStorage.getItem('version')
//     if (local_storage && local_storage.length > 0) {
//       const condition_async = async () => {
//         request.open('GET', '/meta.json?_='+ new Date().getTime(), true);
  
//         request.send(null);
//         request.onreadystatechange = async function () {
//           if (this.readyState == 4 && this.status == 200) {
  
//           var type = await request.getResponseHeader('Content-Type');
  
//           if (type.indexOf("json") !== 1) {
//             var obj = await request.responseText && request.responseText !== '' && typeof request.responseText !== String ? JSON.parse(request.responseText) : ''
//             if (obj && Number(local_storage) !== Number(obj.version)) {
              
//               localStorage.setItem('version', obj.version)
            
              
//             //   if (caches) {
//             //     // Service worker cache should be cleared with caches.delete()
//             //     const caches_list = await caches.keys() 
//             //   const _caches  = caches_list ? caches_list : []
                
//             //     console.log('names---------------------------------------', caches_list)
//             //     for (let name of _caches)  caches.delete(name);
//             // }
//            // delete browser cache and hard reload
//           window.location.reload(true);
//             }
  
//           }
//           }
//         }
//       }
//       condition_async()
//     }
//     else {
//       const condition_async = async () => {
//         request.open('GET', '/meta.json', true);
//         request.send(null);
//         request.onreadystatechange = async function () {
//           if (this.readyState == 4 && this.status == 200) {
  
//           var type = await request.getResponseHeader('Content-Type');
         
  
//           if (type.indexOf("json") !== 1) {
//             var obj = await request.responseText && request.responseText !== '' && typeof request.responseText !== String ? JSON.parse(request.responseText) : ''
        
//             if (obj !== '') localStorage.setItem('version', obj.version)
//             if (caches) {
//               // Service worker cache should be cleared with caches.delete()
//               const caches_list = await caches.keys() 
//               const _caches  = caches_list ? caches_list : [] 
              
                
//                 console.log('names---------------------------------------', _caches)
//                 for (let name of _caches)  caches.delete(name);
              
//             }
//          // delete browser cache and hard reload
//         window.location.reload(true);
  
//           }
//           }
//         }
//       }
//       condition_async()
//     }
//   }



async function updateCache() {
    self.addEventListener("fetch", e => {
        // console.info('FOUND-e', e);
        e.respondWith(caches.match(e.request).then(async res => {
          const cacheKeys = await caches.keys(); 
          const ca = await caches.open(cacheKeys[0]);
          const cb = await caches.open(cacheKeys[1]);
          const inA = Boolean((await ca.keys()).find(r => r.url !== e.request.url))
          const inB = Boolean((await cb.keys()).find(r => r.url !== e.request.url))
            if (res) {
                console.info('FOUND', e.request.url);
               
                
                // console.info('LOADING CACHES FROM',inA ? cacheKeys[0] : cacheKeys[1]);
                return caches.open(inA ? cacheKeys[0] : cacheKeys[1]).then(c => {
                    // console.info('LOADING CACHES FROM',inA ? cacheKeys[0] : cacheKeys[1], inA,inB);
                    // console.info('CACHES I am reloading... ',inA ? cacheKeys[0] : cacheKeys[1]);
                    c.put(e.request.url, res.clone());
                    return res;
                })
            } else {
                //  console.info('LOADING CACHES FROM','cache');
                 fetch(e.request).then((data)=>{
                  return data
                }).catch((err)=>{
                  console.log(err,"url")
                  if(err){
                    caches.open(inA ? cacheKeys[0] : cacheKeys[1]).then(function(cache) {
                      cache.matchAll(e.request.url).then(function(response) {
                        console.log(e.request.url,"url")
                        response.forEach(function(element, index, array) {
                          console.log(e.request.url,"element")
                          cache.delete(element);
                        });
                      });
                    })
                  }
                })
            }
        }).catch(err => {
            if (err) {
                console.info('ERROR CACHING')
            }
        }))
      })
  }
  
  self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'update-cache') {
      event.waitUntil(async()=>updateCache());
    }
  });

    // POPULATION SYNC
// self.addEventListener('periodicsync', (e) => {
//     if (e.tag === 'population-sync') {
//         e.waitUntil(async () => {
//             // await syncHeads();
//             // await syncUsers();
//         })
//     }
// })