export const resolutions = [
  // { res: '318x318', size: '375w' },
  // { res: '372x372', size: '500w' },
  { res: "1000x1000", size: "1440w" },
  // { res: '422x422', size: '600w' },
  // { res: '247x247', size: '768w' },
  // { res: '204x204', size: '1024w' },
  // { res: '543x543', size: '2560w' },
];

// export const detailFilterGen = (type, value, table, clause = "equalTo") => {
//   if (type === 'productId') {
//     return {
//       [type]: {
//         [clause]: value
//       }
//     }
//   }
//   else {

//       let values = {};
//   // Object.keys(kv).map(k => {
//     values[type] = { [clause]: value }
//   // });
//   return values;
//   }
// }

export const filterGenerator = (
  type,
  value,
  table,
  filter,
  clause = "equalTo"
) => {
  var _obj = Object.keys(filter).filter((val) => {
    if (val === "transSkuListsByProductId") 
    return true;
  });
  if (table.length > 0) {
    if (_obj[0] === table) {
      return {
        [table]: {
          some: {
            ...filter.transSkuListsByProductId.some,
            [type]: {
              [clause]: value,
            },
          },
        },
      };
    } else {
      return {
        [table]: {
          some: {
            [type]: {
              [clause]: value,
            },
          },
        },
      };
    }
  } else {
    return {
      [type]: {
        [clause]: value,
      },
    };
  }
};

export const filterTransSkuGenerator = (type, value) => {
  if (type !== "price") {
    let clause = "equalTo";
    return {
      [type]: {
        [clause]: value,
      },
    };
  }
};
async function supportsWebp() {
  if (!window.createImageBitmap) return false;

  const webpData =
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  const blob = await fetch(webpData).then((r) => {
    return r.blob();
  });
  let test = await createImageBitmap(blob).then(
    () => true,
    () => false
  );
  return test;
}

//  const { GlobalCtx, setGlobaCtx } = React.useContext(GlobalContext);

// function status(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return Promise.resolve(response);
//   } else {
//     return Promise.reject(new Error(response.statusText));
//   }
// }

// function json(response) {
//   return response.json();
// }

export const lambda_func_front_end = async () => {
  // const { GlobalCtx, setGlobaCtx } = React.useContext(GlobalContext);
  var browser_type = null;
  var window_width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  // (async () => {
  let a = await supportsWebp();
  if (a) {
    browser_type = ".webp";
  } else {
    browser_type = ".jpg";
  }
  // })();
  var browserDetails = {};
  browserDetails["browser_type"] = browser_type;
  browserDetails["browser_width"] = window_width;
  localStorage.setItem("browserDetails", JSON.stringify(browserDetails));
  // localStorage.setItem('screen_width',window_width)
  // await setGlobaCtx({browser_type:GlobalCtx.browser_type})
  // return await {browser_type, window_width}
};
// lambda_func_front_end()

export const filtersLabelMapperStylori = (filterName) => {
  let mappedFilterName;
  switch (filterName) {
    case "Product Type":
      mappedFilterName = filterName;
      break;
    case "Style":
      mappedFilterName = filterName;
      break;
    case "Theme":
      mappedFilterName = filterName;
      break;
    case "Occasion":
      mappedFilterName = filterName;
      break;
    case "Material":
      mappedFilterName = filterName;
      break;
    case "Collection":
      mappedFilterName = filterName;
      break;
    case "Metal Purity":
      mappedFilterName = filterName;
      break;
    case "Metal Color":
      mappedFilterName = filterName;
      break;
    case "Stone Shape":
      mappedFilterName = filterName;
      break;
    case "Gender":
      mappedFilterName = filterName;
      break;
    case "Stone Color":
      mappedFilterName = filterName;
      break;
    case "No Of Stones":
      mappedFilterName = filterName;
      break;
    case "Offers":
      mappedFilterName = filterName;
      break;
    case "Availability":
      mappedFilterName = filterName;
      break;
    default:
      mappedFilterName = filterName;
  }

  return mappedFilterName;
};

// export const filtersLabelMapperStyloriSilver = (filterName) => {
//   switch (filterName) {
//     case "Product Type":
//       // code block
//       break;
//     case "Metal Color":
//       // code block
//       break;
//     default:
//     // code block
//   }
// };

