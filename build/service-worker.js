"use strict";var precacheConfig=[["/index.html","747fb80d66c4acb0dba84aaf9ee7a5ba"],["/precache-manifest.adc0876bff61da757804258eb13133ca.js","adc0876bff61da757804258eb13133ca"],["/service-worker.js","ffdd841cc59858ea369ecf57018148e4"],["/static/css/2.css","c6253f91329a3fc39ae081d84ff1393c"],["/static/css/4.css","470758c4c62fb538843b90b8c46d9896"],["/static/css/main.css","e1cff6eda563f1ea6be003e2a72688d3"],["/static/js/2.js","f27987892fafef3f33955b93fb864886"],["/static/js/3.js","3867972dabf2fb9034d08b22cf119399"],["/static/js/4.js","1c6ea7177a5b0d120a3d263c09c22e48"],["/static/js/main.js","7c3723b80d45c18b69100da1f5c2414e"],["/static/js/runtime~main.js","ccef21838a50bc88f335d6a6e4dc2ca7"],["/static/media/Stylori-NAC-View.jpg","895b12f026ed1d4fb5c78f2c15a4a862"],["/static/media/Stylorilogo.svg","04639ae8969c77110a53303b92b57712"],["/static/media/cartGrey.svg","599a979d7346e2fb672204304e3efbde"],["/static/media/close.svg","7996bd6992d473ba217275885f52812f"],["/static/media/facebook.svg","6b446a380e308ad3d84cf955d088f3be"],["/static/media/gmail.svg","992ac34a80cdd509871cff78c6d98e72"],["/static/media/houseOfNAC@2x.png","4bc28593bdd089d88f889e527336e18f"],["/static/media/houseOfNAC@3x.png","1c1ce3c23e9b17a02a27aa22cf7d94d2"],["/static/media/img1ProductModal.jpg","28cd30ea4ad92b4520d9a3fb2634a87d"],["/static/media/img2ProductModal.jpg","b944ac0307e92dae56a16dc18b6318a1"],["/static/media/img3ProductModal.jpg","2e0c3b28d442f07cf1fb810420137dc5"],["/static/media/img4ProductModal.jpg","337eef9d867ffd752a548702f05cb8e6"],["/static/media/logout.svg","51fc5370cb4d7e537c06ea117f090ba2"],["/static/media/loveGrey.svg","f67911d2ff84fcce62033f3f3f52d654"],["/static/media/percentage.svg","16dba06dc926d09764463dadfbb4c54e"],["/static/media/searchGrey.svg","51ade057f1c084a5ac5034d3ed31722b"],["/static/media/shopping.svg","b0c24c44cdbcd2228f0f6fef2740195f"],["/static/media/silverOpenLink.png","9f68d134cc7db1c64076983fcd3e8826"],["/static/media/slick.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/slick.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/stylori_silver_logo.svg","18d70bcc35a56cea676c4ced2fbb3d09"],["/static/media/telephone.svg","5a712650392a83e01a75498ebc83837b"],["/static/media/topPicksOne.jpg","1737e5e0a88de55dc6cf1a773e4b0816"],["/static/media/topPicksThree.jpg","35f5ee82b7e9b5e66f70a99aefcb3865"],["/static/media/topPicksTwo.jpg","37b89e280ecc047a56d66fdb6404bb23"],["/static/media/user-shape.svg","c7359aa61314bf6d37f83ccc97dd0694"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}}),importScripts("/cache.js");