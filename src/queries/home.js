export const testimonials = `query testimonials {
    allCustomerReviews(condition: {isPublish: true}) {
      nodes {
        productListByProductId {
          productImagesByProductId(condition: {isdefault: true, imagePosition: 1}) {
            nodes {
              imageUrl
              imagePosition
              isdefault
              productColor
              productId
            }
          }
        }
        customerName
        message
        title
        transSkuListByProductSku {
          markupPrice
          skuUrl
        }
      }
    }
  }`;

  export const GOLD_PRICE_AND_CURRENCY_CONVO = `
  query {
    allDailyMetalPrices(condition: { isActive: true }, orderBy: ID_ASC) {
      nodes {
        id
        metalName
        displayName
        displayPrice
        isActive
        createdAt
        updatedAt
      }
    }
    allMasterCountries(condition: { isActive: true }, orderBy: ID_ASC) {
      nodes {
        currency
        currencyAlias
        currencySymbol
        fxConversionRate
        id
        isActive
        iso
        iso3
        name
        nicename
        numcode
        phonecode
      }
    }
  }`;

export const silverStyloriHomepage = `query styloriSilverTestimonials {
    allCustomerReviews(condition: {isPublish: true}, orderBy: IS_PUBLISH_DESC) {
      nodes {
        customerName
        message
      }
    }
  }
  `;

export const silverStyloriAllMasterCollections = `query MyQuery {
    allMasterCollections {
      nodes {
        name
      }
    }
  }`;

export const silverStyloriCollections = (data) => `query MyQuery {
    ${data.map((val) => {
      return `query${val.replace(
        / /g,
        ""
      )}:allProductCollections(condition: {collectionName: "${val}"},filter: {productListByProductId: {isactive: {equalTo: true}}}, first: 1) {
          nodes {
            collectionName
            productListByProductId {
              productImagesByProductId(condition:{imagePosition:2}) {
                nodes {
                  imageUrl
                  imagePosition
                }
              } 
            }
          }
          totalCount
        }`;
    })} 
  }`;

export const allSeoPriorities = (arrayOfCollections) => `
  query seoCollections{
    allSeoUrlPriorities(filter: {attributeName: {equalTo: "Collection"}, attributeValue: {in: [${arrayOfCollections}]}}) {
      nodes {
        attributeName
        attributeValue
        seoUrl
        seoText
      }
    }
  }
  `;

export const customerReviews = `query customerReviews {
    allCustomerReviews(condition: {isPublish: true}, first: 10) {
      nodes {
        customerName
        message
        userprofileId
      }
    }
  }`;

export const ALLSTYLORILANDINGBANNERS = `
query MyQuery {
  allStyloriBanners {
    nodes {
      id
      mobile
      position
      url
      web
    }
  }
}
`;

export const ALLSTYLORISILVERLISTINGPAGE = `
query MyQuery {
  allStyloriSilverBanners 
 {
    nodes {
      id
      mobile
      position
      url
      web
      urlParam
    }
  }
}
`;

export const ALLSTYLORISILVERLANDINGBANNERS = `
query MyQuery {
  allStyloriSilverBanners(condition: {urlParam: "landing"}) {
    nodes {
      id
      mobile
      position
      url
      web
      urlParam
    }
  }
}
`;


export const ALLSPECIFICLISTINGPAGE = `
query MyQuery {
  allStyloriSilverBanners
  (condition: {url: "specificListingPage"}) 
 {
    nodes {
      id
      mobile
      position
      url
      web
      urlParam
    }
  }
}
`;

export const ALLSTYLORISILVERLISTINGBOTTOMBANNERS = `
query MyQuery {
  allStyloriSilverBanners(condition: {urlParam: "bottom"}) {
    nodes {
      id
      mobile
      position
      url
      web
      urlParam
    }
  }
}
`;

export const COUNTRIES = `
query{
  allMasterCountries(condition: { isActive: true }) {
    nodes {
      currency
      currencyAlias
      currencySymbol
      fxConversionRate
      id
      isActive
      iso
      iso3
      name
      nicename
      numcode
      phonecode
    }
  }
}
`

export const ERRORCATCH = `
mutation MyMutation($message: String, $page: String, $error: String) {
  createUiErrorLog(
    input: { uiErrorLog: { message: $message, page: $page, error: $error } }
  ) {
    uiErrorLog {
      message
      id
      page
      error
      updatedAt
      createdAt
    }
  }
}
`;
