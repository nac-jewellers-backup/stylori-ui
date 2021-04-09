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
    name: "GIFTS",
    url: "#",
  },
  {
    name: "READY TO SHIP",
    url: "/silver-jewellery-shipping+in+1+day",
  },
  {
    name: "CSK MERCHANDISE",
    url: "/silver-jewellery-csk+collection",
  },
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
            img:
              "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Bridal-Accessory-Folklore.jpg",
            url: "/silver-bridal+accessories-jewellery-folklore",
          },
          {
            name: "Traditional",
            img:
              "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Bridal-Accessory-Traditional.jpg",
            url: "/silver-bridal+accessories-jewellery-traditional",
          },
          {
            name: "Mudra",
            img:
              "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/Bridal-Accessory-Dmudra.jpg",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/DANGLERS+%26+DROPS.webp",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/SINGLE+LINE+NECKLACES.webp",
        name: "SINGLE LINE NECKLACES",
        url: "/silver-single+line+necklaces-jewellery",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/PENDANT+NECKLACES.webp",
        name: "PENDANT NECKLACES",
        url: "/silver-pendant+necklaces-jewellery",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/STATEMENT+NECKLACES+LONG.webp",
        name: "STATEMENT NECKLACES",
        url: "/silver-statement+necklaces-jewellery",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/LAYERED+NECKLACES.webp",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/CHAIN+BRACELETS.webp",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/TRADITIONAL/Jped+Web/BANGLE.jpg",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/TRADITIONAL/Jped+Web/EARRING.jpg",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/BANGLE.jpg",
        content: "Bangles",
        url: "/silver-bangles-jewellery-Folklore",
      },

      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-B-Accessories.jpg",
        content: "Bridal Accessories",
        url: "/silver-Bridal%20Accessories-jewellery-folklore",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/EARRING.jpg",
        content: "Earrings",
        url: "/silver-earrings-jewellery-folklore",
      },
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-L-Necklace.jpg",
        content: "Long Necklace",
        url: "/silver-long+necklace-jewellery-folklore",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+Category/TRADITIONAL/Webp/BANGLE.webp",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/Ring.jpg",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/BANGLE.jpg",
        content: "Bangles",
        url: "/silver-bangles-jewellery-contemporary",
      },

      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/C-bracelets.jpg",
        content: "Bracelets",
        url: "/silver-bangles-jewellery-contemporary",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/EARRING.jpg",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/RING.jpg",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/EVERYDAY/Jped+Web/EARRING.jpg",
        content: "Earring",
        url: "/silver-earrings-jewellery-everyday",
      },
      {
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/EVERYDAY/Jped+Web/RING.jpg",
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
        img:
          "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/MUDRA/Jped+Web/EARRING.jpg",
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
  "By Collections": {
    header: "By Collections",
    name: [
      // {
      //     name: 'Halo',
      //     url: "/jewellery-from+halo+collection"
      // },
      {
        name: "Daisy Days",
        url: "/jewellery-from+daisy+days+collection",
      },
      {
        name: "Monsoon",
        url: "/jewellery-from+monsoon+collection",
      },
      {
        name: "Mango",
        url: "/jewellery-from+the+summer+collection",
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
        name: "Butterfly",
        url: "/jewellery-butterfly?sort=latest",
      },
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

  StarStruck: {
    header: "StarStruck",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Star.jpg",
        content: "StarStruck",
        url: "/silver-jewellery-starstruck+collection",
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },

  "Baroque Whites Collection": {
    header: "Baroque Whites Collection",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Pearl.jpg",
        content: "Baroque Whites Collection",
        url: "/silver-jewellery-baroque+whites+collection",
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },
  "In love Collection": {
    header: "In love Collection",
    name: [
      {
        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Inlove.jpg",
        content: "In love Collection",
        url: "/silver-jewellery-inlovecollection",
      },
    ].map((val) => {
      return {
        name: val.content,
        url: val.url,
        img: val.img,
      };
    }),
  },
};

//layer 2 named jewellery MOBILE
export const Jewellery = {
  JEWELLERY: {
    NewArrivals: {
      name: "NEW ARRIVALS",
      url: "/silver-jewellery?sort=New%20to%20Stylori&startprice=0&endprice=0",
      icon:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
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
    "In love Collection": {
      name: "In love Collection",
      url: "http://www.stylori.com/silver-jewellery-inlovecollection",
      icon: "",
    },
    StarStruck: {
      name: "StarStruck",
      url: "http://www.stylori.com/silver-jewellery-starstruck+collection",
      icon: "",
    },
    "Baroque Whites Collection": {
      name: "Baroque Whites Collection",
      url: "http://www.stylori.com/silver-jewellery-baroque+whites+collection",
      icon: "",
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
    title: "CSK MERCHANDISE",
    url: "/silver-jewellery-csk+collection",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/CHOKERS.webp",
              content: "CHOKERS",
              url: "/silver-chokers-jewellery",
            },
            {
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/SINGLE+LINE+NECKLACES.webp",
              content: "SINGLE LINE NECKLACES",
              url: "/silver-single+line+necklaces-jewellery",
            },
            {
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/PENDANT+NECKLACES.webp",
              content: "PENDANT NECKLACES",
              url: "/silver-pendant+necklaces-jewellery",
            },
            {
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/STATEMENT+NECKLACES+LONG.webp",
              content: "STATEMENT NECKLACES",
              url: "/silver-statement+necklaces-jewellery",
            },
            {
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/LAYERED+NECKLACES.webp",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/JHUMKAS.webp",
              content: "JHUMKAS",
              url: "/silver-jhumkas+online-earrings-jewellery",
            },
            {
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/DANGLERS+%26+DROPS.webp",
              content: "DANGLERS & DROPS",
              url: "/silver-danglers+drops-earrings-jewellery",
            },
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/HOOKS.webp",
              content: "HOOKS & HOOPS",
              url: "/silver-hooks+hoops-earrings-jewellery",
            },
            {
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/EAR+CUFFS.webp",
              content: "EAR CUFFS",
              url: "/silver-ear+cuffs-earrings-jewellery",
            },
            {
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/CHANDBALI.webp",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Jewellery+Category/Webp/CHAIN+BRACELETS.webp",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/TRADITIONAL/Jped+Web/BANGLE.jpg",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/TRADITIONAL/Jped+Web/EARRING.jpg",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/BANGLE.jpg",
              content: "Bangles",
              url: "/silver-bangles-jewellery-folklore",
            },

            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/F-B-Accessories.jpg",
              content: "Bridal Accessories",
              url: "/silver-bridal+accessories-jewellery-folklore",
            },
            {
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/EARRING.jpg",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/FOLKLORE/Jped+Web/Ring.jpg",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/BANGLE.jpg",
              content: "Bangles",
              url: "/silver-bangles-jewellery-contemporary",
            },

            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Menu+images/C-bracelets.jpg",
              content: "Bracelets",
              url: "/silver-bracelets-jewellery-contemporary",
            },
            {
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/EARRING.jpg",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/CONTEMPORARY/Jpeg+Web/RING.jpg",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/EVERYDAY/Jped+Web/EARRING.jpg",
              content: "Earring",
              url: "/silver-earrings-jewellery-everyday",
            },
            {
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/EVERYDAY/Jped+Web/RING.jpg",
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
              img:
                "https://styloriimages.s3.ap-south-1.amazonaws.com/images/Menu/Silver+Menu/Style+category+jpeg+W/MUDRA/Jped+Web/EARRING.jpg",
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
        value: "In love Collection",
        title: "In love Collection",
        url: "http://stylori.com/silver-jewellery-inlovecollection",
        imgContainer: {
          // bigImage: {
          //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
          //   content: "CHOKERS",
          //   url: "/silver-jewellery-Traditional",
          // },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Inlove.jpg",
              content: "Earings",
              url: "http://stylori.com/silver-jewellery-inlovecollection",
            },
          ],
        },
      },
      {
        value: "StarStruck",
        title: "StarStruck",
        url: "http://www.stylori.com/silver-jewellery-starstruck+collection",
        imgContainer: {
          // bigImage: {
          //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
          //   content: "CHOKERS",
          //   url: "/silver-jewellery-Traditional",
          // },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Star.jpg",
              content: "Earings",
              url: "http://www.stylori.com/silver-jewellery-starstruck+collection",
            },
          ],
        },
      },
      {
        value: "Baroque Whites Collection",
        title: "Baroque Whites Collection",
        url: "http://stylori.com/silver-jewellery-inlovecollection",
        imgContainer: {
          // bigImage: {
          //   img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Style-Dropdown---traditional.jpg",
          //   content: "CHOKERS",
          //   url: "/silver-jewellery-Traditional",
          // },
          imageContainer: [
            {
              img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Silver-collection-Pearl.jpg",
              content: "Earings",
              url: "http://stylori.com/silver-jewellery-inlovecollection",
            },
          ],
        },
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
    ],
  },
};

// *************
