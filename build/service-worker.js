"use strict";var precacheConfig=[["/index.html","6e4021f911306e3bc6a4dd908b1a7615"],["/precache-manifest.e8897779abe08688a5393158a9c02894.js","e8897779abe08688a5393158a9c02894"],["/service-worker.js","0b86a3b0a3d08fb10b4f57497c8e3042"],["/static/css/2.css","357b1ebc95f8b5fb285d166b37b7ddb7"],["/static/css/3.css","c60773fb8bf563b255ead43e27a11a21"],["/static/css/main.css","9428be4271fad2a95b3e27db69644133"],["/static/js/2.js","ccd85c11288e7ab8408d7ef0a1587ef0"],["/static/js/3.js","7fd3dcff85413034f110101791dca49f"],["/static/js/4.js","49574e4cf58251d4669b75121ae2aa5e"],["/static/js/main.js","bd0fadc8b2f8f6522203a98239c80d41"],["/static/js/runtime~main.js","84ca500e946be08a5f49ef60d8fd5341"],["/static/media/Diners-Club.jpg","d20d098dccc3deb830808f97fb14f3ca"],["/static/media/FlowerDimon.jpg","92e2d23a1a2929823738532362c05eea"],["/static/media/Stylori Silver logo.svg","dbcf216caae2a45cbfb8dd2844c8a691"],["/static/media/StyloriSilver-truckIcon.svg","34074cbb94b9fe2663250bfed2f2213f"],["/static/media/Stylorilogo.svg","271780ce712885f13b93200ae25f1288"],["/static/media/cartoonFooter.png","c3f7641ef11bd405cfe12138f25f089f"],["/static/media/close.svg","2b3d63f761a61e5c65a4773359c4eb40"],["/static/media/closeheart.jpg","1d4ab251e668bd11b62b30615bd88e78"],["/static/media/delivery.svg","731e5ecd2c7827cef3f847ec91080214"],["/static/media/img1ProductModal.jpg","28cd30ea4ad92b4520d9a3fb2634a87d"],["/static/media/img2ProductModal.jpg","b944ac0307e92dae56a16dc18b6318a1"],["/static/media/img3ProductModal.jpg","2e0c3b28d442f07cf1fb810420137dc5"],["/static/media/img4ProductModal.jpg","337eef9d867ffd752a548702f05cb8e6"],["/static/media/logout.svg","6e25bad6f003be8fe1ddf1c68d2b4dd9"],["/static/media/love.svg","162c55add6a47b0d4045ee2e69d2e824"],["/static/media/nosepin.gif","965dabcd31d04c27b319f732b7aae019"],["/static/media/shopping.svg","57b56bb10faf3b9dbb17bc91e6be7baf"],["/static/media/silverOpenLink.png","9f68d134cc7db1c64076983fcd3e8826"],["/static/media/slick.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/slick.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/styloriGagets.png","681db1b372ef45af725df7762fcb49ee"],["/static/media/stylori_silver_logo.svg","556ec2b95dbf875acfb9740523d0e472"],["/static/media/telephone.svg","26f4adaec0fa060fe6ef92c4c4f7c485"],["/static/media/topPicksOne.jpg","1737e5e0a88de55dc6cf1a773e4b0816"],["/static/media/topPicksThree.jpg","35f5ee82b7e9b5e66f70a99aefcb3865"],["/static/media/topPicksTwo.jpg","37b89e280ecc047a56d66fdb6404bb23"],["/static/media/user-shape.svg","bcc776345852aa9836e64bcc3e000864"],["/static/media/visa.jpg","0a848483a9d0cc238c3b584e1260e3ec"],["/static/media/web_banner_and_mobile-01.jpg","ae3516bc1e3f108c2fd79ffc8366bdd2"],["/static/media/web_banner_and_mobile-02_720.jpg","ff4469b37828cc3da5d334e97edf8115"],["/static/media/web_banner_and_mobile-03_720.jpg","1919467494ce81649300472f919d88b6"],["/static/media/web_banner_and_mobile-04.jpg","c2f6337500d018d0f9d0ac4c6657ea83"],["/static/media/web_banner_and_mobile-05.jpg","a99e17a60cc8b7bb5b253ee943fccb02"],["/static/media/web_banner_and_mobile-06.jpg","4c809f61c39801061aaedc06e96870b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}}),importScripts("/cache.js");