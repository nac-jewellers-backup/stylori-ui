"use strict";var precacheConfig=[["/index.html","988497a976df0ec54324251d08f1cd18"],["/precache-manifest.3613f2d16ef534dd76324087c29708b9.js","3613f2d16ef534dd76324087c29708b9"],["/service-worker.js","7d07b5c553c492e82d5eed2894100f96"],["/static/css/2.css","f9fdeeaeee899dd67795678706328b7d"],["/static/css/3.css","a9f09670b46a10ee8e4c65b5205c7573"],["/static/css/main.css","f271a7ed27bcede02d48a828e9b105ba"],["/static/js/2.js","d5e43214defec7382e03ba68683a72f1"],["/static/js/3.js","42a447d5d0d329c21933928ad2903d96"],["/static/js/4.js","1378859e749032b0451d9bb88cb8be75"],["/static/js/main.js","3966f1bbc6a44fcdd4b214982d75b6fc"],["/static/js/runtime~main.js","84ca500e946be08a5f49ef60d8fd5341"],["/static/media/Diners-Club.jpg","d20d098dccc3deb830808f97fb14f3ca"],["/static/media/FlowerDimon.jpg","92e2d23a1a2929823738532362c05eea"],["/static/media/Roboto-Regular.ttf","11eabca2251325cfc5589c9c6fb57b46"],["/static/media/Stylori Silver logo.svg","1a38a224b9dfb66dda91904348a8e0a8"],["/static/media/Stylorilogo.svg","04639ae8969c77110a53303b92b57712"],["/static/media/cartoonFooter.png","c3f7641ef11bd405cfe12138f25f089f"],["/static/media/closeheart.jpg","1d4ab251e668bd11b62b30615bd88e78"],["/static/media/img1ProductModal.jpg","28cd30ea4ad92b4520d9a3fb2634a87d"],["/static/media/img2ProductModal.jpg","b944ac0307e92dae56a16dc18b6318a1"],["/static/media/img3ProductModal.jpg","2e0c3b28d442f07cf1fb810420137dc5"],["/static/media/img4ProductModal.jpg","337eef9d867ffd752a548702f05cb8e6"],["/static/media/logout.svg","51fc5370cb4d7e537c06ea117f090ba2"],["/static/media/nosepin.gif","965dabcd31d04c27b319f732b7aae019"],["/static/media/slick.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/slick.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/styloriGagets.png","681db1b372ef45af725df7762fcb49ee"],["/static/media/topPicksOne.jpg","1737e5e0a88de55dc6cf1a773e4b0816"],["/static/media/topPicksThree.jpg","35f5ee82b7e9b5e66f70a99aefcb3865"],["/static/media/topPicksTwo.jpg","37b89e280ecc047a56d66fdb6404bb23"],["/static/media/visa.jpg","0a848483a9d0cc238c3b584e1260e3ec"],["/static/media/web_banner_and_mobile-01.jpg","ae3516bc1e3f108c2fd79ffc8366bdd2"],["/static/media/web_banner_and_mobile-02_720.jpg","ff4469b37828cc3da5d334e97edf8115"],["/static/media/web_banner_and_mobile-03_720.jpg","1919467494ce81649300472f919d88b6"],["/static/media/web_banner_and_mobile-04.jpg","c2f6337500d018d0f9d0ac4c6657ea83"],["/static/media/web_banner_and_mobile-05.jpg","a99e17a60cc8b7bb5b253ee943fccb02"],["/static/media/web_banner_and_mobile-06.jpg","4c809f61c39801061aaedc06e96870b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),importScripts("/cache.js");