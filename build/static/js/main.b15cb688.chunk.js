(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return a});var r="https://api.stylori.net",o="",a="https://assets.stylori.net/"},16:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(9),o=n(2),a=n(0),i=n.n(a),c=n(46),s=n(24),u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=i.a.useState(!0),d=Object(o.a)(u,2),l=d[0],f=d[1],p=i.a.useState(!1),b=Object(o.a)(p,2),m=b[0],g=b[1],y=i.a.useState({}),v=Object(o.a)(y,2),h=v[0],k=v[1],S=i.a.useState({}),P=Object(o.a)(S,2),O=P[0],w=P[1],C=i.a.useContext(s.a).NetworkCtx,j=C.graphqlUrl,x=C.cdnUrl,I=Object(c.a)({uri:j}),L=function(o){I({query:t,variables:Object(r.a)({},n,o)}).then(function(t){if(f(!1),g(!1),k(t),e&&h)try{var n=e(h,x);w(n)}catch(m){console.error("MAPPER ERROR",m),g(!0),w({})}}).catch(function(t){f(!1),g(!0),k([]),w([])})};return i.a.useEffect(function(){a&&L()},[]),{error:m,loading:l,data:h,mappedData:O,makeRequest:L}}},17:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return a});var r=n(8),o=[{res:"318x318",size:"375w"},{res:"372x372",size:"500w"},{res:"276x276",size:"1440w"},{res:"422x422",size:"600w"},{res:"247x247",size:"768w"},{res:"204x204",size:"1024w"},{res:"543x543",size:"2560w"}],a=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"equalTo";return n.length>0?Object(r.a)({},n,{some:Object(r.a)({},t,Object(r.a)({},o,e))}):Object(r.a)({},t,Object(r.a)({},o,e))}},24:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var r=n(2),o=n(0),a=n.n(o),i=n(13),c={NetworkCtx:{apiUrl:i.a,token:null,homePage:i.c,graphqlUrl:"".concat(i.a,"/graphql"),cdnUrl:i.b,LoginCtx:{email:"",password:""}},setNetworkCtx:function(){return null}},s=a.a.createContext(c),u=(s.Consumer,function(t){var e=a.a.useState(c.NetworkCtx),n=Object(r.a)(e,2),o=n[0],i=n[1];return a.a.createElement(s.Provider,{value:{NetworkCtx:o,setNetworkCtx:i}},t.children)})},26:function(t,e,n){"use strict";var r=n(2),o=n(0),a=n.n(o),i={GLobalCtx:{loggedIn:!1},setGlobaCtx:function(){return null}},c=a.a.createContext(i),s=(c.Consumer,function(t){var e=a.a.useState(i.GLobalCtx),n=Object(r.a)(e,2),o=n[0],s=n[1];return a.a.createElement(c.Provider,{value:{Globalctx:o,setGlobalCtx:s}},t.children)}),u=n(24),d=n(36),l=n(9),f=n(8),p=n(22),b=n(16),m=n(17),g=function(t){var e={};t.map(function(t){return String(Object.keys(t))});return t.map(function(t){var n=function(t,e){var n={table:"",type:""};switch(t){case"Collection":n={table:"productCollectionsByProductId",type:"collectionName"};break;case"Occasion":n={table:"productOccassionsByProductId",type:"occassionName"};break;case"Theme":n={table:"productThemesByProductId",type:"themeName"};break;case"Style":n={table:"productStylesByProductId",type:"styleName"};break;case"ProductType":n={table:"",type:"productType"};break;case"MetalColor":n={table:"transSkuListsByProductId",type:"metalColor"};break;case"MetalPurity":n={table:"transSkuListsByProductId",type:"purity"};break;case"Gender":n={table:"",type:"gender"}}return Object(m.a)(n.type,e,n.table)}(String(Object.keys(t)),String(Object.values(t)));e=Object(l.a)({},e,n)}),Object.keys(e).length>0?{filter:e}:{}},y=n(10),v=n(28),h=n(13),k=a.a.createContext({FilterOptionsCtx:{filters:{Offers:null,Availability:null,ProductType:null,style:null,material:null,Theme:null,Collection:null,metalColor:null,MetalPurity:null,Occasion:null,NoOfStones:null,Gender:null,stoneColor:null,stoneShape:null},loading:!1,error:!1,data:[],offset:0,dataArr:[],first:24},setFilters:function(t){},setOffset:function(){},setFirst:function(){},updateProductList:function(){}}),S=(k.Consumer,Object(y.g)(function(t){var e=a.a.useState({Offers:{},Availability:{},ProductType:{},style:{},material:{},Theme:{},Collection:{},metalColor:{},MetalPurity:{},Occasion:{},NoOfStones:{},Gender:{},stoneColor:{},stoneShape:{}}),n=Object(r.a)(e,2),i=n[0],c=n[1],s=a.a.useState(0),u=Object(r.a)(s,2),d=u[0],m=u[1],y=a.a.useState(24),S=Object(r.a)(y,2),P=S[0],O=S[1],w=a.a.useState([]),C=Object(r.a)(w,2),j=C[0],x=C[1],I=a.a.useState({filterLogic:function(){return[]}}),L=Object(r.a)(I,2),E=L[0].filterLogic,B=L[1];Object(o.useEffect)(function(){B({filterLogic:function(t,e){return e}})},[i]),Object(o.useEffect)(function(){B({filterLogic:function(t,e){return[].concat(Object(p.a)(t),Object(p.a)(e))}})},[d]);var T=[],N=Object(b.a)("query fetchProductDetails($filter: ProductListFilter,$offsetvar:Int,$firstvar:Int) {\n  allProductLists(filter: $filter,offset: $offsetvar, first:$firstvar,condition: {isactive: true} ) {\n    totalCount\n    nodes {\n      productName\n      productId\n      defaultSize\n      sizeVarient\n      productType\n      productDiamondsByProductSku {\n        nodes {\n          diamondClarity\n          diamondColour\n          diamondType\n          stoneWeight\n          diamondShape\n          diamondSettings\n          stoneCount\n        }\n      }\n      transSkuListsByProductId (condition: {isdefault: true}) {\n        nodes {\n          skuSize\n          purity\n          diamondType\n          metalColor\n          markupPrice\n          sellingPrice\n          discountPrice\n          generatedSku\n        }\n      }\n      productImagesByProductId {\n        nodes {\n          ishover\n          imageUrl\n          imagePosition\n        }\n      }\n    }\n  }\n}\n",function(){},{}),R=N.loading,A=N.error,F=N.data,z=N.makeRequest,D=[],U=function(){var t=g(function(){var t=[];return window.location.search&&(t=decodeURI(window.location.search).replace("?","").split("&").map(function(t){var e=t.split("=");return Object(f.a)({},e[0],e[1])}),console.log("val",t)),t}()),e=Object(l.a)({},t,{offsetvar:d,firstvar:P});z(e)};Object(o.useEffect)(function(){return console.info("FILTERS",i)},[i]),Object(o.useEffect)(function(){!function(){Object.keys(i).map(function(t){var e=i[t],n=Object.keys(e);if(n.length>0&&e[n[0]]){var r="".concat(t,"=").concat(n[0]);T.push(r)}});var e=encodeURI(T.join("&"));t.history.push({pathname:"/stylori",search:""!==e?e:window.location.search})}(),U()},[i,d]),Object(o.useEffect)(function(){if(""!==window.location.search){var t=Object(v.a)(F,h.b);console.log("dataArr",j);var e=E(j,t);console.info("PROPERDATA",e),console.info("LISTUPDATE",D,F,t,e,j),x(e)}},[F]),Object(o.useEffect)(function(){if(""===window.location.search){x([]);var t=Object(v.a)(F,h.b),e=[].concat(Object(p.a)(j),Object(p.a)(t));console.info("LISTUPDATE",D,F,t,e,j),x(e)}},[F]),Object(o.useEffect)(function(){return console.info("DATAARRA",j)},[j]);var q={filters:i,loading:R,error:A,data:F,setFilters:c,offset:d,setOffset:m,dataArr:j,first:P,setFirst:O};return a.a.createElement(k.Provider,{value:{FilterOptionsCtx:q,setFilters:c,setOffset:m,setFirst:O,updateProductList:U}},t.children)})),P=n(39);n.d(e,"e",function(){return s}),n.d(e,"f",function(){return u.b}),n.d(e,"g",function(){return d.b}),n.d(e,"c",function(){return k}),n.d(e,"d",function(){return S}),n.d(e,"a",function(){return P.a}),n.d(e,"b",function(){return P.b})},28:function(t,e,n){"use strict";var r=n(9),o=n(17),a=function(t,e){return t?o.b.map(function(n){return Object(r.a)({},n,{img:"".concat(e).concat(void 0===t.imageUrl?t:t.imageUrl)})}):[]},i=function(t){return 0===t.length?"product/SR0662/HOVER-SR0662-2Y.jpg":t.find(function(t){return t.ishover})};e.a=function(t,e){var n=[];try{n=t.data.allProductLists.nodes}catch(r){n=[]}return n.map(function(n){var o,c;try{o={totalCount:t.data.allProductLists.length>0?t.length:t.data.allProductLists.totalCount,price:void 0===n.transSkuListsByProductId.nodes[0]?15343:n.transSkuListsByProductId.nodes[0].discountPrice,offerPrice:void 0===n.transSkuListsByProductId.nodes[0]?13203:n.transSkuListsByProductId.nodes[0].markupPrice,title:n.productName,save:"5999.9",image:{placeImage:a((c=n.productImagesByProductId.nodes,0===c.length?"product/SR0662/SR0662-1Y.jpg":c.find(function(t){return!t.ishover})),e),hoverImage:a(i(n.productImagesByProductId.nodes),e)},productId:n.productId,diamondType:void 0===n.transSkuListsByProductId.nodes[0]?"":n.transSkuListsByProductId.nodes[0].diamondType,metalColor:void 0===n.transSkuListsByProductId.nodes[0]?"":n.transSkuListsByProductId.nodes[0].metalColor,purity:void 0===n.transSkuListsByProductId.nodes[0]?"":n.transSkuListsByProductId.nodes[0].purity,skuSize:void 0===n.transSkuListsByProductId.nodes[0]?"":n.transSkuListsByProductId.nodes[0].skuSize}}catch(r){console.info("error",r)}return o})}},36:function(t,e,n){"use strict";n.d(e,"a",function(){return d}),n.d(e,"b",function(){return l});var r=n(2),o=n(0),a=n.n(o),i=n(16),c=n(41),s=n(10),u={ProductDetailCtx:{filters:{productId:"",defaultVariants:{diamondType:"",metalColor:"",purity:""}},loading:!1,error:!1,data:[]},setFilters:function(){}},d=a.a.createContext(u),l=(d.Consumer,Object(s.g)(function(t){var e=a.a.useState(u.ProductDetailCtx.filters),n=Object(r.a)(e,2),s=n[0],l=n[1],f=function(){l(s)};if(Object(o.useEffect)(function(){f()},[s]),""===s.productId){var p=t.location.state,b=p.productId,m=p.defaultVariant;s.productId=b,s.defaultVariants=m}var g=Object(i.a)(c.a,function(){},{}),y=g.loading,v=g.error,h=g.data,k=g.makeRequest;Object(o.useEffect)(function(){l(s),f(),function(){var t={conditionfilter:s.defaultVariants,filter:{productId:s.productId}};k(t)}()},[s]);var S={filters:s,loading:y,error:v,data:h};return a.a.createElement(d.Provider,{value:{ProductDetailCtx:S,setFilters:l}},t.children)}))},38:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=(n(47),o.a.createElement("div",{className:"overall-loader"},o.a.createElement("div",{id:"loading"})));e.a=a},39:function(t,e,n){"use strict";var r=n(2),o=n(0),a=n.n(o),i=n(16),c=n(10);n.d(e,"a",function(){return u}),n.d(e,"b",function(){return d});var s={CartCtx:{cartFilters:{skuId:""},loading:!1,error:!1,data:[]},setCartFilters:function(t){}},u=a.a.createContext(s),d=(u.Consumer,Object(c.g)(function(t){var e,n,c=a.a.useState(s.CartCtx),d=Object(r.a)(c,2),l=d[0],f=d[1];e=localStorage.getItem("cartDetails");var p=JSON.parse(e);n=p.products[0].sku_id[0];var b=Object(i.a)("query MyQuery($productList: [String!]) {\n    allProductLists(filter: {transSkuListsByProductId: {some: {generatedSku: {in: $productList}}}}) {\n      nodes {\n        productName\n        productId\n        transSkuListsByProductId {\n          nodes {\n            generatedSku\n            purity\n            metalColor\n            discountPrice\n            markupPrice\n          }\n        }\n        productImagesByProductId {\n          nodes {\n            imageUrl\n          }\n        }\n      }\n    }\n  }",function(){},{}),m=b.loading,g=b.error,y=b.data,v=b.makeRequest;Object(o.useEffect)(function(){!function(){e=localStorage.getItem("cartDetails");var t=JSON.parse(e);n=t.products[0].sku_id[0]}(),f(n),v({productList:[n]}),console.log("cartFilters",l)},[l]);var h={cartFilters:l,loading:m,error:g,data:y,setCartFilters:f};return a.a.createElement(u.Provider,{value:{CartCtx:h,setCartFilters:f}},t.children)}))},41:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(9),n(17);var r="query fetchProductDetails($conditionfilter:TransSkuListCondition,$filter: ProductListCondition) {\n  allProductLists(condition:$filter ) {\n    nodes {\n      productName\n      productId\n      defaultSize\n      sizeVarient\n      colourVarient\n      defaultWeight\n      productType\n      productImagesByProductId  {\n        nodes {\n          ishover\n          imageUrl\n          imagePosition\n        }\n      }\n      productDiamondsByProductSku {\n        nodes {\n          diamondClarity\n          diamondColour\n          diamondType\n          stoneWeight\n          diamondShape\n          diamondSettings\n          stoneCount\n        }\n      }\n      transSkuListsByProductId (condition:$conditionfilter ) {\n        nodes {\n          skuSize\n          markupPrice\n          sellingPrice\n          purity\n          metalColor\n          discountPrice\n          generatedSku\n          transSkuDescriptionsBySkuId {\n            nodes {\n              skuDescription\n            }\n          }\n          diamondType\n        }\n      }\n      productGemstonesByProductSku {\n        nodes {\n          gemstoneType\n          gemstoneSize\n          gemstoneShape\n          gemstoneSetting\n          productSku\n          stoneCount\n        }\n      }\n    }\n  }\n}\n\n"},47:function(t,e,n){},48:function(t,e,n){t.exports=n(62)},58:function(t,e,n){},60:function(t){t.exports={palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"rgba(57, 69, 120, 1)",main:"rgba(58, 69, 120, 1)",dark:"rgba(49, 63, 92, 1)",contrastText:"#fff"},secondary:{light:"rgba(246, 153, 163, 1)",main:"rgba(241, 72, 128, 1)",dark:"rgba(234, 83, 129, 1)",contrastText:"#fff"},error:{light:"rgba(199, 110, 108, 1)",main:"rgba(185, 74, 72, 1)",dark:"rgba(129, 51, 50, 1)",contrastText:"#fff"},text:{primary:"#394578",secondary:"rgba(0, 0, 0, 0.54)",disabled:"#7b7b7b",hint:"rgba(0, 0, 0, 0.38)"},overallButoon:{primary:"#f36e23",contrastText:"#fff"}}}},62:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(32),i=n.n(a),c=n(20),s=n(26),u=(n(58),n(38)),d=n(68),l=n(70),f=n(69),p=Object(d.a)(n(60)),b=Object(l.a)(p),m=o.a.lazy(function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,306))});var g=function(t){return o.a.createElement(s.e,null,o.a.createElement(f.a,{theme:b},o.a.createElement(s.f,null,o.a.createElement(c.a,null,o.a.createElement(o.a.Suspense,{fallback:u.a},o.a.createElement(m,null))))))},y=n(11),v=n.n(y),h=n(21),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(){return(S=Object(h.a)(v.a.mark(function t(e){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:t.next=7;break;case 6:window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");k?(I(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):P(t,e)});case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function P(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;j("App is being cached localyy for offline purpose!"),null!=n&&(n.onstatechange=Object(h.a)(v.a.mark(function r(){var o,a,i;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("installed"!==n.state){r.next=12;break}if(o=!1,a="New version of app is installed",i="Your app is installed and works offline",!navigator.serviceWorker.controller){r.next=7;break}console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&(e.onUpdate(t),o=!0),r.next=12;break;case 7:if(console.log("Content is cached for offline use."),!e||!e.onSuccess){r.next=12;break}return r.next=11,j(o?a:i);case 11:e.onSuccess(t);case 12:case"end":return r.stop()}},r)})))}}).catch(function(t){console.error("Error during service worker registration:",t)})}function O(){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(C()){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,window.Notification.requestPermission();case 4:if("granted"===t.sent){t.next=8;break}t.next=13;break;case 8:if(localStorage.getItem("firstnotify")){t.next=12;break}return t.next=11,j("Ohoo.. your first notification \ud83c\udf89\ud83d\ude4c");case 11:localStorage.setItem("firstnotify",!0);case 12:return t.abrupt("return",!0);case 13:case 14:case"end":return t.stop()}},t)}))).apply(this,arguments)}function C(){return"serviceWorker"in navigator&&"PushManager"in window||(console.log("Sorry notifications are not yet supported"),!1)}function j(t){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(v.a.mark(function t(e){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!C()){t.next=5;break}return t.next=3,new Notification(e);case 3:t.next=7;break;case 5:return t.next=7,O();case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function I(t,e){fetch(t).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):P(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}window.addEventListener("online",function(t){j("Lost internet connection !")}),window.addEventListener("offline",function(t){j("Network connection restored !")}),i.a.render(o.a.createElement(g,null),document.getElementById("root")),function(t){S.apply(this,arguments)}()}},[[48,1,3]]]);
//# sourceMappingURL=main.b15cb688.chunk.js.map