const footerData = [
  {
    url: "aboutus",
    Title: "About Stylori",
  },
  {
    url: "/account-profile",
    Title: "My Account",
  },
  {
    url: "/productcare",
    Title: "Product Care",
  },
  {
    url: "/privacyPolicy",
    Title: "Privacy & Cookie Policy",
  },
  {
    url: "/faqs",
    Title: "FAQ",
  },

  {
    url: "/deliveryreturns",
    Title: "Shipping & Returns",
  },
  {
    url: "/contactus",
    Title: "Contact us",
  },
  {
    url: "/termsconditions",
    Title: "Terms & Conditions",
  },
  {
    url: "/careers",
    Title: "Careers",
  },
];
const footerData1 = [
  {
    url: "/aboutus",
    Title: "About Stylori",
  },
  // {
  //     url: "",
  //     Title: "Careers"
  // },

  // {
  //     url: "",
  //     Title: "Contact Us"
  // },
  {
    url: "/account-profile",
    Title: "My Account",
  },
  {
    url: "/productcare",
    Title: "Product Care",
  },
  // {
  //     url: "/deliveryreturns",
  //     Title: "Shopping & Returns"
  // },
];
const footerData2 = [
  // {
  //     url: "/account-profile",
  //     Title: "My Account"
  // },
  // {
  //     url: "/faqs",
  //     Title: "Frequently Asked Questions"
  // },
  {
    url: "/faqs",
    Title: "Frequently Asked Questions",
  },
  {
    url: "/deliveryreturns",
    Title: "Shipping & Returns",
  },
  {
    url: "/privacyPolicy",
    Title: "Privacy & Cookie Policy",
  },
];
const footerData3 = [
  // {
  //     url: "/productcare",
  //     Title: "Product Care"
  // },
  // {
  //     url: "/privacypolicy",
  //     Title: "Privacy & Cookie Policy"
  // },
  {
    url: "/termsconditions",
    Title: "Terms & Conditions",
  },
  {
    url: "/contactus",
    Title: "Contact us",
  },
  {
    url: "/careers",
    Title: "Careers",
  },
];

const silverFooterCat = [
  {
    url: "",
    Title: "Jewellery",
  },
  {
    url: "",
    Title: "Style",
  },
  {
    url: "",
    Title: "Collections",
  },
  {
    url: "",
    Title: "Finish",
  },
  {
    url: "",
    Title: "Ready to Ship",
  },
  {
    url: "",
    Title: "CSK Merchandise",
  },
];
const silverFooterUs = [
  {
    url: "",
    Title: "NAC Jewellers",
  },
  {
    url: "",
    Title: "Stylori",
  },
  {
    url: "",
    Title: "Press & Media",
  },
];

const silverFooterService = [
  {
    url: "",
    Title: "My Account",
  },
  {
    url: "",
    Title: "Shipping & Return",
  },
  {
    url: "",
    Title: "FAQ's",
  },
];

export const shopByCategory = [
  {
    url: "/silver-jewellery",
    title: "Jewellery",
  },
  {
    url: "/silver-cocktail-jewellery",
    title: "Style",
  },
  {
    url: "/silver-jewellery-from+loops+collection",
    title: "Collections",
  },
  {
    url: "#",
    title: "Finish",
  },
  {
    url: "/silver-jewellery-shipping+in+1+day",
    title: "Ready to ship",
  },
];

export const aboutUs = [
  {
    url: "https://www.nacjewellers.com/aboutus",
    title: "NAC Jewellers",
  },
  {
    url: "/aboutus",
    title: "Stylori",
  },
  {
    url: "/privacyPolicy",
    title: "Press & Media",
  },
];

export const customerService = [
  {
    url: "/account-profile",
    title: "My Account",
  },
  {
    url: "/deliveryreturns",
    title: "Shipping & Return",
  },
  {
    url: "/faqs",
    title: "FAQs",
  },
];

export const contactUs = [
  {
    url: `https://wa.me/919952625252?text=Hi - ${window.location.href}`,
    title: "Whatsapp:- +91 99526 25252",
  },
  {
    url: "mailto: hello@stylori.com",
    title: "Email:- hello@stylori.com",
  },
  {
    url: "tel:18001020330",
    title: "Customer Care:- 1800 102 0330",
  },
];
