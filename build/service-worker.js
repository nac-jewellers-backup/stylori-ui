"use strict";var precacheConfig=[["/index.html","6bfb97cb4dcb1ab3daf1dd3df652a8a4"],["/precache-manifest.09c3b9efee355f2e18404d7c01aa4e20.js","09c3b9efee355f2e18404d7c01aa4e20"],["/service-worker.js","94fe9e11b1c007dc736e84897d0bc4c7"],["/static/css/2.css","0635f854ae767a2c42b31978996e8513"],["/static/css/4.css","5b55f18fd65055e1e96a88d40362aea1"],["/static/css/main.css","e1cff6eda563f1ea6be003e2a72688d3"],["/static/js/2.js","7b77600618aa04501435ffc5af409786"],["/static/js/3.js","bbde8415364ee5524447a211012e5dae"],["/static/js/4.js","80916eeabedd9ce9c86e218dd7a4e244"],["/static/js/main.js","11b69bc76f3e712eb8ace1004131e0dc"],["/static/js/runtime~main.js","ccef21838a50bc88f335d6a6e4dc2ca7"],["/static/media/Stylori-NAC-View.jpg","895b12f026ed1d4fb5c78f2c15a4a862"],["/static/media/Stylorilogo.svg","271780ce712885f13b93200ae25f1288"],["/static/media/cartGrey.svg","6b86cbd34f394490947d73306194fe13"],["/static/media/close.svg","2b3d63f761a61e5c65a4773359c4eb40"],["/static/media/facebook.svg","6b446a380e308ad3d84cf955d088f3be"],["/static/media/gmail.svg","992ac34a80cdd509871cff78c6d98e72"],["/static/media/houseOfNAC@2x.png","4bc28593bdd089d88f889e527336e18f"],["/static/media/houseOfNAC@3x.png","1c1ce3c23e9b17a02a27aa22cf7d94d2"],["/static/media/img1ProductModal.jpg","28cd30ea4ad92b4520d9a3fb2634a87d"],["/static/media/img2ProductModal.jpg","b944ac0307e92dae56a16dc18b6318a1"],["/static/media/img3ProductModal.jpg","2e0c3b28d442f07cf1fb810420137dc5"],["/static/media/img4ProductModal.jpg","337eef9d867ffd752a548702f05cb8e6"],["/static/media/logout.svg","6e25bad6f003be8fe1ddf1c68d2b4dd9"],["/static/media/loveGrey.svg","1157596233d3beac7f872fe4d1d5fe7c"],["/static/media/percentage.svg","66395175df56f8182530893dd3a10cd2"],["/static/media/searchGrey.svg","ff833fca6e3534382b2ef37e592c3efe"],["/static/media/shopping.svg","57b56bb10faf3b9dbb17bc91e6be7baf"],["/static/media/silverOpenLink.png","9f68d134cc7db1c64076983fcd3e8826"],["/static/media/slick.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/slick.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/stylori_silver_logo.svg","556ec2b95dbf875acfb9740523d0e472"],["/static/media/telephone.svg","26f4adaec0fa060fe6ef92c4c4f7c485"],["/static/media/topPicksOne.jpg","1737e5e0a88de55dc6cf1a773e4b0816"],["/static/media/topPicksThree.jpg","35f5ee82b7e9b5e66f70a99aefcb3865"],["/static/media/topPicksTwo.jpg","37b89e280ecc047a56d66fdb6404bb23"],["/static/media/user-shape.svg","bcc776345852aa9836e64bcc3e000864"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),s=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),importScripts("/cache.js");