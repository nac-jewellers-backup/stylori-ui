// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const cacheCheck = async () => {

  // read text from URL location
  var request = new XMLHttpRequest();


  // alert('i came in', myJson)

  var local_storage = localStorage.getItem('version')
  if (local_storage && local_storage.length > 0) {
    const condition_async = async () => {
      request.open('GET', '/meta.json', true);
      request.send(null);
      request.onreadystatechange = async function () {
        // if (request.readyState === 1 || (request.status === 200 ||request.status === 304)) {

        var type = await request.getResponseHeader('Content-Type');

        if (type.indexOf("json") !== 1) {
          var obj = await request.responseText && request.responseText !== '' && typeof request.responseText !== String ? JSON.parse(request.responseText) : ''
          if (obj && Number(local_storage) !== Number(obj.version)) {
            
            localStorage.setItem('version', obj.version)

            window.location.reload(true)
          }

        }
        // }
      }
    }
    condition_async()
  }
  else {
    const condition_async = async () => {
      request.open('GET', '/meta.json', true);
      request.send(null);
      request.onreadystatechange = async function () {
        // if (request.readyState === 1 || (request.status === 200 ||request.status === 304)) {

        var type = await request.getResponseHeader('Content-Type');
       

        if (type.indexOf("json") !== 1) {
          var obj = await request.responseText && request.responseText !== '' && typeof request.responseText !== String ? JSON.parse(request.responseText) : ''
      
          if (obj !== '') localStorage.setItem('version', obj.version)


        }
        // }
      }
    }
    condition_async()
  }
}
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

// setTimeout(function(){ cacheCheck(); }, 20000);

export async function register(config) {
  // cacheCheck();
  await requestNotificationPermission();

  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // cacheCheck();
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }
    setInterval(function () { cacheCheck(); }, 5000);
    window.addEventListener('load', () => {
      cacheCheck();
      
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      

      if (isLocalhost) {
        // cacheCheck()
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
        // cacheCheck()
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
        sendNotification('App is being cached locally for offline purpose!')
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = async () => {
     
          if (installingWorker.state === 'installed') {
            let updating = false,
              updateMessage = 'New version of app is installed',
              installedMessage = 'Your app is installed and works offline'
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
                updating = true
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                
                //Display Notification
                await sendNotification(updating ? updateMessage : installedMessage);
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

async function requestNotificationPermission() {
  // cacheCheck();
  if (!check()) return false;
  const permission = await window.Notification.requestPermission();
  if (permission !== 'granted') { } //alert('Enable notifications to have great experience!');
  else {
    if (!localStorage.getItem('firstnotify')) {
      await sendNotification('Ohoo.. your first notification 🎉🙌');
      localStorage.setItem('firstnotify', true);
    }
    return true;
  };
}

function check() {

  if (!('serviceWorker' in navigator)) {
    console.log('Sorry notifications are not yet supported');//alert
    return false;
  }
  if (!('PushManager' in window)) {
    console.log('Sorry notifications are not yet supported');//alert
    return false;
  }

  return true;
}

async function sendNotification(message) {
  // check() ? await new Notification(message) : await requestNotificationPermission();
  return false;
}

function checkValidServiceWorker(swUrl, config) {
  
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // cacheCheck();
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
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
  // cacheCheck();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

window.addEventListener('online', e => {
   
  sendNotification('Network connection restored !')
})

window.addEventListener('offline', e => {
  sendNotification('Lost internet connection ! ')
})