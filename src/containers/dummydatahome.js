import FlowerDimon from "../assets/FlowerDimon.jpg";
import closeheart from "../assets/closeheart.jpg";
import nosepin from "../assets/nosepin.gif";

export const homePageStylori = {
  //------------- banner image ---------------
  carouselTop: {
    setting: {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      fade: false,
      arrows: false,
      arrowsImg: true,
      dotsClass: "slickdev",
      accessibility: true,
      autoplaySpeed: 4000,
      centerMode: false,
      focusOnSelect: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      pauseOnFocus: true,
      swipe: true,
    },
    settingSilver: {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      fade: false,
      arrows: false,
      arrowsImg: true,
      dotsClass: "slickdev",
      accessibility: true,
      autoplaySpeed: 2000,
      centerMode: false,
      focusOnSelect: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      pauseOnFocus: true,
      swipe: true,
    },
    settingSilverListingPage: {
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 1000,
      fade: false,
      arrows: false,
      arrowsImg: true,
      dotsClass: "slickdev",
      accessibility: true,
      autoplaySpeed: 2000,
      centerMode: false,
      focusOnSelect: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      pauseOnFocus: true,
      swipe: false,
    },
    data: [
      // {
      //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/home/CV+Stylroi+banner+1920+X+656.jpg",
      //   mobileImg: " https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/home/CV+Stylroi+mobile+banner+805+X+430.jpg",
      //   navigateUrl: "https://www.stylori.com/jewellery"
      // },
      // {
      //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/home/Gold+C+stylori+-+-+1920x656+copy.jpg",
      //   mobileImg: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/home/Gold+C+stylori+-805x430.jpg",
      //   navigateUrl: "https://www.stylori.com/goldcoins"
      // },
      // {
      //   img:"https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-Raksha-Bandhan-Banner-1920X656.jpg",
      //   mobileImg:"https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-Raksha-Bandhan-Banner-805-X-430.jpg",
      //   navigateUrl:'https://www.stylori.com/rakhis-jewellery'
      // },

      // ADDED ON 27-07-2020

      // {
      //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Raksha-Bandhan-Return-Gift+web.jpg",
      //   mobileImg: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Raksha-Bandhan-Returhn-Gift-mobile+(1).jpg",
      //   navigateUrl: "https://www.stylori.com/jewellery-for+women?sort=Featured&startprice=0&endprice=0"
      // },

      //

 
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-Butterfly-jewellery-w.jpg	",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-Butterfly-jewellery-m.jpg	",
        navigateUrl: "https://www.stylori.com/jewellery-butterfly?sort=New%20to%20Stylori&startprice=0&endprice=0",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-one-day-shipping-jewellery-W.jpg	",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-one-day-shipping-jewellery-m.jpg	",
        navigateUrl: "https://www.stylori.com/jewellery-shipping+in+1+day",
      },
 
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Stylori-Silver-jewellery-web-banner.jpg	",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Stylori-Silver-jewellery-mob-banner.jpg	",
        navigateUrl: "https://www.stylori.com/styloriSilver",
      },
      // {
      //   img:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-monsoon-collection-web-2020.jpg",
      //   mobileImg:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-monsoon-collection-mob-2020.jpg",
      //   navigateUrl:
      //     "https://www.stylori.com/jewellery-from+monsoon+collection",
      // },
      // {
      //   img:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-butterfly-collection-web-2020.jpg",
      //   mobileImg:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-butterfly-collection-mob-2020.jpg",
      //   navigateUrl:
      //     "https://www.stylori.com/jewellery-butterfly?sort=latest&startprice=0&endprice=0",
      // },

      // REMOVED ON 27-07-2020

      // {
      //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/home/Gold+C+stylori+-+-+1920x656+copy.jpg",
      //   mobileImg: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/home/Gold+C+stylori+-805x430.jpg",
      //   navigateUrl: "https://www.stylori.com/goldcoins"
      // },

      //
      // {
      //   img: "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori+CSK-banner-1920-X-656-px.jpg",
      //   mobileImg: "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori+CSK-banner-mobile-805X430-px.jpg",
      //   navigateUrl: "/jewellery/kada/csk_kada?skuId=1000001"
      // },
      // {
      //   img:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Earring-Stylori-2020.jpg",
      //   mobileImg:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Earring-Stylori--mob-2020.jpg",
      //   navigateUrl:
      //     "/earrings-jewellery?sort=Featured&startprice=0&endprice=0",
      // },
      // {
      //   img:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Carve+web+banner+2020.jpg",
      //   mobileImg:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Carve+mob+banner+2020.jpg",
      //   navigateUrl: "/jewellery-from+the+carve+collection",
      // },
      // {
      //   img: "https://assets.stylori.com/images/Static+Pages/Home+Page/banner1.jpg",
      //   mobileImg: "https://assets.stylori.com/images/Static+Pages/Home+Page/gemstone-mob",
      //   navigateUrl: "/gemstone-jewellery?sort=latest"
      // },
      // {
      //   img: "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori-Valentine-banner-web.jpg",
      //   mobileImg: "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori-Valentine-banner-mob.jpg",
      //   navigateUrl: "/hearts-jewellery?sort=bestseller"
      // },

      // {
      //   img: "https://assets.stylori.com/images/Static+Pages/Home+Page/banner3.jpg",
      //   mobileImg: "https://assets.stylori.com/images/Static+Pages/Home+Page/rings-collection-mob.jpg",
      //   navigateUrl: "/rings-jewellery"
      // },
      // {
      //   img: "https://assets.stylori.com/images/Static+Pages/Home+Page/banner4.jpg",
      //   mobileImg: "https://assets.stylori.com/images/Static+Pages/Home+Page/Floral-collection-Mob.jpg",
      //   navigateUrl: "/floral-jewellery?sort=latest"
      // },

      // {
      //   img: " https://assets.stylori.com/images/Static+Pages/Home+Page/banner5.jpg",
      //   mobileImg: "https://assets.stylori.com/images/Static+Pages/Home+Page/halo-collection-mob.jpg",
      //   navigateUrl: "/jewellery-from+halo+collection"
      // },
      // {
      //   img: "https://assets.stylori.com/images/Static+Pages/Home+Page/harvest-campaign-web.png",
      //   mobileImg: "https://assets.stylori.com/images/Static+Pages/Home+Page/harvest-campaign-mob.png",
      //   navigateUrl: "jewellery?sort=bestseller"
      // },
    ],
    silverListingPageData: [
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Contemporary+main.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Contemporary+main.jpg",
        navigateUrl: "/silver-jewellery-contemporary",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Everyday+main.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Everyday+main.jpg",
        navigateUrl: "/silver-jewellery-everyday",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Folklore+main.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Folklore+main.jpg",
        navigateUrl: "/silver-jewellery-folklore",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Mudra+main.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Mudra+main.jpg",
        navigateUrl: "/silver-jewellery-dmudra",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Traditional+main.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Traditional+main.jpg",
        navigateUrl: "/silver-jewellery-traditional",
      },
    ],

    silverListingContemperoryPage: [
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Contemporary+main.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver+mob+Contemporary.jpg",
        navigateUrl: "#",
      },
    ],
    silverListingEverydayPage: [
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Everyday+main.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver+mob+Everyday.jpg",
        navigateUrl: "#",
      },
    ],
    silverListingFolklorePage: [
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Folklore+main.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver+mob+Foloklor.jpg",
        navigateUrl: "#",
      },
    ],
    silverListingMudraPage: [
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Mudra+main.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver+mob+Mudra.jpg",
        navigateUrl: "#",
      },
    ],
    silverListingTraditionalPage: [
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori-silver+Traditional+main.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver+mob+Traditional.jpg",
        navigateUrl: "#",
      },
    ],
    silverListingCskPage: [
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/NAC+CSK+Stylori+jewellery+bd.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/NAC+CSK+Stylori+jewellery+bm.jpg",
        navigateUrl: "#",
      },
    ],
    silverListingMuralCollection: [
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Banner/Stylori-silver-mural-jewellery-D.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Banner/Stylori-silver-mural-jewellery-D.jpg",
        navigateUrl: "#",
      },
    ],
    silverListingPageBottomData: [
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-Contemporary-Banner-web.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-Contemporary-Banner-mob.jpg",
        navigateUrl: "#",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-Everyday-Banner-web.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-Everyday-Banner-mob.jpg",
        navigateUrl: "#",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-Folklore-Banner-web.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-Folklore-Banner-mob.jpg",
        navigateUrl: "#",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-Mudra-Banner-web.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-Mudra-Banner-mob.jpg",
        navigateUrl: "#",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-Traditional-Banner-web.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-Traditional-Banner-mob.jpg",
        navigateUrl: "#",
      },
    ],
  },
  //-------------Grid 5 images ----------
  collectionGrid: [
    {
      img:
        "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-Monsoon-tile.jpg",
      navigateUrl: "/jewellery-from+monsoon+collection",
    },
    {
      img:
        "https://assets.stylori.com/images/Static+Pages/Home+Page/mangocollection.png",
      navigateUrl: "/jewellery-from+the+summer+collection?sort=latest",
    },
    {
      img:
        "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-Butterfly-tile-image.jpg",
      navigateUrl:
        "/jewellery-butterfly?sort=latest&amp;startprice=0&amp;endprice=0",
    },
    {
      img:
        "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori_+Daisy+Days.png",
      navigateUrl: "/jewellery-from+daisy+days+collection?sort=latest&page=4",
    },
    {
      img:
        "https://assets.stylori.com/images/Static+Pages/Home+Page/blush+3.png",
      navigateUrl: "/jewellery-blush",
    },
  ],
  //------------testimony container ----------------
  Testimony: {
    //--------testimony carousel----------------
    carousel: {
      setting: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade: false,
        autoplaySpeed: false,
        arrows: false,
        accessibility: true,
        centerMode: false,
        focusOnSelect: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: true,
        swipe: false,
      },
      data: [
        {
          imageTitle: "1 Gm Lakshmi Gold Coin - 24 K",
          img:
            "https://assets-cdn.stylori.com/200x200/images/product/SGC020/SGC020-1Y.jpg",
          navigateUrl: "/goldcoins",
          content:
            "Wowwww it's a great experience with stylori. Specially thanks to Bushra from customer service who help me to find a best product with detail explanation on each and every point of product. ",
          name: "Rajesh Tiwari",
          country: "India",
          price: "4472",
        },
        {
          imageTitle: "1 Gm Lakshmi Gold Coin - 24 K",
          img:
            "https://assets-cdn.stylori.com/200x200/images/product/SGC020/SGC020-1Y.jpg",
          navigateUrl: "/goldcoins",
          content:
            "Wowwww it's a great experience with stylori. Specially thanks to Bushra from customer service who help me to find a best product with detail explanation on each and every point of product. ",
          name: "Rajesh Tiwari",
          country: "India",
          price: "4472",
        },
        {
          imageTitle: "1 Gm Lakshmi Gold Coin - 24 K",
          img:
            "https://assets-cdn.stylori.com/200x200/images/product/SGC020/SGC020-1Y.jpg",
          navigateUrl: "/goldcoins",
          content:
            "Wowwww it's a great experience with stylori. Specially thanks to Bushra from customer service who help me to find a best product with detail explanation on each and every point of product. ",
          name: "Rajesh Tiwari",
          country: "India",
          price: "4472",
        },
        {
          imageTitle: "1 Gm Lakshmi Gold Coin - 24 K",
          img:
            "https://assets-cdn.stylori.com/200x200/images/product/SGC020/SGC020-1Y.jpg",
          navigateUrl: "/goldcoins",
          content:
            "Wowwww it's a great experience with stylori. Specially thanks to Bushra from customer service who help me to find a best product with detail explanation on each and every point of product. ",
          name: "Rajesh Tiwari",
          country: "India",
        },
        {
          imageTitle: "1 Gm Lakshmi Gold Coin - 24 K",
          img:
            "https://assets-cdn.stylori.com/200x200/images/product/SGC020/SGC020-1Y.jpg",
          navigateUrl: "/goldcoins",
          content:
            "Wowwww it's a great experience with stylori. Specially thanks to Bushra from customer service who help me to find a best product with detail explanation on each and every point of product. ",
          name: "Rajesh Tiwari",
          country: "India",
        },
      ],
    },
    //------testimony images section --------------
    bangleGrid: [
      {
        img:
          "https://assets.stylori.com/images/Static+Pages/Home+Page/PendantVertical.png",
        navigateUrl: "/pendants-jewellery?sort=latest",
      },
      {
        img:
          "https://assets.stylori.com/images/Static+Pages/Home+Page/BangleSquare.png",
        navigateUrl: "/bangles-jewellery?sort=latest",
      },
      {
        img:
          "https://assets.stylori.com/images/Static+Pages/Home+Page/EarringRectangle.png",
        navigateUrl: "/earrings-jewellery?sort=latest",
      },
      {
        img:
          "https://assets.stylori.com/images/Static+Pages/Home+Page/RingRectangle.png",
        navigateUrl: "/rings-jewellery?sort=latest",
      },
      {
        img:
          "https://assets.stylori.com/images/Static+Pages/Home+Page/nosepinSquare.png",
        navigateUrl: "/nose+pin+online-jewellery?sort=featured",
      },
    ],
  },
  //-----------newsfeed container---------------
  NewsFeeds: {
    carousel: {
      setting: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        arrowsImg: true,
        autoplay: false,
        autoplaySpeed: 4000,
        accessibility: true,
        centerMode: false,
        focusOnSelect: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: true,
        swipe: false,
      },
      data: [
        {
          img:
            "https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg",
          content:
            "The launch  on New Indian rnegj o9 ijrgerhje regb  ovrtfbviehr evoireuhvgrv phefgvor pvpoervr gherun8ijiExpress – Indulge",
        },
        {
          img:
            "https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg",
          content: "The launch of  Express – Indulge",
        },

        {
          img:
            "https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg",
          content: "The launch of Stylori on New Indian Express – Indulge",
        },
        {
          img:
            "https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg",
          content: "The launch of Stylori on New Indian Express – Indulge",
        },
        {
          img:
            "https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg",
          content: "The launch of Stylori on New Indian Express – Indulge",
        },
        {
          img:
            "https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg",
          content: "The launch of Stylori on New Indian Express – Indulge",
        },
        {
          img:
            "https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg",
          content: "The launch of Stylori on New Indian Express – Indulge",
        },
      ],
    },
  },
  //---------------------stories container -------------------
  Stories: {
    carousel: {
      setting: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade: false,
        autoplaySpeed: false,
        arrows: false,
        accessibility: true,
        centerMode: false,
        focusOnSelect: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: true,
        swipe: false,
      },
      data: [
        {
          Title: "Celebrity Wedding Season:  best",
          img:
            "https://alpha-assets.sdfsdfstylori.com/images/ssdftories/stylori_blog_cover_01_bollywood_buck.png",
          navigateUrl: "/pendants-jewellery?sort=latest",
          content:
            "Thanks for your very good product. A real value for a beautiful workmanship.Thanks for your very good product. A real value for a beautiful workmanship.",
        },
        {
          Title: "Celebrity Wedding Season: Style lessons from the best",
          img:
            "https://alsdfpha-assetssdfsdf.stylori.com/images/stories/stylori_blog_cover_01_bollywood_buck.png",
          navigateUrl: "/pendants-jewellery?sort=latest",
          content:
            "Thanks for your very good product. A real value for a beautiful workmanship.Thanks for your very good product. A real value for a beautiful workmanship.",
        },
        {
          Title: "Celebrity Wedding Season: Style lessons from the best",
          img:
            "htxcftps://alpha-assets.stylsdfsdori.com/images/stories/stylori_blog_cover_01_bollywood_buck.png",
          navigateUrl: "/pendants-jewellery?sort=latest",
          content:
            "Thanks for your very good product. A real value for a beautiful workmanship.Thanks for your very good product. A real value for a beautiful workmanship.",
        },
        {
          Title: "Celebrity Wedding Season: Style lessons from the best",
          img:
            "hgfdcom/images/stories/stylori_blog_cover_01_bollywood_buck.png",
          navigateUrl: "/pendants-jewellery?sort=latest",
          content:
            "Thanks for your very good product. A real value for a beautiful workmanship.Thanks for your very good product. A real value for a beautiful workmanship.",
        },
      ],
    },
  },
};
