var seo = (title, description, imgURL) => {
  if (!title) {
    title = "Online Jewellery Shopping in India | Gold and Diamond Jewellery Online";
  }
  if (!description) {
    description =
      "Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings";
  }
  if (!imgURL) {
    imgURL = "https://assets.stylori.com/stylori-logo.svg";
  }

  return `
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
