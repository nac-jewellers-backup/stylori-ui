var seo = (title, description, imgURL) => {
  if (!title) {
    return (title = "Online Jewellery Shopping in India | Gold and Diamond Jewellery Online");
  }
  if (!description) {
    return (description =
      "Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings");
  }
  if (!imgURL) {
    return (imgURL =
      "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_collection/Stylorilogo.png");
  }

  return `
  <script>
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", "1464338023867789");
  fbq("track", "PageView");
</script>
<noscript
  ><img
    height="1"
    width="1"
    style="display: none"
    src="https://www.facebook.com/tr?id=1464338023867789&ev=PageView&noscript=1"
/></noscript>
    <title id="title">${title} </title>
  <meta name='facebook-domain-verification' content='t3yrba182xfqp79aqld63vtoaong46' />  
  <meta name='description'   content='${description}'  />
  <meta name='keywords'  content='Jewellery Online, Online Jewellery India, buy gold jewellery online, Online Jewellery Shopping, gold jewellery online, gold jewellery, fashion jewellery, jewellery designs, indian jewellery, designer jewellery,  fashion Jewellery, online jewellery, diamond Jewellery, online jewellery shopping india, jewellery websites, diamond jewellery india,' />
 
  <meta property='og:title'  content='${title}' />
  <meta property='og:description'  content='${description}'/>
  <meta property='og:url'  content="https://www.stylori.com/" />
  <meta property='og:image'  content='${imgURL}' />
  <meta property="og:type" content="website">
 
  <meta property='twitter:card' content='summary' />
  <meta property='twitter:site' content='@StyloriLove' />
  <meta property='twitter:title'  content='${title}' />
  <meta property='twitter:description' content='${description}' />
  <meta property='twitter:image' content='${imgURL}' /> 
  <meta property="twitter:url" content="https://www.stylori.com/">`;
};
module.exports = { seo };
