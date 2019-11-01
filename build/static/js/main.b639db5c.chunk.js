(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"b",function(){return o});var r="https://api.stylori.net",a="",o="https://assets.stylori.net/base_images/"},16:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(4),a=n(1),o=n(0),i=n.n(o),c=n(46),s=n(17),u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=i.a.useState(!0),l=Object(a.a)(u,2),d=l[0],f=l[1],p=i.a.useState(!1),b=Object(a.a)(p,2),m=b[0],g=b[1],y=i.a.useState({}),v=Object(a.a)(y,2),h=v[0],k=v[1],S=i.a.useState({}),O=Object(a.a)(S,2),j=O[0],P=O[1],C=i.a.useContext(s.a).NetworkCtx,I=C.graphqlUrl,w=C.cdnUrl,x=Object(c.a)({uri:I}),L=function(a){x({query:t,variables:Object(r.a)({},n,a)}).then(function(t){if(f(!1),g(!1),k(t),e&&h)try{var n=e(h,w);P(n)}catch(m){console.error("MAPPER ERROR",m),g(!0),P({})}}).catch(function(t){f(!1),g(!0),k([]),P([])})};return i.a.useEffect(function(){o&&L()},[]),{error:m,loading:d,data:h,mappedData:j,makeRequest:L}}},17:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var r=n(1),a=n(0),o=n.n(a),i=n(14),c={NetworkCtx:{apiUrl:i.a,token:null,homePage:i.c,graphqlUrl:"".concat(i.a,"/graphql"),cdnUrl:i.b,LoginCtx:{email:"",password:""}},setNetworkCtx:function(){return null}},s=o.a.createContext(c),u=(s.Consumer,function(t){var e=o.a.useState(c.NetworkCtx),n=Object(r.a)(e,2),a=n[0],i=n[1];return o.a.createElement(s.Provider,{value:{NetworkCtx:a,setNetworkCtx:i}},t.children)})},18:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return o});var r=n(9),a=[{res:"318x318",size:"375w"},{res:"372x372",size:"500w"},{res:"276x276",size:"1440w"},{res:"422x422",size:"600w"},{res:"247x247",size:"768w"},{res:"204x204",size:"1024w"},{res:"543x543",size:"2560w"}],o=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"equalTo";return n.length>0?Object(r.a)({},n,{some:Object(r.a)({},t,Object(r.a)({},a,e))}):Object(r.a)({},t,Object(r.a)({},a,e))}},25:function(t,e,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i={GLobalCtx:{loggedIn:!1},setGlobaCtx:function(){return null}},c=o.a.createContext(i),s=(c.Consumer,function(t){var e=o.a.useState(i.GLobalCtx),n=Object(r.a)(e,2),a=n[0],s=n[1];return o.a.createElement(c.Provider,{value:{Globalctx:a,setGlobalCtx:s}},t.children)}),u=n(17),l=n(33),d=n(4),f=n(9),p=n(27),b=n(16),m=n(39),g=n(18),y=function(t){var e={};t.map(function(t){return String(Object.keys(t))});return t.map(function(t){var n=function(t,e){var n={table:"",type:""};switch(t){case"Collection":n={table:"productCollectionsByProductId",type:"collectionName"};break;case"Occasion":n={table:"productOccassionsByProductId",type:"occassionName"};break;case"Theme":n={table:"productThemesByProductId",type:"themeName"};break;case"Style":n={table:"productStylesByProductId",type:"styleName"};break;case"ProductType":n={table:"",type:"productType"};break;case"MetalColor":n={table:"transSkuListsByProductId",type:"metalColor"};break;case"MetalPurity":n={table:"transSkuListsByProductId",type:"purity"};break;case"Gender":n={table:"",type:"gender"};break;case"Material":n={table:"productMaterialsByProductSku",type:"materialName"};break;case"StoneColor":case"NoOfStone":n={table:"productStonecolorsByProductId",type:"stonecolor"}}return Object(g.a)(n.type,e,n.table)}(String(Object.keys(t)),String(Object.values(t)));e=Object(d.a)({},e,n)}),Object.keys(e).length>0?{filter:e}:{}},v=n(10),h=n(37),k=n(14),S=o.a.createContext({FilterOptionsCtx:{filters:{Offers:null,Availability:null,ProductType:null,style:null,Material:null,Theme:null,Collection:null,metalColor:null,MetalPurity:null,Occasion:null,NoOfStones:null,Gender:null,stoneColor:null,stoneShape:null},loading:!1,error:!1,data:[],offset:0,dataArr:[],first:24,mappedFilters:[]},setFilters:function(t){},setOffset:function(){},setFirst:function(){},updateProductList:function(){}}),O=(S.Consumer,Object(v.g)(function(t){var e=o.a.useState({Offers:{},Availability:{},ProductType:{},style:{},material:{},Theme:{},Collection:{},metalColor:{},MetalPurity:{},Occasion:{},NoOfStones:{},Gender:{},stoneColor:{},stoneShape:{}}),n=Object(r.a)(e,2),i=n[0],c=n[1],s=o.a.useState(0),u=Object(r.a)(s,2),l=u[0],g=u[1],v=o.a.useState(24),O=Object(r.a)(v,2),j=O[0],P=O[1],C=o.a.useState([]),I=Object(r.a)(C,2),w=I[0],x=I[1],L=o.a.useState([]),T=Object(r.a)(L,2),B=T[0],E=T[1],N=o.a.useState({filterLogic:function(){return[]}}),R=Object(r.a)(N,2),F=R[0].filterLogic,$=R[1];Object(a.useEffect)(function(){$({filterLogic:function(t,e){return e}})},[i]),Object(a.useEffect)(function(){$({filterLogic:function(t,e){return[].concat(Object(p.a)(t),Object(p.a)(e))}})},[l]),Object(a.useEffect)(function(){if(window.location.search){var t=window.location.search;decodeURI(t).replace("?","").split("&").map(function(t){return t.split("=")}).map(function(t){var e={};e[t[1]]=!0;var n=t[0];i[n]=e,console.log("{[val[0]]:obj}",{value:e}),c(i)})}},[]);var z=[],M=function(){var t=[];return window.location.search&&(t=decodeURI(window.location.search).replace("?","").split("&").map(function(t){var e=t.split("=");return Object(f.a)({},e[0],e[1])}),console.log("val",t)),t},U=Object(b.a)("query fetchProductDetails($filter: ProductListFilter,$offsetvar:Int,$firstvar:Int,$conditionImage:ProductImageCondition) {\n  allProductLists(filter: $filter,offset: $offsetvar, first:$firstvar,condition: {isactive: true} ) {\n    totalCount\n    nodes {\n      productName\n      productId\n      defaultSize\n      sizeVarient\n      productType\n      productDiamondsByProductSku {\n        nodes {\n          diamondClarity\n          diamondColour\n          diamondType\n          stoneWeight\n          diamondShape\n          diamondSettings\n          stoneCount\n        }\n      }\n      transSkuListsByProductId (condition: {isdefault: true}) {\n        nodes {\n          skuSize\n          purity\n          diamondType\n          metalColor\n          markupPrice\n          sellingPrice\n          discountPrice\n          generatedSku\n        }\n      }\n      productMaterialsByProductSku {\n        nodes {\n          materialName\n        }\n      }\n      productImagesByProductId(condition:$conditionImage,orderBy: IMAGE_POSITION_ASC) {\n        nodes {\n          ishover\n          imageUrl\n          imagePosition\n        }\n      }\n    }\n  }\n}\n",function(){},{}),A=U.loading,q=U.error,D=U.data,G=U.makeRequest,V=Object(m.b)("/filterlist",{},{}),W=(V.loading,V.error,V.data),J=V.makeFetch;console.info("dataResponsed",W);var _=function(){var t=y(M()),e={},n=0===i.length?Object.keys(i.MetalColor):"";e.productColor=n[0];var r=Object(d.a)({},t,{offsetvar:l,firstvar:j,conditionImage:e});G(r)};Object(a.useEffect)(function(){return E(W)},[W]),Object(a.useEffect)(function(){!function(){Object.keys(i).map(function(t){var e=i[t],n=Object.keys(e);if(n.length>0&&e[n[0]]){var r="".concat(t,"=").concat(n[0]);({})["".concat(t)]="".concat(n[0]),z.push(r)}});var e=encodeURI(z.join("&"));t.history.push({pathname:"/stylori",search:e})}(),_()},[i,l]),Object(a.useEffect)(function(){var t=Object(h.a)(D,k.b),e=F(w,t);x(e)},[D]);var Y={},Q=function(e){var n,r;if(c(e),r=M(),0===z.length)try{Object.keys(e).map(function(t){var n=e[t],r=Object.keys(n);if(r.length>0&&n[r[0]]){var a="".concat(t,"=").concat(r[0]);({})["".concat(t)]="".concat(r[0]),z.push(a)}});var a=encodeURI(z.join("&"));t.history.push({pathname:"/stylori",search:a}),r=M()}catch(q){console.log(q)}var o=r.map(function(t){return Object.values(t)}),i=r.map(function(t){return Object.keys(t)});for(console.log(e),n=i.length;n--;){var s=i[n][0].toLowerCase();Y[s]=o[n][0]}J(Y),console.log("newObj",e)};console.log("ntxdataresdata",W);var H={filters:i,loading:A,error:q,data:D,setFilters:Q,offset:l,setOffset:g,dataArr:w,first:j,setFirst:P,mappedFilters:B};return o.a.createElement(S.Provider,{value:{FilterOptionsCtx:H,setFilters:Q,setOffset:g,setFirst:P,updateProductList:_}},t.children)})),j=n(41);n.d(e,"e",function(){return s}),n.d(e,"f",function(){return u.b}),n.d(e,"g",function(){return l.a}),n.d(e,"h",function(){return l.b}),n.d(e,"c",function(){return S}),n.d(e,"d",function(){return O}),n.d(e,"a",function(){return j.a}),n.d(e,"b",function(){return j.b})},33:function(t,e,n){"use strict";n.d(e,"a",function(){return d}),n.d(e,"b",function(){return f});var r=n(4),a=n(1),o=n(0),i=n.n(o),c=n(16),s=n(38),u=n(10),l={ProductDetailCtx:{filters:{productId:"",defaultVariants:{diamondType:"",metalColor:"",purity:"",skuSize:""},skuId:""},loading:!1,error:!1,data:[]},setFilters:function(){}},d=i.a.createContext(l),f=(d.Consumer,Object(u.g)(function(t){var e,n=i.a.useState(l.ProductDetailCtx.filters),u=Object(a.a)(n,2),f=u[0],p=u[1],b=function(){p(f)};Object(o.useEffect)(function(){b()},[f]),console.log("SkuId......",f);var m=Object(c.a)(s.b,function(){},{}),g=m.loading,y=m.error,v=m.data,h=m.makeRequest;Object(o.useEffect)(function(){if(""===f.productId)if(window.location.search.length>0){var t=window.location.search.split("=")[1];f.skuId=t,p(f),e={conditionfilter:{generatedSku:f.skuId}}}else{console.log(window.location.href);var n=window.location.href.split("/"),r=n[n.length-1].replace(/-/g," ");e={productnamefilter:{productListByProductId:{productName:{equalTo:r}}},number:1}}console.log("filtersDefaultvariants",f.skuId)},[]),Object(o.useEffect)(function(){console.log("dataaaaaaaaa",v,0!==Object.entries(v).length&&v.constructor===Object&&v.data.allTransSkuLists&&v.data.allTransSkuLists.nodes.length>0),0!==Object.entries(v).length&&v.constructor===Object&&v.data.allTransSkuLists&&v.data.allTransSkuLists.nodes.length>0&&k()},[f]);console.log("datadata",v);var k=function(){if(window.location.search.length>0){var t=window.location.search.split("=")[1].split("-");f.productId=t[0]}var n=f.defaultVariants,a=f.defaultVariants.metalColor.length>0?{productColor:f.defaultVariants.metalColor}:null,o={conditionfilter:Object(r.a)({productId:f.productId},n)},i={conditionImage:a};e=Object(r.a)({},o,i)};Object(o.useEffect)(function(){0!==Object.entries(v).length&&v.constructor===Object&&v.data.allTransSkuLists&&v.data.allTransSkuLists.nodes.length>0&&(f.defaultVariants.diamondType=v.data.allTransSkuLists.nodes[0].diamondType,f.defaultVariants.metalColor=v.data.allTransSkuLists.nodes[0].metalColor,f.defaultVariants.purity=v.data.allTransSkuLists.nodes[0].purity,f.defaultVariants.skuSize=v.data.allTransSkuLists.nodes[0].skuSize,0===window.location.search.length&&(f.productId=v.data.allTransSkuLists.nodes[0].productListByProductId.productId),p(f))},[g,y,v]),Object(o.useEffect)(function(){p(f),b(),function(){if(console.info("filtersssss",f),0===Object.entries(e).length||e.constructor!==Object)return{};h(e)}()},[f]);var S={filters:f,loading:g,error:y,data:v};return console.info("filtersssassss",f),i.a.createElement(d.Provider,{value:{ProductDetailCtx:S,setFilters:p}},t.children)}))},37:function(t,e,n){"use strict";var r=n(4),a=n(18),o=function(t,e){return t?a.b.map(function(n){return Object(r.a)({},n,{img:"".concat(e).concat(void 0===t.imageUrl?t:t.imageUrl)})}):[]},i=function(t){return 0===t.length?"product/SR0662/HOVER-SR0662-2Y.jpg":t.find(function(t){return t.ishover})};e.a=function(t,e){var n=[];try{n=t.data.allProductLists.nodes}catch(r){n=[]}return n.map(function(n){var a,c;try{a={totalCount:t.data.allProductLists.length>0?t.length:t.data.allProductLists.totalCount,price:void 0===n.transSkuListsByProductId.nodes[0]?15343:n.transSkuListsByProductId.nodes[0].discountPrice,offerPrice:void 0===n.transSkuListsByProductId.nodes[0]?13203:n.transSkuListsByProductId.nodes[0].markupPrice,title:n.productName,save:"5999.9",image:{placeImage:o((c=n.productImagesByProductId.nodes,0===c.length?"product/SR0662/SR0662-1Y.jpg":c.find(function(t){return!t.ishover})),e),hoverImage:o(i(n.productImagesByProductId.nodes),e)},productId:n.productId,diamondType:void 0===n.transSkuListsByProductId.nodes[0]?"":n.transSkuListsByProductId.nodes[0].diamondType,metalColor:void 0===n.transSkuListsByProductId.nodes[0]?"":n.transSkuListsByProductId.nodes[0].metalColor,purity:void 0===n.transSkuListsByProductId.nodes[0]?"":n.transSkuListsByProductId.nodes[0].purity,skuSize:void 0===n.transSkuListsByProductId.nodes[0]?"":n.transSkuListsByProductId.nodes[0].skuSize,material:void 0===n.productMaterialsByProductSku.nodes[0]?"":n.productMaterialsByProductSku.nodes[0].materialName,productType:n.productType,skuId:n.transSkuListsByProductId.nodes[0].generatedSku}}catch(r){console.info("error",r)}return a})}},38:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return a});n(4),n(18);var r="query MyQuery($conditionfilter: TransSkuListCondition, $conditionImage: ProductImageCondition,$productnamefilter:TransSkuListFilter,$number: Int) {\n  allTransSkuLists(condition: $conditionfilter, filter:$productnamefilter, first: $number) {\n    nodes {\n      skuSize\n      markupPrice\n      sellingPrice\n      purity\n      metalColor\n      discountPrice\n      generatedSku\n      isReadyToShip\n      vendorDeliveryTime\n      transSkuDescriptionsBySkuId {\n        nodes {\n          skuDescription\n        }\n      }\n      diamondType\n      productListByProductId{\n           productName\n      productId\n      defaultSize\n      sizeVarient\n      colourVarient\n      defaultWeight\n      productType\n             productDiamondsByProductSku {\n        nodes {\n          diamondClarity\n          diamondColour\n          diamondType\n          stoneWeight\n          diamondShape\n          diamondSettings\n          stoneCount\n        }\n      }\n         productGemstonesByProductSku {\n        nodes {\n          gemstoneType\n          gemstoneSize\n          gemstoneShape\n          gemstoneSetting\n          productSku\n          stoneCount\n        }\n      }\n           productImagesByProductId (condition:$conditionImage,orderBy: IMAGE_POSITION_ASC) {\n        nodes {\n          ishover\n          imageUrl\n          imagePosition\n        }\n      }\n      }\n    }\n  }\n}\n\n\n",a="query CheckForCod($pincode:String) {\n  allPincodeMasters(first: 1, condition: {pincode:$pincode}) {\n    nodes {\n      isDelivery\n      maxCartvalue\n      minCartvalue\n      isCod\n      pincode\n    }\n  }\n}\n"},39:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var r=n(4),a=n(1),o=n(0),i=n.n(o),c=n(17),s=(n(48),function(t){var e=i.a.useState(!1),n=Object(a.a)(e,2),r=n[0],o=n[1],c=i.a.useState(!1),s=Object(a.a)(c,2),u=s[0],l=s[1],d=i.a.useState({}),f=Object(a.a)(d,2),p=f[0],b=f[1],m=i.a.useState({}),g=Object(a.a)(m,2),y=g[0],v=g[1],h=i.a.useState({status:null,statusText:""}),k=Object(a.a)(h,2),S=k[0];k[1];return i.a.useEffect(function(){o(!0);var e={};t().then(function(t){v(t),console.info("MAPPER",t)}).catch(function(t){return l(!0)}),o(!1),v(e),b(e)},[t]),{loading:r,error:u,status:S,data:p,mapped:y}}),u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],i.a.useContext(c.a).NetworkCtx.apiUrl),o=i.a.useState(!1),s=Object(a.a)(o,2),u=s[0],l=s[1],d=i.a.useState(!1),f=Object(a.a)(d,2),p=f[0],b=f[1],m=i.a.useState({}),g=Object(a.a)(m,2),y=g[0],v=g[1],h=i.a.useState({}),k=Object(a.a)(h,2),S=k[0],O=(k[1],i.a.useState({status:null,statusText:""})),j=Object(a.a)(O,2),P=j[0],C=j[1],I=y?"POST":"GET",w="".concat(n).concat(t),x=function(t){var n="string"===typeof e?e:JSON.stringify(e);e=0===JSON.parse(n).length?n:JSON.stringify(t),l(!0),fetch(w,{method:I,headers:{"Content-Type":"application/json"},body:e}).then(function(t){return C(Object(r.a)({},P,{status:Response.status,statusText:t.message})),t.json()}).then(function(t){v(t),console.info("resdataaaa",t,e)}).catch(function(t){b(!0),l(!1),console.log(Response.status)})};return console.info("object",y),i.a.useEffect(function(){x()},[]),{loading:u,error:p,status:P,data:y,mapped:S,makeFetch:x}}},40:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=(n(49),a.a.createElement("div",{className:"overall-loader"},a.a.createElement("div",{id:"loading"})));e.a=o},41:function(t,e,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(16),c=n(10);n.d(e,"a",function(){return u}),n.d(e,"b",function(){return l});var s={CartCtx:{cartFilters:{skuId:""},loading:!1,error:!1,data:[]},setCartFilters:function(t){}},u=o.a.createContext(s),l=(u.Consumer,Object(c.g)(function(t){var e,n,c=o.a.useState(s.CartCtx),l=Object(r.a)(c,2),d=l[0],f=l[1];e=localStorage.getItem("cartDetails");var p=JSON.parse(e);n=p.products[0].sku_id[0];var b=Object(i.a)("query MyQuery($productList: [String!]) {\n    allProductLists(filter: {transSkuListsByProductId: {some: {generatedSku: {in: $productList}}}}) {\n      nodes {\n        productName\n        productId\n        transSkuListsByProductId {\n          nodes {\n            generatedSku\n            purity\n            metalColor\n            discountPrice\n            markupPrice\n          }\n        }\n        productImagesByProductId {\n          nodes {\n            imageUrl\n          }\n        }\n      }\n    }\n  }",function(){},{}),m=b.loading,g=b.error,y=b.data,v=b.makeRequest;Object(a.useEffect)(function(){!function(){e=localStorage.getItem("cartDetails");var t=JSON.parse(e);n=t.products[0].sku_id}(),f(n),v({productList:[n]}),console.log("cartFilters",d)},[d]);var h={cartFilters:d,loading:m,error:g,data:y,setCartFilters:f};return o.a.createElement(u.Provider,{value:{CartCtx:h,setCartFilters:f}},t.children)}))},49:function(t,e,n){},50:function(t,e,n){t.exports=n(64)},60:function(t,e,n){},62:function(t){t.exports={palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"rgba(57, 69, 120, 1)",main:"rgba(58, 69, 120, 1)",dark:"rgba(49, 63, 92, 1)",contrastText:"#fff"},secondary:{light:"rgba(246, 153, 163, 1)",main:"rgba(241, 72, 128, 1)",dark:"rgba(234, 83, 129, 1)",contrastText:"#fff"},error:{light:"rgba(199, 110, 108, 1)",main:"rgba(185, 74, 72, 1)",dark:"rgba(129, 51, 50, 1)",contrastText:"#fff"},text:{primary:"#394578",secondary:"rgba(0, 0, 0, 0.54)",disabled:"#7b7b7b",hint:"rgba(0, 0, 0, 0.38)"},overallButoon:{primary:"#f36e23",contrastText:"#fff"}}}},64:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(31),i=n.n(o),c=n(21),s=n(25),u=(n(60),n(40)),l=n(70),d=n(73),f=n(72),p=Object(l.a)(n(62)),b=Object(d.a)(p),m=a.a.lazy(function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,313))});var g=function(t){return a.a.createElement(s.e,null,a.a.createElement(f.a,{theme:b},a.a.createElement(s.f,null,a.a.createElement(c.a,null,a.a.createElement(a.a.Suspense,{fallback:u.a},a.a.createElement(m,null))))))},y=n(11),v=n.n(y),h=n(22),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(){return(S=Object(h.a)(v.a.mark(function t(e){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:t.next=7;break;case 6:window.addEventListener("load",function(){var t="".concat("","/service-worker.js");k?(x(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):O(t,e)});case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function O(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;I("App is being cached localyy for offline purpose!"),null!=n&&(n.onstatechange=Object(h.a)(v.a.mark(function r(){var a,o,i;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("installed"!==n.state){r.next=12;break}if(a=!1,o="New version of app is installed",i="Your app is installed and works offline",!navigator.serviceWorker.controller){r.next=7;break}console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&(e.onUpdate(t),a=!0),r.next=12;break;case 7:if(console.log("Content is cached for offline use."),!e||!e.onSuccess){r.next=12;break}return r.next=11,I(a?o:i);case 11:e.onSuccess(t);case 12:case"end":return r.stop()}},r)})))}}).catch(function(t){console.error("Error during service worker registration:",t)})}function j(){return P.apply(this,arguments)}function P(){return(P=Object(h.a)(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(C()){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,window.Notification.requestPermission();case 4:if("granted"===t.sent){t.next=8;break}t.next=13;break;case 8:if(localStorage.getItem("firstnotify")){t.next=12;break}return t.next=11,I("Ohoo.. your first notification \ud83c\udf89\ud83d\ude4c");case 11:localStorage.setItem("firstnotify",!0);case 12:return t.abrupt("return",!0);case 13:case 14:case"end":return t.stop()}},t)}))).apply(this,arguments)}function C(){return"serviceWorker"in navigator&&"PushManager"in window||(console.log("Sorry notifications are not yet supported"),!1)}function I(t){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(v.a.mark(function t(e){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!C()){t.next=5;break}return t.next=3,new Notification(e);case 3:t.next=7;break;case 5:return t.next=7,j();case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function x(t,e){fetch(t).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):O(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}window.addEventListener("online",function(t){I("Lost internet connection !")}),window.addEventListener("offline",function(t){I("Network connection restored !")}),i.a.render(a.a.createElement(g,null),document.getElementById("root")),function(t){S.apply(this,arguments)}()}},[[50,1,3]]]);
//# sourceMappingURL=main.b639db5c.chunk.js.map