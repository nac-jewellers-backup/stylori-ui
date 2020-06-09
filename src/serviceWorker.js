// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA


// CACHE VERSION HANDLING

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
const cacheCheck = async () => {

  // read text from URL location
  var request = new XMLHttpRequest();
  
  
  // alert('i came in', myJson)
  
  var local_storage = localStorage.getItem('version')
  if (local_storage && local_storage.length > 0) {
    const condition_async = async () => {
      request.open('GET', '/meta.json?_=' + new Date().getTime(), true);
      request.send(null);
      request.onreadystatechange = async function () {
        if (this.readyState == 4 && this.status == 200) {
  
        var type = await request.getResponseHeader('Content-Type');
  
        if (type.indexOf("json") !== 1) {
          var obj = null;
          try{
            obj = await request.responseText && request.responseText !== '' && typeof request.responseText !== String ? JSON.parse(request.responseText) : ''
          }catch(e){
            console.log(e)
          }
          if (obj && Number(local_storage) !== Number(obj.version)) {
            
            localStorage.setItem('version', obj.version)
  
  // -> UPDATED on 07-05-2019 by JAYASOORYA  
  
            // if (caches) {
            //     // Service worker cache should be cleared with caches.delete()
            //     const caches_list = await caches.keys() 
            //     console.log(caches_list, "-> caches_list <-")
            //   const _caches  = caches_list ? caches_list : []
                
            //     for (let name of _caches){
            //       console.log(name, "-> _caches  for  loop <-")
            //       caches.delete(name)
            //       };
            // }
            

            if(process.env.NODE_ENV === 'production' || 'serviceWorker' in navigator){
              if (caches) {
                // Service worker cache should be cleared with caches.delete()
                caches.keys().then(async function(names) {
                  console.log(names, "-> caches_list <-")
                  for (let name of names) await caches.delete(name);
                }).catch((error)=>{ console.log("Error while deleting caches : ", error)})
              }
            }
            
  // <- 
            window.location.reload(true)
            // this.location.reload(true);
          }
  
        }
        }
      }
    }
    condition_async()
  }
  else {
    const condition_async = async () => {
      request.open('GET', '/meta.json', true);
      request.send(null);
      request.onreadystatechange = async function () {
        if (this.readyState == 4 && this.status == 200) {
  
        var type = await request.getResponseHeader('Content-Type');
       
  
        if (type.indexOf("json") !== 1) {
          var obj = await request.responseText && request.responseText !== '' && typeof request.responseText !== String ? JSON.parse(request.responseText) : ''
      
          if (obj !== '') localStorage.setItem('version', obj.version)
  
  
        }
        }
      }
    }
    condition_async()
  }
  }


// 
console.log(process.env.NODE_ENV,"ENV=+d")




export function register(config) {

  // Added here
  setInterval(function () { cacheCheck(); }, 5000);

  if (process.env.NODE_ENV === 'production' || 'serviceWorker' in navigator) {


    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }
    
    window.addEventListener('load', () => {
      
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      // commented this line
      // setInterval(function () { cacheCheck(); }, 5000);

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' }
  })
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            // window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
