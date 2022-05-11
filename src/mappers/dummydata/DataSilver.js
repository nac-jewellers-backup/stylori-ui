import img1 from "../../assets/img1ProductModal.jpg";
import img2 from "../../assets/img2ProductModal.jpg";
import img3 from "../../assets/img3ProductModal.jpg";
import img4 from "../../assets/img4ProductModal.jpg";
import topPicksOne from "../../assets/topPicksOne.jpg";
import topPicksTwo from "../../assets/topPicksTwo.jpg";
import topPicksThree from "../../assets/topPicksThree.jpg";
import topPicksFour from "../../assets/topPicksFour.jpg";
const topPicksFive = "https://assets-cdn.stylori.com/552x276/images/homepage/Stylori_ Daisy Days.jpg";
//first banner image
export const carouselTop = [
  {
    settings: {
      dots: false,
      infinite: false,
      autoplay: true,
      infinite: true,
      speed: 2000,
      fade: false,
      arrows: false,
      arrowsImg: false,
      dotsClass: "slickdev",
      accessibility: false,
      centerMode: false,
      focusOnSelect: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      pauseOnFocus: false,
      swipe: false,
    },
    images: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Banner/mudra-2021-web.jpg",
        mobileImg: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Banner/mudra-2021-mob.jpg",
        navigateUrl: "https://www.stylori.com/silver-jewellery-dmudra?sort=New%20to%20Stylori&startprice=0&endprice=0",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Stylri+silver+traditional+jewellery+web.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Stylri+silver+traditional+jewellery+mob.jpg",
        navigateUrl: "https://www.stylori.com/silver-jewellery-traditional?sort=New%20to%20Stylori&startprice=0&endprice=0",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/SIlver-Pearl-Collection-Banner-w.jpg",
        mobileImg:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/SIlver-Pearl-Collection-Banner-m.jpg",
        navigateUrl: "https://www.stylori.com/silver-jewellery-baroque+whites+collection",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/StyloriSilver-Jewellery-cz-w.jpg",
        mobileImg: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/StyloriSilver-Jewellery-cz-m.jpg",
        navigateUrl: "https://www.stylori.com/swarovski+cz-silver-jewellery",
      },

      // {
      //   img:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Stylori-Silver-jewellery-free+ship+web.jpg	",
      //   mobileImg:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Stylori-Silver-jewellery-free+ship+mob.jpg",
      //   navigateUrl: "https://www.stylori.com/silver-jewellery",
      // },
      // {
      //   img:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/1920X656-Traditional-Banner_Stylori-Silver.jpg	",
      //   mobileImg:
      //     "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/805X430-Traditional-Banner_Stylori-Silver.jpg",
      //   navigateUrl: "https://www.stylori.com/silver-jewellery-traditional",
      // },
    ],
    content:
      "Stylori Silver, from NAC Jewellers, is a brand of exclusive silver Jewellery for the modern woman. From dainty Everyday styles to dressy Folklore pieces, Stylori Silver Offers you hypo allergenic and stylish designs to match your versatile taste.",
  },
];

//square images
export const fadeImagessublist = [
  {
    img: `${img1}`,
    title: "EVERYDAY",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    price: "98.89789",
  },
  {
    img: `${img2}`,
    title: "FOLKLORE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    price: "98.89789",
  },
  {
    img: `${img3}`,
    title: "CONTEMPORARY",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    price: "98.89789",
  },
  {
    img: `${img4}`,
    title: "TRADITIONAL",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    price: "98.89789",
  },
];
//title for divider
export const titleContiner = ["TOP PICKS", "FEATURED", "TESTIMONIALS"];
//top pic container
export const TopPicksimages = [
  {
    img: topPicksOne,
    title: "Pretty Adonments Silver Pendant",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    price: "5800",
  },
  {
    img: topPicksTwo,
    title: "FOLKLORE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    price: "3200",
  },
  {
    img: topPicksThree,
    title: "CONTEMPORARY",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    price: "2000",
  },
  {
    img: topPicksFour,
    title: "TRADITIONAL",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    price: "800",
  },
  {
    img: topPicksFive,
    title: "TRADITIONAL",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    price: "900",
  },
];
export const collectionGrid = [
  {
    img: "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori-ring-tile.webp",
    navigateUrl: "/rings-jewellery?sort=latest",
  },
  {
    img: "https://assets.stylori.com/images/Static+Pages/Home+Page/mangocollection.webp",
    navigateUrl: "/jewellery-from+the+summer+collection?sort=latest",
  },
  {
    img: "https://assets.stylori.com/images/Static+Pages/Home+Page/Hallo+Collection_Website-01.webp",
    navigateUrl: "/jewellery-from+halo+collection",
  },
  {
    img: "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori_+Daisy+Days.webp",
    navigateUrl: "/jewellery-from+daisy+days+collection?sort=latest&page=4",
  },
  {
    img: "https://assets.stylori.com/images/Static+Pages/Home+Page/blush+3.webp",
    navigateUrl: "/jewellery-blush",
  },
];
//feature container
export const FeaturedCarousel = [
  {
    settings: {
      dots: true,
      infinite: true,
      autoplay: false,
      speed: 2000,
      fade: false,
      arrows: false,
      dotsClass: "featureCarousel",
    },
    images: [
      {
        web: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/SIlver-Home-page-Featured.jpg",
        mob: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/featured-banner-mudra.jpg",
        url: "/silver-jewellery-dmudra",
      },
      // "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
      // "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
    ],
  },
];
//Testimony container
export const testimonyCarousel = [
  {
    settings: {
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 1000,
      fade: false,
      arrows: false,
      dotsClass: "featureCarousel",
    },
    images: [
      {
        Content:
          "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
        name: "Selvan",
        location: "Chennai",
      },
      {
        Content:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ",
        name: "Baskar",
        location: "Chennai",
      },
      {
        Content:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ",
        name: "Avinash avi",
        location: "Chennai",
      },
    ],
  },
];
