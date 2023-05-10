import priceImgFive from "../../assets/silverStylori/_x35_Bj5gv_6_.png";
import priceImgThree from "../../assets/silverStylori/_x35_Bj5gv_12_.png";
import priceImgFour from "../../assets/silverStylori/Group 23670.png";
import priceImgOne from "../../assets/silverStylori/uRk3vu_3_.png";
import priceImgTwo from "../../assets/silverStylori/VAuFXM_3_.png";

// ************
// HEADER DATA FOR STYLORI SILVER

// MOBILE views menu - LAYER 1
export const mainlist = [
  {
    name: "JEWELLERY",
    url: "/silver-jewellery",
  },
  // {
  //     name: "Silver",
  //     url: "/stylorisilver",
  // },
  {
    name: "STYLE",
    url: "/silver-cocktail-jewellery",
  },
  {
    name: "COLLECTIONS",
    url: "/silver-jewellery-from+loops+collection",
  },
  {
    name: "FINISH",
    url: "/silver-jewellery-traditional+kemp",
  },
  {
    name: "GIFTS",
    url: "#",
  },
  {
    name: "READY TO SHIP",
    url: "/silver-jewellery-shipping+in+1+day",
  },
  // {
  //   name: "CSK MERCHANDISE",
  //   url: "/silver-jewellery-csk+collection",
  // },
  {
    name: "VISIT STYLORI.COM",
    url: "/",
  },
];

/// MOBILE views submenu - LAYER 3
export const subheader = {
  "BRIDAL ACCESSORIES": {
    header: "BRIDAL ACCESSORIES",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori+silver+MAANG+TIKKA.jpg",
        content: "MAANG TIKKA",
        url: "/silver-maang+tikka-Bridal+Accessories-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori+silver++OODIYANAM.jpg",
        content: "OODIYANAM",
        url: "/silver-oddiyanam-bridal+accessories-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori+silver+ARMLET.jpg",
        content: "ARMLET",
        url: "/silver-armlet-bridal+accessories-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori+silver++HAIR+ORNAMENTS.jpg",
        content: "HAIR ORNAMENTS",
        url: "/silver-hair+ornaments-bridal+accessories-jewellery",
      },
      {
        style: [
          {
            name: "Folklore",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Bridal-Accessory-Folklore.jpg",
            url: "/silver-bridal+accessories-jewellery-folklore",
          },
          {
            name: "Traditional",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Bridal-Accessory-Traditional.jpg",
            url: "/silver-bridal+accessories-jewellery-traditional",
          },
          {
            name: "Mudra",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Bridal-Accessory-Dmudra.jpg",
            url: "/silver-bridal+accessories-jewellery-dmudra",
          },
        ],
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
        style: val.style,
      };
    }),
  },
  EARRINGS: {
    header: "EARRINGS",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/STUDS.webp",
        content: "STUDS",
        url: "/silver-studs-earrings-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/JHUMKAS.webp",
        content: "JHUMKAS",
        url: "/silver-jhumkas+online-earrings-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/DANGLERS+%26+DROPS.webp",
        content: "DANGLERS & DROPS",
        url: "/silver-danglers+drops-earrings-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/HOOKS.webp",
        content: "HOOKS & HOOPS",
        url: "/silver-hooks+hoops-earrings-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/EAR+CUFFS.webp",
        content: "EAR CUFFS",
        url: "/silver-ear+cuffs-earrings-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/CHANDBALI.webp",
        content: "CHANDBALI",
        url: "/silver-chandbali-earrings-jewellery",
      },
      {
        style: [
          {
            name: "Everyday",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Earring-Everyday.jpg",
            url: "/silver-earrings-jewellery-everyday",
          },
          {
            name: "Folklore",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Earring-Folklore.jpg",
            url: "/silver-earrings-jewellery-folklore",
          },
          {
            name: "Contemperory",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Earring-Contemprory.jpg",
            url: "/silver-earrings-jewellery-contemporary",
          },
          {
            name: "Traditional",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Earring-Traditional.jpg",
            url: "/silver-earrings-jewellery-traditional",
          },
          {
            name: "Mudra",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Earring-Dmudra.jpg",
            url: "/silver-earrings-jewellery-dmudra",
          },
        ],
      },
      {
        TextPrice: [
          {
            name: "Under 1500",
            url: "/silver-earrings-jewellery?startprice=0&endprice=1500",
          },
          {
            name: "1001 - 3000",
            url: "/silver-earrings-jewellery?startprice=1001&endprice=3000",
          },
          {
            name: "3001 - 5000",
            url: "/silver-earrings-jewellery?startprice=3001&endprice=5000",
          },
          {
            name: "More than 5001",
            url: "/silver-earrings-jewellery?startprice=5001&endprice=100000",
          },
        ],
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
        style: val.style,
        TextPrice: val.TextPrice,
      };
    }),
  },

  NECKLACE: {
    header: "NECKLACE",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/CHOKERS.webp",
        name: "CHOKERS",
        url: "/silver-chokers-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/SINGLE+LINE+NECKLACES.webp",
        name: "SINGLE LINE NECKLACES",
        url: "/silver-single+line+necklaces-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/PENDANT+NECKLACES.webp",
        name: "PENDANT NECKLACES",
        url: "/silver-pendant+necklaces-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/STATEMENT+NECKLACES+LONG.webp",
        name: "STATEMENT NECKLACES",
        url: "/silver-statement+necklaces-jewellery",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/LAYERED+NECKLACES.webp",
        name: "LAYERED NECKLACES",
        url: "/silver-layered+necklaces-jewellery",
      },
      {
        style: [
          {
            name: "Everyday",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Necklace-Everyday.jpg",
            url: "/silver-necklaces-jewellery-everyday",
          },
          {
            name: "Folklore",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Necklace-Folklore.jpg",
            url: "/silver-necklaces-jewellery-folklore",
          },
          {
            name: "Contemperory",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Necklace-Contemprory.jpg",
            url: "/silver-necklaces-jewellery-contemporary",
          },
          {
            name: "Traditional",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Necklace-Traditional.jpg",
            url: "/silver-necklaces-jewellery-traditional",
          },
          {
            name: "Mudra",
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Necklace-Dmudra.jpg",
            url: "/silver-necklaces-jewellery-dmudra",
          },
        ],
      },
      {
        TextPrice: [
          {
            name: "Under 1500",
            url: "/silver-necklaces-jewellery?startprice=0&endprice=1500",
          },
          {
            name: "1001 - 3000",
            url: "/silver-necklaces-jewellery?startprice=1001&endprice=3000",
          },
          {
            name: "3001 - 5000",
            url: "/silver-necklaces-jewellery?startprice=3001&endprice=5000",
          },
          {
            name: "More than 5001",
            url: "/silver-necklaces-jewellery?startprice=5001&endprice=100000",
          },
        ],
      },
    ],
  },
  Rings: {
    header: "Rings",
    name: [
      {
        name: "Classic",
        url: "/classic-rings-jewellery",
      },
      {
        name: "Casual",
        url: "/casual-rings-jewellery",
      },
      {
        name: "Cocktail",
        url: "/cocktail-rings-jewellery",
      },
      {
        name: "Engagement",
        url: "/rings-jewellery-for+engagement",
      },
      {
        name: "Fashion",
        url: "/fashion-rings-jewellery",
      },
      {
        name: "Men's Ring",
        url: "/rings-jewellery-for+men",
      },
    ],
  },
  Bangle: {
    header: "Bangle",
    name: [
      {
        name: "Classic",
        url: "/classic-nose+pin+online-jewellery",
      },
      {
        name: "Fashion",
        url: "/fashion-nose+pin+online-jewellery",
      },
      {
        name: "Stud Nose Pin",
        url: "/nose+studs+online-jewellery",
      },
    ],
  },
  BRACELETS: {
    header: "BRACELETS",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/CHAIN+BRACELETS.webp",
        content: "CHAIN BRACELETS",
        url: "/silver-bracelets-jewellery",
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },

  "Nose Pins": {
    header: "Nose Pins",
    name: [
      {
        name: "Classic",
        url: "/classic-nose+pin+online-jewellery",
      },
      {
        name: "Fashion",
        url: "/fashion-nose+pin+online-jewellery",
      },
      {
        name: "Stud Nose Pin",
        url: "/nose+studs+online-jewellery",
      },
    ],
  },
  "Bangles & Bracelets": {
    header: "Bangles Bracelets",
    name: [
      {
        name: "Bangles",
        url: "/bangles-jewellery",
      },
      {
        name: "Bracelets",
        url: "/bracelets-jewellery",
      },
      {
        name: "Oval Bracelets",
        url: "/oval+bracelets-jewellery",
      },
    ],
  },
  // 'By Price': {
  //     header: 'By Price',
  //     name: [
  //         {
  //             name: 'Under Rs 5000',
  //             url: "/jewellery?startprice=1000&endprice=5000"
  //         }, {
  //             name: 'Rs 5000 - Rs 10000',
  //             url: "/jewellery?startprice=5000&endprice=10000"
  //         }, {
  //             name: 'Rs 10000 - Rs 20000',
  //             url: "/jewellery?startprice=10000&endprice=20000"
  //         }, {
  //             name: 'Above Rs 20000',
  //             url: "/jewellery?startprice=10000&endprice=20000"
  //         },
  //     ]
  // },

  "By Finish": {
    header: "By Finish",
    name: [
      {
        name: "Oxidised",
        url: "/oxidised-silver-jewellery",
      },
      {
        name: "Gold",
        url: "/gold-plain+gold-silver-jewellery",
      },
      {
        name: "Rose Gold",
        url: "/rose+gold-rose-silver-jewellery",
      },
      {
        name: "Dual tone",
        url: "/dual+tone-silver-jewellery",
      },
    ],
  },

  Traditional: {
    header: "Traditional",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/TRADITIONAL/Jped+Web/BANGLE.jpg",
        content: "Bangles",
        url: "/silver-bangles-jewellery-traditional",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T+Bracelets.jpg",
        content: "Bracelets",
        url: "/silver-bracelets-jewellery-traditional",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-B-accessories.jpg",
        content: "Bridal Accessories",
        url: "/silver-bridal+accessories-jewellery-traditional",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/TRADITIONAL/Jped+Web/EARRING.jpg",
        content: "Earrings",
        url: "/silver-earrings-jewellery-traditional",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-L-necklace.jpg",
        content: "Long Necklace",
        url: "/silver-long+necklace-jewellery-traditional",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-Nosepin.jpg",
        content: "Nosepin",
        url: "/silver-nose+pin+online-jewellery-traditional",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-pendant.jpg",
        content: "Pendant",
        url: "/silver-pendants-jewellery-traditional",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-rind.jpg",
        content: "Rings",
        url: "/silver-rings-jewellery-traditional",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-s-Necklace.jpg",
        content: "Short Necklace",
        url: "/silver-short+necklace-jewellery-traditional",
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },
  Folklore: {
    header: "Folklore",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/BANGLE.jpg",
        content: "Bangles",
        url: "/silver-bangles-jewellery-Folklore",
      },

      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-B-Accessories.jpg",
        content: "Bridal Accessories",
        url: "/silver-Bridal%20Accessories-jewellery-folklore",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/EARRING.jpg",
        content: "Earrings",
        url: "/silver-earrings-jewellery-folklore",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-L-Necklace.jpg",
        content: "Long Necklace",
        url: "/silver-long+necklace-jewellery-folklore",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/BANGLE.webp",
        content: "Nosepin",
        url: "/silver-nose+pin+online-jewellery-folklore",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-Nosepin.jpg",
        content: "Others",
        url: "/silver-others-jewellery-folklore",
      },

      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-pendant.jpg",
        content: "Pendant",
        url: "/silver-pendants-jewellery-folklore",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/Ring.jpg",
        content: "Rings",
        url: "/silver-rings-jewellery-folklore",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-S-necklace.jpg",
        content: "Short Necklace",
        url: "/silver-short+necklace-jewellery-folklore",
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },
  Contemporary: {
    header: "Contemporary",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/BANGLE.jpg",
        content: "Bangles",
        url: "/silver-bangles-jewellery-contemporary",
      },

      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/C-bracelets.jpg",
        content: "Bracelets",
        url: "/silver-bangles-jewellery-contemporary",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/EARRING.jpg",
        content: "Earrings",
        url: "/silver-earrings-jewellery-contemporary",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/C-L-necklace.jpg",
        content: "Long Necklace",
        url: "/silver-long+necklace-jewellery-contemporary",
      },

      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/C-s-necklace.jpg",
        content: "Short Necklace",
        url: "/silver-short+necklace-jewellery-contemporary",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/C-pendant.jpg",
        content: "Pendants",
        url: "/silver-pendants-jewellery-contemporary",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/RING.jpg",
        content: "Rings",
        url: "/silver-rings-jewellery-contemporary",
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },
  Everyday: {
    header: "Everyday",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/E-s-Necklace.jpg",
        content: "Short Necklace",
        url: "/silver-short+necklace-jewellery-everyday",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/EVERYDAY/Jped+Web/EARRING.jpg",
        content: "Earring",
        url: "/silver-earrings-jewellery-everyday",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/EVERYDAY/Jped+Web/RING.jpg",
        content: "Rings",
        url: "/silver-rings-jewellery-everyday",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/E-pendant.jpg",
        content: "Pendants",
        url: "/silver-pendants-jewellery-everyday",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/E-bracelets.jpg",
        content: "Bracelets",
        url: "/silver-bracelets-jewellery-everyday",
      },
      // {
      //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/EARRING.webp",
      //     "content": "Ankletes",
      //     "url": "/silver-rings-jewellery-everyday",
      // },
      // {
      //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/BANGLE.webp",
      //     "content": "Bangles",
      //     "url": "#",
      // },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },
  "D Mudra": {
    header: "D Mudra",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/MUDRA/Jped+Web/EARRING.jpg",
        content: "Earrings",
        url: "/silver-earrings-jewellery-dmudra",
      },

      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/D-L-necklace.jpg",
        content: "Long Necklace",
        url: "/silver-long+necklace-jewellery-dmudra",
      },

      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/D-s-necklace.jpg",
        content: "Short Necklace",
        url: "/silver-short+necklace-jewellery-dmudra",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/D-b-Accessories.jpg",
        content: "Bridal Accessories",
        url: "/silver-bridal+accessories-jewellery-dmudra",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/D-others.jpg",
        content: "Others",
        url: "/silver-others-jewellery-dmudra",
      },

      // {
      //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/EARRING.webp",
      //     "content": "Rings",
      //     "url": "/silver-rings-jewellery-everyday",
      // },
      // {
      //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/EARRING.webp",
      //     "content": "Nose pin",
      //     "url": "/silver-rings-jewellery-everyday",
      // },
      // {
      //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/EARRING.webp",
      //     "content": "Ankletes",
      //     "url": "/silver-rings-jewellery-everyday",
      // },
      // {
      //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/BANGLE.webp",
      //     "content": "Bangles",
      //     "url": "#",
      // },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },

  "By Price": {
    header: "",
    name: [
      {
        content: "Under 1500",
        url: "/silver-jewellery?startprice=0&endprice=1500",
      },
      {
        content: "1001 - 3000",
        url: "/silver-jewellery?startprice=1001&endprice=3000",
      },
      {
        content: "3001 - 5000",
        url: "/silver-jewellery?startprice=3001&endprice=5000",
      },
      {
        content: "More Then 5000",
        url: "/silver-jewellery?startprice=5001&endprice=100000",
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },
  "By Jewellery": {
    header: "",
    name: [
      {
        content: "Necklace",
        url: "/silver-necklaces-jewellery",
      },
      {
        content: "Earrings",
        url: "/silver-earrings-jewellery",
      },
      {
        content: "Bangles",
        url: "/silver-bangles-jewellery",
      },
      {
        content: "Bracelets",
        url: "/silver-bracelets-jewellery",
      },
      {
        content: "Rings",
        url: "/silver-rings-jewellery",
      },
      // {
      //     "content": "Sets",
      //     "url": "#"
      // },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },
  "By Gender": {
    header: "",
    name: [
      {
        content: "For Him",
        url: "/silver-jewellery-for+men",
      },
      {
        content: "For Her",
        url: "/silver-jewellery-for+women",
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },
  "By Collections": {
    header: "By Collections",
    name: [
      {
        name: "Carve",
        url: "/jewellery-from+the+carve+collection?sort=latest",
      },
      {
        name: "Blush",
        url: "/jewellery-blush",
      },
      {
        name: "Molecute",
        url: "/jewellery-molecute+collection",
      },
      {
        name: "Gemstone",
        url: "/gemstone-jewellery?sort=latest",
      },
      {
        name: "Mistletoe",
        url: "/jewellery-from+mistletoe+collection",
      },
      {
        name: "The Renaissance",
        url: "/jewellery-from+the+renaissance+collection",
      },
      {
        name: "Monsoon",
        url: "/jewellery-from+monsoon+collection",
      },
      {
        name: "Summer",
        url: "/jewellery-from+the+summer+collection",
      },
    ],
  },
  "By Material": {
    header: "By Material",
    name: [
      {
        name: "Diamond",
        url: "/diamond-jewellery",
      },
      {
        name: "Gemstone",
        url: "/gemstone-jewellery",
      },
      {
        name: "Solitaire",
        url: "/solitaire-jewellery",
      },
    ],
  },
  "Silver Jewellery": {
    header: "Silver Jewellery",
    name: [
      {
        name: "Earrings",
        url: "stylori.net/silver-earrings-jewellery",
      },
      {
        name: "Rings",
        url: "stylori.net/silver-rings-jewellery",
      },
      {
        name: "Pendants",
        url: "stylori.net/silver-pendants-jewellery",
      },
    ],
  },
  "By design": {
    header: "By design",
    name: [
      {
        name: "Plain",
        url: "/plain-goldcoins",
      },
      {
        name: "Lakshmi",
        url: "/lakshmi-goldcoins",
      },
      {
        name: "Jesus",
        url: "/jesus-goldcoins",
      },
      {
        name: "Ganesh",
        url: "/ganesha-goldcoins",
      },
      {
        name: "Balaji ",
        url: "/balaji-goldcoins",
      },
    ],
  },
  "By Weight": {
    header: "By Weight",
    name: [
      {
        name: "1 Gram",
        url: "/1gm-goldcoins",
      },
      {
        name: "4 Grams",
        url: "/4gms-goldcoins",
      },
      {
        name: "8 Grams",
        url: "/8gms-goldcoins",
      },
      {
        name: "10 Grams",
        url: "/10gms-goldcoins",
      },
      {
        name: "20 Grams",
        url: "/20gms-goldcoins",
      },
      {
        name: "50 Grams",
        url: "/50gms-goldcoins",
      },
    ],
  },
  "By Purity": {
    header: "By Purity",
    name: [
      {
        name: "24 KT",
        url: "/24kt-goldcoins",
      },
      // {
      //     name: '22 KT',
      //     url: "/22kt-goldcoins"
      // },
    ],
  },

  "By Theme": {
    header: "By Theme",
    name: [
      {
        name: "Carve",
        url: "/jewellery-from+the+carve+collection?sort=latest",
      },
      {
        name: "Cluster",
        url: "/cluster-jewellery",
      },
      {
        name: "Droplets",
        url: "/droplets-jewellery",
      },
      {
        name: "Waves",
        url: "/waves-jewellery",
      },
      {
        name: "Floral",
        url: "/floral-jewellery",
      },
      {
        name: "Hearts",
        url: "/hearts-jewellery",
      },
      {
        name: "Tiara",
        url: "/tiara-jewellery",
      },
      {
        name: "Hoops",
        url: "/hoops-jewellery",
      },
    ],
  },

  // StarStruck: {
  //   header: "StarStruck",
  //   name: [
  //     {
  //       img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Star.jpg",
  //       content: "StarStruck",
  //       url: "/silver-jewellery-starstruck+collection",
  //     },
  //   ].map((val) => {
  //     return {
  //       name: val.content,
  //       url: val.url,
  //       img: val.img,
  //     };
  //   }),
  // },

  // "Baroque Whites Collection": {
  //   header: "Baroque Whites Collection",
  //   name: [
  //     {
  //       img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Pearl.jpg",
  //       content: "Baroque Whites Collection",
  //       url: "/silver-jewellery-baroque+whites+collection",
  //     },
  //   ].map((val) => {
  //     return {
  //       name: val.content,
  //       url: val.url,
  //       img: val.img,
  //     };
  //   }),
  // },
  // "In love Collection": {
  //   header: "In love Collection",
  //   name: [
  //     {
  //       img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Inlove.jpg",
  //       content: "In love Collection",
  //       url: "/silver-jewellery-inlovecollection",
  //     },
  //   ].map((val) => {
  //     return {
  //       name: val.content,
  //       url: val.url,
  //       img: val.img,
  //     };
  //   }),
  // },
};

//layer 2 named jewellery MOBILE
export const Jewellery = {
  JEWELLERY: {
    NewArrivals: {
      name: "NEW ARRIVALS",
      url: "/silver-jewellery?sort=New%20to%20Stylori&startprice=0&endprice=0",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
    },

    Necklace: {
      name: "NECKLACE",
      url: "/silver-necklaces-jewellery",
      icon: "",
    },
    Earrings: {
      name: "EARRINGS",
      url: "/silver-earrings-jewellery",
      icon: "",
    },
    Rings: {
      name: "RINGS",
      url: "/silver-rings-jewellery",
      icon: "",
    },
    Bangle: {
      name: "BANGLE",
      url: "/silver-bangles-jewellery",
      icon: "",
    },
    BRACELETS: {
      name: "BRACELETS",
      url: "/silver-bracelets-jewellery",
      icon: "",
    },
    bridalAccessories: {
      name: "BRIDAL ACCESSORIES",
      url: "/silver-bridal+accessories-jewellery",
      icon: "",
    },
    NosePins: {
      name: "NOSE PINS",
      url: "/silver-nose+pin+online-jewellery",
      icon: "",
    },
    MensCollection: {
      name: "MEN'S COLLECTION",
      url: "/silver-jewellery-for+men",
      icon: "",
    },
    Idols: {
      name: "IDOL's",
      url: "https://www.stylori.com/idols-silver-jewellery",
      icon: "",
    },
    BestSellers: {
      name: "BEST SELLERS",
      url: "/silver-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
      icon: "",
    },
    ByPrice: {
      name: "By Price",
      url: "#",
      icon: "",
    },
    ByCollections: {
      name: "By Collections",
      url: "/pages/collections",
      icon: "",
    },
    ByFinish: {
      name: "By Finish",
      url: "#",
      icon: "",
    },
  },

  COLLECTIONS: {
    "Concentric Collection": {
      name: "Concentric Collection",
      url: "https://www.stylori.com/silver-jewellery-concentric+collection",
      icon: "",
    },
    "Akruti Collection": {
      name: "Akruti Collection",
      url: "https://www.stylori.com/silver-jewellery-akruti+collection",
      icon: "",
    },
    "Elemental Collection": {
      name: "Elemental Collection",
      url: "https://www.stylori.com/silver-jewellery-elemental+collection",
      icon: "",
    },
    "Mural Collection": {
      name: "Mural Collection",
      url: "https://www.stylori.com/silver-jewellery-mural+collection",
      icon: "",
    },
    "In love Collection": {
      name: "In love Collection",
      url: "https://www.stylori.com/silver-jewellery-inlovecollection",
      icon: "",
    },
    StarStruck: {
      name: "StarStruck",
      url: "https://www.stylori.com/silver-jewellery-starstruck+collection",
      icon: "",
    },
    "Baroque Whites Collection": {
      name: "Baroque Whites Collection",
      url: "https://www.stylori.com/silver-jewellery-baroque+whites+collection",
      icon: "",
    },
    "Paavai Collection": {
      name: "Paavai Collection",
      url: "https://www.stylori.com/silver-paavai-jewellery",
      icon: "",
    },
  },

  FINISH: {
      Victorian: {
        name: "Victorian",
        icon: "",
        url: " https://www.stylori.com/silver-jewellery-victorian",
      },
      "Gold Plated Kundan": {
        name: "Gold Plated Kundan",
        icon: "",
        url: "https://www.stylori.com/silver-jewellery-gold+plated+kundan",
      },
      "Gold Plated Kemp": {
        name: "Gold Plated Kemp",
        icon: "",
        url: " https://www.stylori.com/silver-jewellery-gold+plated+kemp",
      },
      "Deep Nagas & Kundan": {
        name: "Deep Nagas & Kundan",
        icon: "",
        url: " https://www.stylori.com/silver-jewellery-deep+nagas+kundan",
      },
      "Nagas/Nakshi": {
        name: "Nagas/Nakshi",
        icon: "",
        url: " https://www.stylori.com/silver-jewellery-nagas+nakshi",
      },
      "Beads & Pearl Jewellery": {
        name: "Beads & Pearl Jewellery",
        icon: "",
        url: " https://www.stylori.com/silver-jewellery-beads+pearl+jewellery",
      },
      "Cubic Zircon/Swarovski Jewellery": {
        name: "Cubic Zircon/Swarovski Jewellery",
        icon: "",
        url: " https://www.stylori.com/silver-jewellery-cubiczircon+swarovski",
      },
      "Studded Jewellery": {
        name: "Studded Jewellery",
        icon: "",
        url: "https://www.stylori.com/silver-jewellery-studded+jewellery",
      },
      "Rose gold": {
        name: "Rose gold",
        icon: "",
        url: "https://www.stylori.com/silver-jewellery-rose+gold+finish",
      },
      "Oxidised":{
        name: "Oxidised",
        icon: "",
        url: "https://www.stylori.com/silver-jewellery-oxidised+finish",
      },
      "Dual Tone":{
        name: "Dual Tone",
        icon: "",
        url: " https://www.stylori.com/silver-jewellery-dual+tone+finish",
      },
      "Others": {
        name: "Others",
        icon: "",
        url: "https://www.stylori.com/silver-jewellery-finish+others",
      },
  },


  STYLE: {
    Traditional: {
      name: "Traditional",
      url: "/silver-jewellery-traditional",
      icon: "",
    },
    Folklore: {
      name: "Folklore",
      url: "/silver-jewellery-folklore",
      icon: "",
    },
    Contemporary: {
      name: "Contemporary",
      url: "/silver-jewellery-contemporary",
      icon: "",
    },
    Everyday: {
      name: "Everyday",
      url: "/silver-jewellery-everyday",
      icon: "",
    },
    DMudra: {
      name: "D Mudra",
      url: "/silver-jewellery-dmudra",
      icon: "",
    },
  },

  GIFTS: {
    ByPrice: {
      name: "By Price",
      url: "#",
      icon: "",
    },
    ByJewellery: {
      name: "By Jewellery",
      url: "#",
      icon: "",
    },
    ByGender: {
      name: "By Gender",
      url: "#",
      icon: "",
    },
    ByGiftVoucher: {
      name: "Gift Voucher",
      url: "/silver-voucher-jewellery",
      icon: "",
    },
  },
  Collections: {
    ByCollections: {
      name: "By Collections",
      url: "#",
      icon: "",
    },
    ByTheme: {
      name: "By Theme",
      url: "#",
      icon: "",
    },
  },
  // "My Account": {
  //     Login: {
  //         name: 'Login',
  //         url: "#",
  //         icon: ""
  //     },
  //     Register: {
  //         name: 'Register',
  //         url: "#",
  //         icon: ""
  //     }
  // },
};

//DESKTOP views
export const menuListHeader = [
  {
    title: "JEWELLERY",
    url: "/silver-jewellery",
  },
  // {
  //     title: "Silver",
  //     url: "/stylorisilver",
  // },
  {
    title: "STYLE",
    url: "/silver-cocktail-jewellery",
  },
  {
    title: "FINISH",
    url: "/silver-jewellery-traditional+kemp",
  },
  {
    title: "COLLECTIONS",
    url: "/silver-jewellery-from+loops+collection",
  },
  {
    title: "GIFTS",
    url: "#",
  },

  {
    title: "READY TO SHIP",
    url: "/silver-jewellery-shipping+in+1+day",
  },
  {
    title: "VISIT STYLORI.COM",
    url: "/",
  },
  // { title: 'STORIES', url: "/stories" }
];

//DESKTOP  List header hover -  LAYER 3
export const menuLists = {
  JEWELLERY: {
    //----SUBLAYER1 ------
    menuOne: [
      {
        value: "newarrivals",
        title: "New Arrivals",
        url: "/silver-jewellery?sort=New%20to%20Stylori&startprice=0&endprice=0",
        // imgContainer: {

        //     //-----------LAYER 3--------
        //     "imageContainer": [
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Studs+Earrings+Stylori-01.png",
        //             "content": "Studs",
        //             "url": "/studs-earrings-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Drops+Earrings+Stylori-02.png",
        //             "content": "Drops",
        //             "url": "/drops-earrings-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Earcuffs+Earrings+Stylori-03.png",
        //             "content": "Earcuffs",
        //             "url": "/ear+cuffs-earrings-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Huggies+Earrings+Stylori-04.png",
        //             "content": "Huggies",
        //             "url": "/huggies-earrings-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Jhumkas+Earrings+Stylori-05.png",
        //             "content": "Jhumkas",
        //             "url": "/jhumkas+online-earrings-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Ear+Jackets+Earrings+Stylori-06.png",
        //             "content": "Ear Jacket",
        //             "url": "/ear+jacket-earrings-jewellery",
        //         },
        //     ]
        // }
      },

      {
        value: "necklace",
        title: "NECKLACE",
        url: "/silver-necklaces-jewellery",
        imgContainer: {
          bigImage: {
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu-Dropdown-Images---Necklace.jpg",
            content: "CHOKERS",
            url: "/silver-necklace-jewellery",
          },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/CHOKERS.webp",
              content: "CHOKERS",
              url: "/silver-chokers-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/SINGLE+LINE+NECKLACES.webp",
              content: "SINGLE LINE NECKLACES",
              url: "/silver-single+line+necklaces-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/PENDANT+NECKLACES.webp",
              content: "PENDANT NECKLACES",
              url: "/silver-pendant+necklaces-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/STATEMENT+NECKLACES+LONG.webp",
              content: "STATEMENT NECKLACES",
              url: "/silver-statement+necklaces-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/LAYERED+NECKLACES.webp",
              content: "LAYERED NECKLACES",
              url: "/silver-layered+necklaces-jewellery",
            },
            // {
            //     "img": "https://assets-cdn.stylori.com/296x296/images/product/SR0201/SR0201-1YW.jpg",
            //     "content": "Men's Ring",
            //     "url": "/rings-jewellery-for+men",
            // },
          ],
        },
      },
      {
        value: "earrings",
        title: "Earrings",
        url: "/silver-earrings-jewellery",
        imgContainer: {
          bigImage: {
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu-Dropdown-Images---Earrings.jpg",
            content: "CHOKERS",
            url: "/silver-earrings-jewellery",
          },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/STUDS.webp",
              content: "STUDS",
              url: "/silver-studs-earrings-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/JHUMKAS.webp",
              content: "JHUMKAS",
              url: "/silver-jhumkas+online-earrings-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/DANGLERS+%26+DROPS.webp",
              content: "DANGLERS & DROPS",
              url: "/silver-danglers+drops-earrings-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/HOOKS.webp",
              content: "HOOKS & HOOPS",
              url: "/silver-hooks+hoops-earrings-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/EAR+CUFFS.webp",
              content: "EAR CUFFS",
              url: "/silver-ear+cuffs-earrings-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/CHANDBALI.webp",
              content: "CHANDBALI",
              url: "/silver-chandbali-earrings-jewellery",
            },
          ],
        },
      },
      {
        value: "rings",
        title: "Rings",
        url: "/silver-rings-jewellery",
        // imgContainer: {

        //     "imageContainer": [
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bangle+stylori+-02.png",
        //             "content": "Bangles",
        //             "url": "/bangles-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bracelet+stylori+Bracelets-01.png",
        //             "content": "Bracelets",
        //             "url": "/bracelets-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Oval+Bracelet+stylori+-03.png",
        //             "content": "Oval Bracelets",
        //             "url": "/oval+bracelets-jewellery",
        //         },
        //     ]
        // }
      },
      {
        value: "bangle",
        title: "Bangle",
        url: "/silver-bangles-jewellery",
        // imgContainer: {

        //     "imageContainer": [
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bangle+stylori+-02.png",
        //             "content": "Bangles",
        //             "url": "/bangles-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bracelet+stylori+Bracelets-01.png",
        //             "content": "Bracelets",
        //             "url": "/bracelets-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Oval+Bracelet+stylori+-03.png",
        //             "content": "Oval Bracelets",
        //             "url": "/oval+bracelets-jewellery",
        //         },
        //     ]
        // }
      },
      {
        value: "bracelets",
        title: "BRACELETS",
        url: "/silver-bracelets-jewellery",
        imgContainer: {
          bigImage: {
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu-Dropdown-Images---Bracelets.jpg",
            content: "CHOKERS",
            url: "/silver-bracelets-jewellery",
          },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/CHAIN+BRACELETS.webp",
              content: "CHAIN BRACELETS",
              url: "/silver-bracelets-jewellery",
            },
          ],
        },
      },
      {
        value: "bridalAccessories",
        title: "BRIDAL ACCESSORIES",
        url: "/silver-bridal+accessories-jewellery",
        imgContainer: {
          bigImage: {
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu-Dropdown-Images---Bridal.jpg",
            content: "CHOKERS",
            url: "/silver-bridal+accessories-jewellery",
          },

          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori+silver+MAANG+TIKKA.jpg",
              content: "MAANG TIKKA",
              url: "/silver-maang+tikka-Bridal+Accessories-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori+silver++OODIYANAM.jpg",
              content: "OODIYANAM",
              url: "/silver-oddiyanam-bridal+accessories-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori+silver+ARMLET.jpg",
              content: "ARMLET",
              url: "/silver-armlet-bridal+accessories-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/stylori+silver++HAIR+ORNAMENTS.jpg",
              content: "HAIR ORNAMENTS",
              url: "/silver-hair+ornaments-bridal+accessories-jewellery",
            },
          ],
        },
      },
      {
        value: "nosepins",
        title: "Nose Pins",
        url: "/silver-nose+pin+online-jewellery",
        // imgContainer: {

        //     "imageContainer": [
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bangle+stylori+-02.png",
        //             "content": "Bangles",
        //             "url": "/bangles-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bracelet+stylori+Bracelets-01.png",
        //             "content": "Bracelets",
        //             "url": "/bracelets-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Oval+Bracelet+stylori+-03.png",
        //             "content": "Oval Bracelets",
        //             "url": "/oval+bracelets-jewellery",
        //         },
        //     ]
        // }
      },
      {
        value: "mensCollection",
        title: `MEN'S COLLECTION`,
        url: "/silver-jewellery-for+men",
        // imgContainer: {

        //     "imageContainer": [
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bangle+stylori+-02.png",
        //             "content": "Bangles",
        //             "url": "/bangles-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bracelet+stylori+Bracelets-01.png",
        //             "content": "Bracelets",
        //             "url": "/bracelets-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Oval+Bracelet+stylori+-03.png",
        //             "content": "Oval Bracelets",
        //             "url": "/oval+bracelets-jewellery",
        //         },
        //     ]
        // }
      },
      {
        value: "idol's",
        title: `IDOL'S`,
        url: "https://www.stylori.com/idols-silver-jewellery",
        // imgContainer: {

        //     "imageContainer": [
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bangle+stylori+-02.png",
        //             "content": "Bangles",
        //             "url": "/bangles-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bracelet+stylori+Bracelets-01.png",
        //             "content": "Bracelets",
        //             "url": "/bracelets-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Oval+Bracelet+stylori+-03.png",
        //             "content": "Oval Bracelets",
        //             "url": "/oval+bracelets-jewellery",
        //         },
        //     ]
        // }
      },
      {
        value: "bestSellers",
        title: "Best Sellers",
        url: "/silver-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
        // imgContainer: {

        //     "imageContainer": [
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Pendants/Classic+Pendants+Stylori-02.png",
        //             "content": "Classic",
        //             "url": "/classic-pendants-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Pendants/Casual+Pendants+Stylori-01.png",
        //             "content": "Casual",
        //             "url": "/casual-pendants-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Pendants/Fashion+Pendants+Stylori-03.png",
        //             "content": "Fashion",
        //             "url": "/fashion-pendants-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Pendants/Religious+Pendants+Stylori-04.png",
        //             "content": "Religious",
        //             "url": "/religious-pendants-jewellery",
        //         },
        //         {
        //             "img": "https://assets.stylori.com/images/Menu/Jewellery/Pendants/Tanmaniya+Pendants+Stylori-05.png",
        //             "content": "Tanmaniya",
        //             "url": "/tanmaniya-pendants-jewellery",
        //         },
        //     ]
        // }
      },
    ],
    //----SUBLAYER2 ------
    menuTwo: [
      {
        value: "Price",
        title: "By Price",
        url: "#Price",
        imgContainer: {
          //-----------LAYER 3--------
          onlyText: [
            {
              content: "Under 1500",
              url: "/silver-jewellery?startprice=0&endprice=1500",
            },
            {
              content: "1001 - 3000",
              url: "/silver-jewellery?startprice=1001&endprice=3000",
            },
            {
              content: "3001 - 5000",
              url: "/silver-jewellery?startprice=3001&endprice=5000",
            },
            {
              content: "More Then 5000",
              url: "/silver-jewellery?startprice=5001&endprice=100000",
            },
          ],
        },
      },
      // {
      //     value: 'Collection', title: 'By Collection', url: '/collections',
      //     imgContainer: {
      //         "imageContainer": [
      //             {
      //                 "img": "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Carve+Collection+Stylori-08.png",
      //                 "content": "Carve",
      //                 "url": "/jewellery-from+the+carve+collection?sort=latest",
      //             },
      //             {
      //                 "img": "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Blush+Collection+Stylori+-.png",
      //                 "content": "Blush",
      //                 "url": "/jewellery-blush",
      //             },
      //             {
      //                 "img": "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Molecute+Collection+Stylori+-01.png",
      //                 "content": "Molecute",
      //                 "url": "/jewellery-molecute+collection",
      //             },
      //             {
      //                 "img": "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Gemstone+Collection+Stylori+-02.png",
      //                 "content": "Gemstone",
      //                 "url": "/gemstone-jewellery?sort=latest",
      //             },
      //             {
      //                 "img": "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Mistletoe+Collection+Stylori-01.png",
      //                 "content": "Mistletoe",
      //                 "url": "/jewellery-from+mistletoe+collection",
      //             },
      //             {
      //                 "img": "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Renaissance+Collection+Stylori+-04.png",
      //                 "content": "The Renaissance",
      //                 "url": "/jewellery-from+the+renaissance+collection",
      //             },
      //             {
      //                 "img": "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Monsoon+Collection+Stylori-02.png",
      //                 "content": "Monsoon",
      //                 "url": "/jewellery-from+monsoon+collection",
      //             },
      //             {
      //                 "img": "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Summer+Collection+Stylori-06.png",
      //                 "content": "Summer",
      //                 "url": "/jewellery-from+the+summer+collection",
      //             },
      //         ]
      //     }
      // },
      {
        value: "Finish",
        title: "By Finish",
        url: "#",
        imgContainer: {
          onlyText: [
            {
              content: "Oxidised",
              url: "/oxidised-silver-jewellery",
            },
            {
              content: "Gold",
              url: "/gold-plain+gold-silver-jewellery",
            },
            {
              content: "Rose Gold",
              url: "/rose+gold-rose-silver-jewellery",
            },
            {
              content: "Dual tone",
              url: "/dual+tone-silver-jewellery",
            },
          ],
        },
      },
    ],
  },
  // 'SILVER': {
  //     'menuOne':
  //         [
  //             {
  //                 value: 'silverjewellery',
  //                 title: 'Silver Jewellery',
  //                 url: '/silver-jewellery',
  //                 imgContainer: {

  //                     "imageContainer": [
  //                         {
  //                             "img": "https://assets-cdn.stylori.com/276x276/images/product/SE0889/SE0889-1Y.jpg",
  //                             "content": "Earrings",
  //                             "url": "/silver-earrings-jewellery",
  //                         },
  //                         {
  //                             "img": "https://assets-cdn.stylori.com/296x296/images/product/SR0201/SR0201-1YW.jpg",
  //                             "content": "Rings",
  //                             "url": "/silver-rings-jewellery",
  //                         },
  //                         {
  //                             "img": "https://assets-cdn.stylori.com/276x276/images/product/SE1025/SE1025-1Y.jpg",
  //                             "content": "Pendants",
  //                             "url": "/silver-pendants-jewellery",
  //                         },
  //                     ]
  //                 }
  //             }]
  // },
  // 'GOLDCOINS': {
  //     'menuOne':
  //         [
  //             {
  //                 value: 'bydesign',
  //                 title: 'By design',
  //                 url: '#Bydesign',
  //                 imgContainer: {

  //                     "imageContainer": [
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Design/Plain+Gold+Coins-01.png",
  //                             "content": "Plain",
  //                             "url": "/plain-goldcoins",
  //                         },
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Design/Lakshmi+Gold+Coins-03.png",
  //                             "content": "Lakshmi",
  //                             "url": "/lakshmi-goldcoins",
  //                         },
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Design/Jesus+Gold+Coins-07.png",
  //                             "content": "Jesus",
  //                             "url": "/jesus-goldcoins",
  //                         },
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Design/Ganesha+Gold+Coins-04.png",
  //                             "content": "Ganesh",
  //                             "url": "/ganesha-goldcoins",
  //                         },
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Design/Balaji+Gold+Coins-08.png",
  //                             "content": "Balaji",
  //                             "url": "/balaji-goldcoins",
  //                         },
  //                     ]
  //                 }
  //             },
  //             {
  //                 value: 'byweight', title: 'By Weight', url: '#',
  //                 imgContainer: {

  //                     "imageContainer": [
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/1+gm+Gold+Coins-07.png",
  //                             "content": "1 Gram",
  //                             "url": "/1gm-goldcoins",
  //                         },
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/4gm+Gold+Coins-04.png",
  //                             "content": "4 Grams",
  //                             "url": "/4gms-goldcoins",
  //                         },
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/8+gm+Gold+Coins-01.png",
  //                             "content": "8 Grams",
  //                             "url": "/8gms-goldcoins",
  //                         },
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/10+gm+Gold+Coins-03.png",
  //                             "content": "10 Grams",
  //                             "url": "/10gms-goldcoins",
  //                         },
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/20+gm+Gold+Coins-08.png",
  //                             "content": "20 Grams",
  //                             "url": "/20gms-goldcoins",
  //                         },
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/50gm+Gold+Coins-01.png",
  //                             "content": "50 Grams",
  //                             "url": "/50gms-goldcoins",
  //                         },
  //                     ]
  //                 }
  //             },
  //             {
  //                 value: 'bypurity', title: 'By Purity', url: '#',
  //                 imgContainer: {

  //                     "imageContainer": [
  //                         {
  //                             "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Purity/24kt+Gold+Coins-03.png",
  //                             "content": "24 KT",
  //                             "url": "/24kt-goldcoins",
  //                         },
  //                         // {
  //                         //     "img": "https://assets.stylori.com/images/Menu/Gold+Coins/By+Purity/22kt+Gold+Coins-04.png",
  //                         //     "content": "22 KT",
  //                         //     "url": "/22kt-goldcoins",
  //                         // },
  //                     ]
  //                 }
  //             },
  //         ],
  // },
  STYLE: {
    menuOne: [
      {
        value: "traditional",
        title: "Traditional",
        url: "/silver-jewellery-traditional",
        imgContainer: {
          bigImage: {
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
            content: "CHOKERS",
            url: "/silver-jewellery-Traditional",
          },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/TRADITIONAL/Jped+Web/BANGLE.jpg",
              content: "Bangles",
              url: "/silver-bangles-jewellery-traditional",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T+Bracelets.jpg",
              content: "Bracelets",
              url: "/silver-bracelets-jewellery-traditional",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-B-accessories.jpg",
              content: "Bridal Accessories",
              url: "/silver-bridal+accessories-jewellery-traditional",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/TRADITIONAL/Jped+Web/EARRING.jpg",
              content: "Earrings",
              url: "/silver-earrings-jewellery-traditional",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-L-necklace.jpg",
              content: "Long Necklace",
              url: "/silver-long+necklace-jewellery-traditional",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-Nosepin.jpg",
              content: "Nosepin",
              url: "/silver-nose+pin+online-jewellery-traditional",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-pendant.jpg",
              content: "Pendant",
              url: "/silver-pendants-jewellery-traditional",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-rind.jpg",
              content: "Rings",
              url: "/silver-rings-jewellery-traditional",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/T-s-Necklace.jpg",
              content: "Short Necklace",
              url: "/silver-short+necklace-jewellery-traditional",
            },
          ],
        },
      },
      {
        value: "folklore",
        title: "Folklore",
        url: "/silver-jewellery-folklore",
        imgContainer: {
          bigImage: {
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---folklore.jpg",
            content: "CHOKERS",
            url: "/silver-jewellery-folklore",
          },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/BANGLE.jpg",
              content: "Bangles",
              url: "/silver-bangles-jewellery-folklore",
            },

            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-B-Accessories.jpg",
              content: "Bridal Accessories",
              url: "/silver-bridal+accessories-jewellery-folklore",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/EARRING.jpg",
              content: "Earrings",
              url: "/silver-earrings-jewellery-folklore",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-L-Necklace.jpg",
              content: "Long Necklace",
              url: "/silver-long+necklace-jewellery-folklore",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-Nosepin.jpg",
              content: "Nosepin",
              url: "/silver-nose+pin+online-jewellery-folklore",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-pendant.jpg",
              content: "Pendant",
              url: "/silver-pendants-jewellery-folklore",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/Ring.jpg",
              content: "Rings",
              url: "/silver-rings-jewellery-folklore",
            },
            // {
            //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/EARRING.webp",
            //     "content": "Others",
            //     "url": "/silver-Others-jewellery-Folklore",
            // },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-S-necklace.jpg",
              content: "Short Necklace",
              url: "/silver-short+necklace-jewellery-folklore",
            },
          ],
        },
      },
      {
        value: "contemporary",
        title: "Contemporary",
        url: "/silver-jewellery-contemporary",
        imgContainer: {
          bigImage: {
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---contemporary.jpg",
            content: "CHOKERS",
            url: "/silver-jewellery-contemporary",
          },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/BANGLE.jpg",
              content: "Bangles",
              url: "/silver-bangles-jewellery-contemporary",
            },

            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/C-bracelets.jpg",
              content: "Bracelets",
              url: "/silver-bracelets-jewellery-contemporary",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/EARRING.jpg",
              content: "Earrings",
              url: "/silver-earrings-jewellery-Contemporary",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/C-L-necklace.jpg",
              content: "Long Necklace",
              url: "/silver-long+necklace-jewellery-contemporary",
            },

            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/C-s-necklace.jpg",
              content: "Short Necklace",
              url: "/silver-short+necklace-jewellery-contemporary",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/C-pendant.jpg",
              content: "Pendants",
              url: "/silver-pendants-jewellery-contemporary",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/RING.jpg",
              content: "Rings",
              url: "/silver-rings-jewellery-contemporary",
            },
          ],
        },
      },
      {
        value: "everyday",
        title: "Everyday",
        url: "/silver-jewellery-everyday",
        imgContainer: {
          bigImage: {
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---everyday.jpg",
            content: "CHOKERS",
            url: "/silver-jewellery-everyday",
          },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/E-s-Necklace.jpg",
              content: "Short Necklace",
              url: "/silver-short+necklace-jewellery-everyday",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/EVERYDAY/Jped+Web/EARRING.jpg",
              content: "Earring",
              url: "/silver-earrings-jewellery-everyday",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/EVERYDAY/Jped+Web/RING.jpg",
              content: "Rings",
              url: "/silver-rings-jewellery-everyday",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/E-pendant.jpg",
              content: "Pendants",
              url: "/silver-pendants-jewellery-everyday",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/E-bracelets.jpg",
              content: "Bracelets",
              url: "/silver-bracelets-jewellery-everyday",
            },
            // {
            //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/EARRING.webp",
            //     "content": "Ankletes",
            //     "url": "/silver-rings-jewellery-everyday",
            // },
            // {
            //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/BANGLE.webp",
            //     "content": "Bangles",
            //     "url": "#",
            // },
          ],
        },
      },
      {
        value: "mudra",
        title: "Mudra",
        url: "/silver-jewellery-dmudra",
        imgContainer: {
          bigImage: {
            img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---mudra.jpg",
            content: "CHOKERS",
            url: "/silver-jewellery-dmudra",
          },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/MUDRA/Jped+Web/EARRING.jpg",
              content: "Earrings",
              url: "/silver-earrings-jewellery-dmudra",
            },

            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/D-L-necklace.jpg",
              content: "Long Necklace",
              url: "/silver-long+necklace-jewellery-dmudra",
            },

            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/D-s-necklace.jpg",
              content: "Short Necklace",
              url: "/silver-short+necklace-jewellery-dmudra",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/D-b-Accessories.jpg",
              content: "Bridal Accessories",
              url: "/silver-bridal+accessories-jewellery-dmudra",
            },
            // {
            //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/EARRING.webp",
            //     "content": "Others",
            //     "url": "/silver-Others-jewellery-dmudra",
            // },

            // {
            //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/EARRING.webp",
            //     "content": "Rings",
            //     "url": "/silver-rings-jewellery-everyday",
            // },
            // {
            //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/EARRING.webp",
            //     "content": "Nose pin",
            //     "url": "/silver-rings-jewellery-everyday",
            // },
            // {
            //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/EARRING.webp",
            //     "content": "Ankletes",
            //     "url": "/silver-rings-jewellery-everyday",
            // },
            // {
            //     "img": "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/BANGLE.webp",
            //     "content": "Bangles",
            //     "url": "#",
            // },
          ],
        },
      },
    ],
  },

  COLLECTIONS: {
    menuOne: [
      {
        value: "Paavai Collection",
        title:"Paavai Collection",
        url: "https://www.stylori.com/silver-paavai-jewellery",
      },
      {
        value: "Concentric Collection",
        title: "Concentric Collection",
        url: "https://www.stylori.com/silver-jewellery-concentric+collection",
        // imgContainer: {
        // bigImage: {
        //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
        //   content: "CHOKERS",
        //   url: "/silver-jewellery-Traditional",
        // },
        // imageContainer: [
        //   {
        //     img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Inlove.jpg",
        //     content: "Earings",
        //     url: "http://stylori.com/silver-jewellery-inlovecollection",
        //   },
        // ],
        // },
      },
      {
        value: "Akruti Collection",
        title: "Akruti Collection",
        url: "https://www.stylori.com/silver-jewellery-akruti+collection",
        // imgContainer: {
        // bigImage: {
        //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
        //   content: "CHOKERS",
        //   url: "/silver-jewellery-Traditional",
        // },
        // imageContainer: [
        //   {
        //     img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Inlove.jpg",
        //     content: "Earings",
        //     url: "http://stylori.com/silver-jewellery-inlovecollection",
        //   },
        // ],
        // },
      },
      {
        value: "Elemental Collection",
        title: "Elemental Collection",
        url: "https://www.stylori.com/silver-jewellery-elemental+collection",
        // imgContainer: {
        // bigImage: {
        //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
        //   content: "CHOKERS",
        //   url: "/silver-jewellery-Traditional",
        // },
        // imageContainer: [
        //   {
        //     img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Inlove.jpg",
        //     content: "Earings",
        //     url: "http://stylori.com/silver-jewellery-inlovecollection",
        //   },
        // ],
        // },
      },
      {
        value: "Mural Collection",
        title: "Mural Collection",
        url: "https://www.stylori.com/silver-jewellery-mural+collection",
        // imgContainer: {
        // bigImage: {
        //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
        //   content: "CHOKERS",
        //   url: "/silver-jewellery-Traditional",
        // },
        // imageContainer: [
        //   {
        //     img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Inlove.jpg",
        //     content: "Earings",
        //     url: "http://stylori.com/silver-jewellery-inlovecollection",
        //   },
        // ],
        // },
      },
      {
        value: "In love Collection",
        title: "In love Collection",
        url: "https://stylori.com/silver-jewellery-inlovecollection",
        // imgContainer: {
        // bigImage: {
        //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
        //   content: "CHOKERS",
        //   url: "/silver-jewellery-Traditional",
        // },
        // imageContainer: [
        //   {
        //     img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Inlove.jpg",
        //     content: "Earings",
        //     url: "http://stylori.com/silver-jewellery-inlovecollection",
        //   },
        // ],
        // },
      },
      {
        value: "StarStruck",
        title: "StarStruck",
        url: "https://www.stylori.com/silver-jewellery-starstruck+collection",
        // imgContainer: {
        // bigImage: {
        //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
        //   content: "CHOKERS",
        //   url: "/silver-jewellery-Traditional",
        // },
        // imageContainer: [
        //   {
        //     img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Star.jpg",
        //     content: "Earings",
        //     url: "http://www.stylori.com/silver-jewellery-starstruck+collection",
        //   },
        // ],
        // },
      },
      {
        value: "Baroque Whites Collection",
        title: "Baroque Whites Collection",
        url: "https://www.stylori.com/silver-jewellery-baroque+whites+collection",
        // imgContainer: {
        // bigImage: {
        //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
        //   content: "CHOKERS",
        //   url: "/silver-jewellery-Traditional",
        // },
        // imageContainer: [
        //   {
        //     img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Pearl.jpg",
        //     content: "Earings",
        //     url: "http://stylori.com/silver-jewellery-inlovecollection",
        //   },
        // ],
        // },
      },
    ],
  },

  FINISH: {
    menuOne: [
      {
        value: "Victorian",
        title: "Victorian",
        url: "https://www.stylori.com/silver-jewellery-victorian?sort=Price%20High%20to%20Low&startprice=0&endprice=0",
      },
      {
        value: "Gold Plated Kundan",
        title: "Gold Plated Kundan",
        url: "https://www.stylori.com/silver-jewellery-gold+plated+kundan",
      },
      {
        value: "Deep Nagas & Kundan",
        title: "Deep Nagas & Kundan",
        url: " https://www.stylori.com/silver-jewellery-deep+nagas+kundan",
      },
      {
        value: "Gold Plated Kemp",
        title: "Gold Plated Kemp",
        url: " https://www.stylori.com/silver-jewellery-gold+plated+kemp",
      },
      {
        value: "Deep Nagas & Kundan",
        title: "Deep Nagas & Kundan",
        url: " https://www.stylori.com/silver-jewellery-deep+nagas+kundan",
      },
      {
        value: "Nagas/Nakshi",
        title: "Nagas/Nakshi",
        url: " https://www.stylori.com/silver-jewellery-nagas+nakshi",
      },
      {
        value: "Beads & Pearl Jewellery",
        title: "Beads & Pearl Jewellery",
        url: " https://www.stylori.com/silver-jewellery-beads+pearl+jewellery",
      },
      {
        value: "Cubic Zircon/Swarovski Jewellery",
        title: "Cubic Zircon/Swarovski Jewellery",
        url: " https://www.stylori.com/silver-jewellery-cubiczircon+swarovski",
      },
      {
        value: "Studded Jewellery",
        title: "Studded Jewellery",
        url: "https://www.stylori.com/silver-jewellery-studded+jewellery",
      },
      {
        value: "Rose gold",
        title: "Rose gold",
        url: "https://www.stylori.com/silver-jewellery-rose+gold+finish",
      },
      {
        value: "Oxidised",
        title: "Oxidised",
        url: "https://www.stylori.com/silver-jewellery-oxidised+finish",
      },
      {
        value: "Dual Tone",
        title: "Dual Tone",
        url: " https://www.stylori.com/silver-jewellery-dual+tone+finish",
      },
      {
        value: "Others",
        title: "Others",
        url: "https://www.stylori.com/silver-jewellery-finish+others",
      },
    ],
  },

  GIFTS: {
    menuOne: [
      {
        value: "byPrice",
        title: "By Price",
        url: "#",
        imgContainer: {
          onlyText: [
            {
              content: "Under 1500",
              url: "/silver-jewellery?startprice=0&endprice=1500",
            },
            {
              content: "1001 - 3000",
              url: "/silver-jewellery?startprice=1001&endprice=3000",
            },
            {
              content: "3001 - 5000",
              url: "/silver-jewellery?startprice=3001&endprice=5000",
            },
            {
              content: "More than 5001",
              url: "/silver-jewellery?startprice=5001&endprice=100000",
            },
          ],
        },
      },
      {
        value: "byJewellery",
        title: "By Jewellery",
        url: "#",
        imgContainer: {
          onlyText: [
            {
              content: "Necklace",
              url: "/silver-necklace-jewellery",
            },
            {
              content: "Earrings",
              url: "/silver-earrings-jewellery",
            },
            {
              content: "Bangles",
              url: "/silver-bangles-jewellery",
            },
            {
              content: "Bracelets",
              url: "/silver-bracelets-jewellery",
            },
            {
              content: "Rings",
              url: "/silver-rings-jewellery",
            },
            // {
            //     "content": "Sets",
            //     "url": "#"
            // },
          ],
        },
      },
      {
        value: "byGender",
        title: "BY gender",
        url: "#",
        imgContainer: {
          onlyText: [
            {
              content: "For Him",
              url: "/silver-jewellery-for+men",
            },
            {
              content: "For Her",
              url: "/silver-jewellery-for+women",
            },
          ],
        },
      },
      {
        value: "ByGiftVoucher",
        title: "Gift Voucher",
        url: "/silver-voucher-jewellery",
      },
    ],
  },
};

// *************

// new navbar for stylori Silver
export const menuListHeaderNew = [
  {
    title: "JEWELLERY",
    key: "1",
    url: "/silver-jewellery",
    JEWELLERY: [
      {
        value: "newarrivals",
        title: "New Arrivals",
        url: "/silver-jewellery?sort=New%20to%20Stylori&startprice=0&endprice=0",
        newarrivals: []
      },
      {
        value: "necklace",
        title: "NECKLACE",
        url: "/silver-necklaces-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
        bigImage: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu-Dropdown-Images---Necklace.jpg",
        content: "CHOKERS",
        necklace: [
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Chokers.webp",
            content: "CHOKER",
            url: "/silver-chokers-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Statement.webp",
            content: "STATEMENT",
            url: "/silver-statement+necklaces-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Layered.webp",
            content: "LAYERED ",
            url: "/silver-layered+necklaces-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Pendant-Neckace.webp",
            content: "PENDANT",
            url: "/silver-pendant+necklaces-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Gutta-pusalu.webp",
            content: "GUTTU PUSALU",
            url: "/silver-guttapusalu+necklace-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Single-line-necklace.webp",
            content: "SINGLE LINE NECKLACE",
            url: "/silver-guttapusalu+necklace-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
          },
        ],
      },
      {
        value: "earrings",
        title: "Earrings",
        bigImage:"https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu-Dropdown-Images---Earrings.jpg",
        content: "CHOKERS",
        url: "/earrings-silver-jewellery",
        earrings:[
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Stud.webp",
            content: "STUDS",
            url: "/silver-studs-earrings-jewellery",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Jhumkas.webp",
            content: "JHUMKAS",
            url: "/silver-jhumkas+online-earrings-jewellery",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Danglers-and-Drops.webp",
            content: "DANGLERS & DROPS",
            url: "/earrings-silver-danglers+drops-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Hooks-and-Hoops.webp",
            content: "HOOKS & HOOPS",
            url: "/earrings-silver-danglers+drops-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/ear-cuffs.webp",
            content: "EAR CUFFS",
            url: "/earrings-silver-ear+cuffs-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Chandbali.webp",
            content: "CHANDBALI",
            url: "/earrings-silver-chandbali-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
          },
        ]
      },
      {
        value: "rings",
        title: "Rings",
        url: "/rings-silver-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
      },
      {
        value: "bangle",  
        title: "BANGLE & BRACELETS",
        url: "/silver-wristwear-jewellery",
        bigImage: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu-Dropdown-Images---Bracelets.jpg",
        content: "CHOKERS",
        bangle:[
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bangle55.webp",
            content: "BANGLE",
            url: "/bangles-silver-jewellery",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bracelet55.webp",
            content: "BRACELET",
            url: "/bracelets-silver-jewellery",
          },
        ]
      },
      {
        value: "bridalAccessories",
        title: "BRIDAL",
        url: "/bridal+accessories-silver-jewellery",
        bigImage: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu-Dropdown-Images---Bridal.jpg",
        content: "CHOKERS",
        bridalAccessories:[
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Maang-Tikka.webp",
            content: "MAANG TIKKA",
            url: "/bridal+accessories-silver-maang+tikka-jewellery",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Oodiyanam.webp",
            content: "OODIYANAM",
            url: "/bridal+accessories-silver-oddiyanam-jewellery",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Armlet.webp",
            content: "ARMLET",
            url: "/bridal+accessories-silver-armlet-jewellery",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Hair-ornaments.webp",
            content: "HAIR ORNAMENTS",
            url: "/bridal+accessories-silver-hair+ornaments-jewellery",
          },
        ]
      },

      {
        value: "Others",
        title: "OTHERS",
        url: "/nose+pin+online-silver-jewellery",
        content: "CHOKERS",
        Others:[
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Idols-and-articles.webp",
            content: "IDOLS & ARTICLES",
            url: "/silver-antique+idols-jewellery",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Anklets.webp",
            content: "ANKLETS",
            url: "/anklet-silver-jewellery",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Nosepin.webp",
            content: "NOSE PIN",
            url: "/nose+pin+online-silver-jewellery",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Other-Accessories.webp",
            content: "OTHER ACCESSORIES",
            url: "/silver-other+accessories-jewellery",
          },
        ]
      },
      {
        value: "Price",
        title: "By Price",
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu-Dropdown-Images---Necklace.jpg",
        content: "CHOKERS",
        url: "/",
        Price: [
          {
            img: priceImgOne,
            content: "UNDER 1500",
            url: "/silver-jewellery?sort=Price%20High%20to%20Low&startprice=0&endprice=1500",
          },
          {
            img: priceImgTwo,
            content: "1500-3000",
            url: "/silver-jewellery?sort=Best%20Seller&startprice=1500&endprice=3000",
          },
          {
            img: priceImgThree,
            content: "3000-5000",
            url: "/silver-jewellery?sort=New%20to%20Stylori&startprice=3000&endprice=5000",
          },
          {
            img: priceImgFour,
            content: "5000-7000",
            url: "/silver-jewellery?sort=New%20to%20Stylori&startprice=5000&endprice=7000",
          },
          {
            img: priceImgFive,
            content: "ABOVE 7000",
            url: "/silver-jewellery?sort=Best%20Seller&startprice=7000&endprice=500000",
          },
        ],
      },


    ],
    expand: true
  },

  {
    title: "STYLE",
    key: "2",
    url: "/silver-cocktail-jewellery",
    STYLE: [
      {
        value: "traditional",
        title: "Traditional",
        bigImage: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
        content: "CHOKERS",
        url: "/silver-jewellery-traditional",
        traditional: [
          {
            img: "https://assets.stylori.com/banners/web/Bangle.webp",
            content: "Bangles",
            url: "/bangles-silver-jewellery-traditional",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bracelets.webp",
            content: "Bracelets",
            url: "/bracelets-silver-jewellery-traditional",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bridal-Accessories.webp",
            content: "Bridal Accessories",
            url: "/bridal+accessories-silver-jewellery-traditional",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Earrings.webp",
            content: "Earrings",
            url: "/earrings-silver-jewellery-traditional",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Long-Necklace.webp",
            content: "Long Necklace",
            url: "/long+necklace-silver-jewellery-traditional",
          },
          {
            img: "https://assets.stylori.com/banners/web/Nosepin.webp",
            content: "Nosepin",
            url: "/nose+pin+online-silver-jewellery-traditional",
          },
          {
            img: "https://assets.stylori.com/banners/web/Pendant.webp",
            content: "Pendant",
            url: "/pendants-silver-jewellery-traditional",
          },
          {
            img: "https://assets.stylori.com/banners/web/Ring.webp",
            content: "Rings",
            url: "/rings-silver-jewellery-traditional",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Short-Necklace.webp",
            content: "Short Necklace",
            url: "/short+necklace-silver-jewellery-traditional",
          },
        ],
      },
      {
        value: "folklore",
        title: "Folklore",
        url: "/silver-jewellery-folklore",
        bigImage: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---folklore.jpg",
        content: "CHOKERS",
        folklore: [
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bangle11.webp",
            content: "Bangles",
            url: "/bangles-silver-jewellery-folklore",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bracelet11.webp",
            content: "Bracelet",
            url: "/bracelets-silver-jewellery-folklore",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bridal-accessories.webp",
            content: "Bridal Accessories",
            url: "/bridal+accessories-silver-jewellery-folklore",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Earrings11.webp",
            content: "Earrings",
            url: "/earrings-silver-jewellery-folklore",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Long-Necklace11.webp",
            content: "Long Necklace",
            url: "/long+necklace-silver-jewellery-folklore",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Nosepin11.webp",
            content: "Nosepin",
            url: "/nose+pin+online-silver-jewellery-folklore",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Pendant11.webp",
            content: "Pendant",
            url: "/pendants-silver-jewellery-folklore",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Ring11.webp",
            content: "Rings",
            url: "/rings-silver-jewellery-folklore",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Short-Necklace11.webp",
            content: "Short Necklace",
            url: "/short+necklace-silver-jewellery-folklore",
          },
        ],
      },
      {
        value: "contemporary",
        title: "Contemporary",
        bigImage: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---contemporary.jpg",
        content: "CHOKERS",
        url: "/silver-jewellery-contemporary",
        contemporary: [
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bangles22.webp",
            content: "Bangles",
            url: "/bangles-silver-jewellery-contemporary",
          },

          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bracelet22.webp",
            content: "Bracelets",
            url: "/bracelets-silver-jewellery-contemporary",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Earrings22.webp",
            content: "Earrings",
            url: "/earrings-silver-jewellery-contemporary",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Long-Necklace22.webp",
            content: "Long Necklace",
            url: "/long+necklace-silver-jewellery-contemporary",
          },

          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Short-Necklace22.webp",
            content: "Short Necklace",
            url: "/short+necklace-silver-jewellery-contemporary",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Pendant22.webp",
            content: "Pendants",
            url: "/pendants-silver-jewellery-contemporary",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Ring22.webp",
            content: "Rings",
            url: "/rings-silver-jewellery-contemporary",
          },
        ],
      },
      {
        value: "everyday",
        title: "Everyday",
        url: "/silver-jewellery-everyday",
        bigImage: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---everyday.jpg",
        content: "CHOKERS",
        everyday: [
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/SHort-necklace.webp",
            content: "Short Necklace",
            url: "/short+necklace-silver-jewellery-everyday",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Long-Necklace33.webp",
            content: "Long Necklace",
            url: "long+necklace-silver-jewellery-everyday",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Earings.webp",
            content: "Earring",
            url: "/earrings-silver-jewellery-everyday",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Ring.webp",
            content: "Rings",
            url: "/rings-silver-jewellery-everyday",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Pendant.webp",
            content: "Pendants",
            url: "/pendants-silver-jewellery-everyday",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bracelet.webp",
            content: "Bracelets",
            url: "/bracelets-silver-jewellery-everyday",
          },
        ],
      },

      {
        value: "mudra",
        title: "Mudra",
        url: "/silver-jewellery-dmudra",
        bigImage: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---mudra.jpg",
        content: "CHOKERS",
        mudra: [
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Earrings.webp",
            content: "Earrings",
            url: "/earrings-silver-jewellery-dmudra",
          },

          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Long-Necklace.webp",
            content: "Long Necklace",
            url: "/long+necklace-silver-jewellery-dmudra",
          },

          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Short-Necklace.webp",
            content: "Short Necklace",
            url: "/short+necklace-silver-jewellery-dmudra",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Anklets.webp",
            content: "Anklets",
            url: "/anklet-silver-jewellery-dmudra",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bridal-accessories.webp",
            content: "Bridal Accessories",
            url: "/bridal+accessories-silver-jewellery-dmudra",
          },
          {
            img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bangle.webp",
            content: "Bangles",
            url: "/bangles-silver-jewellery-dmudra",
          },
        ],
      },


    ],
    expand: true
  },
  {
    title: "FINISH",
    key: "3",
    url: "/silver-jewellery?sort=Best%20Seller&startprice=0&endprice=0",
    bigImage: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu-Dropdown-Images---Earrings.jpg",
    FINISH: [
      {
        value: "Oxidised",
        title: "Oxidised",
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Group-23876%402x.webp",
        url: "/silver-jewellery-oxidised+finish",
      },
      {
        value: "roseGold",
        title: "Rose Gold",
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Group-23880%402x.webp",
        url: "/silver-jewellery-rose+gold+finish",
      },
      {
        value: "GoldplatedKemp",
        title: "Gold Plated Kemp",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Gold-plated-kemp.webp",
        url: "/silver-jewellery-gold+plated+kemp",
      },
      {
        value: "GoldplatedKundan",
        title: "Gold Plated Kundan",
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Gold-Plated-Kundan.webp",
        url: "/silver-jewellery-gold+plated+kundan",
      },
      {
        value: "deepnagas&kundan",
        title: "Deep Nagas & Kundan",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Deep-Nagas-Kundan.webp",
        url: "/silver-jewellery-deep+nagas+kundan",
      },
      {
        value: "nagasNaksho",
        title: "Nagas & Nakshi",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Nagas--Nakshi.webp",
        url: "/silver-jewellery-nagas+nakshi",
      },
      {
        value: "DualTone",
        title: "Dual Tone",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Dual-tone.webp",
        url: "/silver-jewellery-dual+tone+finish",
      },
      {
        value: "beads&pearljewellery",
        title: "Beads & Pearl",
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Beads-and-pearls.webp",
        url: "/silver-jewellery-beads+pearl+jewellery",
      },
      {
        value: "victorian",
        title: "Victorian",
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Victorian.webp",
        url: "/silver-jewellery-victorian?sort=Price%20High%20to%20Low&startprice=0&endprice=0",
      },
      {
        value: "studded",
        title: "Studded",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Studded-Jewellery.webp",
        url: "/silver-jewellery-studded+jewellery",
      },
      {
        value: "cubicZircon/swarovski",
        title: "Cubic Zircon/Swarovski",
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/CZ-Swarovski.webp",
        url: "/silver-jewellery-cubiczircon+swarovski",
      },
      {
        value: "others",
        title: "Others",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Others.webp",
        url: "/silver-jewellery-finish+others",
      },
    ],
    expand: true
  },
  {
    title: "COLLECTIONS",
    key: "4",
    url: "/silver-jewellery",
    bigImage: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---everyday.jpg",
    COLLECTIONS: [
      {
        value: "MURAL",
        title: "MURAL",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Mural.webp",
        url: "/silver-jewellery-mural+collection",
      },
      {
        value: "STARSTUCK",
        title: "STARSTUCK",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Starstruck.webp",
        url: "/silver-jewellery-starstruck+collection",
      },
      {
        value: "CONCENTRIC",
        title: "CONCENTRIC",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Concentric.webp",
        url: "/silver-jewellery-concentric+collection",
      },
      {
        value: "INLOVE",
        title: "IN LOVE",
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Inlove.webp",
        url: "/silver-jewellery-inlovecollection",
      },
      {
        value: "ELEMENTAL",
        title: "ELEMENTAL",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Elemental.webp",
        url: "/silver-jewellery-elemental+collection",
      },
      {
        value: "BAROQUEWHITES",
        title: "BAROQUE WHITES",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Baroque-Whites.webp",
        url: "/silver-jewellery-baroque+whites+collection",
      },
      {
        value: "AKRUTI",
        title: "AKRUTI",
        img:"https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Akruti.webp",
        url: "/silver-jewellery-akruti+collection",
      }
    ],
    expand: true

  },
  {
    title: "READY TO SHIP",
    key: "5",

    url: "/silver-jewellery-shipping+in+1+day",
    expand: false
  },
  {
    title: "STYLORI",
    key: "6",
    url: "/",
    expand: false
  },
];