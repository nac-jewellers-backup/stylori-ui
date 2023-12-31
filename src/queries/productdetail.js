import { filterGenerator } from "utils";
// SR3261
export const PRODUCTDETAILS = `query MyQuery($conditionfilter: TransSkuListCondition, $conditionImage: ProductImageCondition, $productnamefilter: TransSkuListFilter, $number: Int) {
  allTransSkuLists(
    condition: $conditionfilter
    filter: $productnamefilter
    first: $number
  ) {
    nodes {
      skuSize
      markupPrice
      sellingPrice
      purity
      discount
      skuWeight
      isActive
      metalColor
      maxOrderQty
      minOrderQty
      isActive
      discountPrice
      generatedSku
      skuId
      isReadyToShip
      vendorDeliveryTime
      discountPriceTax
      markupPriceTax
      transSkuDescriptionsBySkuId {
        nodes {
          skuDescription
          ringsizeImage
          certificate
        }
      }
      diamondType
      productListByProductId {
        prodDescription
        productName
        productId
        defaultSize
        width
        height
        isactive
        sizeVarient
        colourVarient
        earringBacking
        defaultWeight
        productType
        productDiamondsByProductSku {
          nodes {
            diamondClarity
            diamondColour
            diamondType
            stoneWeight
            diamondShape
            diamondSettings
            stoneCount
          }
        }
        productGemstonesByProductSku {
          nodes {
            gemstoneType
            gemstoneSize
            gemstoneShape
            gemstoneSetting
            productSku
            stoneCount
            stoneWeight
          }
        }
        productImagesByProductId(
          condition: $conditionImage
          orderBy: IMAGE_POSITION_ASC
        ) {
          nodes {
            ishover
            imageUrl
            imagePosition
            productColor
          }
        }
        productMaterialsByProductSku {
          nodes {
            materialName
          }
        }
      }
      pricingSkuMaterialsByProductSku {
        nodes {
          materialName
          component
          discountPrice
          sellingPrice
          markup
        }
      }
      pricingSkuMetalsByProductSku {
        nodes {
          materialName
          discountPrice
          sellingPrice
          markup
        }
      }
    }
  }
}


`;
export const CheckForCod = `query CheckForCod($pincode:String,$country:String) {
  allPincodeMasters(first: 1, condition: {pincode:$pincode,country:$country}) {
    nodes {
      isDelivery
      maxCartvalue
      minCartvalue
      isCod
      pincode
      state
      country
      district
     }
  }
}
`;


export const CUSTOMERREVIEWS = `query MyQuery($productSku: String) {
  allCustomerReviews(condition: {productSku: $productSku, isPublish: true}, last: 5) {
    nodes {
      message
      title
      rating
      customerName
    }
  }
}
`;
export const USERPROFILES = `query MyQuery($userId: UUID) {
  allUserProfiles(condition: {id: $userId}) {
    nodes {
      id
      firstName
      email
    }
  }
}
`;

export const GIFTWRAPS = `query MyQuery($cardId: UUID) {
  allGiftwraps(condition: {cartId: $cardId}, orderBy: CREATED_AT_DESC) {
    nodes {
      giftTo
      giftFrom
      message
    }
  }
}

`;

export const ADDRESSDETAILS = `query MyQuery($userprofileId: String) {
  allUserAddresses(condition: {userprofileId: $userprofileId, isActive: true}, orderBy: UPDATED_AT_ASC) {
    nodes {
      addressline1
      addressline2
      id
      city
      contactno : contactNumber
      country
      countryCode
      defaultBilling
      defaultShipping
      firstname
      lastname
      pincode
      state
      isActive
      updatedAt
      createdAt
      salutation
    }
  }
}
`;
export const YouMayAlsoLike = `query MyQuery($filterdata: ProductListFilter,$filterdatatranssku:  TransSkuListFilter,$filterdatatranssku2:  TransSkuListFilter,$filterdata2:ProductListFilter,, $imgcondition:ProductImageCondition,$Conditiondatatranssku:TransSkuListCondition,$Conditiondatatranssku2:TransSkuListCondition ) {
  youMayalsolike1:  allProductLists(filter: $filterdata, orderBy: CREATED_AT_DESC, first:16) {
      nodes {
        productImagesByProductId(condition:$imgcondition){
          nodes{
            imageUrl
          }
        }
        transSkuListsByProductId(condition:$Conditiondatatranssku,filter:$filterdatatranssku) {
          nodes {
            discountPrice
            generatedSku
            skuUrl
        
            productListByProductId{
           
              productMaterialsByProductSku{
                nodes{
                  materialName
                }
              }
            }
          }
        }
        productName
        productType
        createdAt
     
      }
      totalCount
    }
    youMayalsolike2:  allProductLists(filter: $filterdata2, orderBy: CREATED_AT_DESC, first:8) {
      nodes {
           productImagesByProductId(condition:$imgcondition){
          nodes{
            imageUrl
          }
        }
        transSkuListsByProductId(condition:$Conditiondatatranssku2,filter:$filterdatatranssku2) {
          nodes {
            discountPrice
            generatedSku
            skuUrl
         
            productListByProductId{
              
              productMaterialsByProductSku{
                nodes{
                  materialName
                }
              }
            }
          }
        }
        productName
        productType
        createdAt
      }
      totalCount
    }
  }`;
export const youRecentlyViewed = `query youRecentlyViewed($filtersku:  TransSkuListFilter, $imgcondition:ProductImageCondition) {
    allTransSkuLists(filter: $filtersku) {
      nodes {
        discountPrice
        generatedSku
        skuUrl
        productListByProductId {
          productName
          productType
          productMaterialsByProductSku {
            nodes {
              materialName
            }
          }
          productImagesByProductId(condition:$imgcondition) {
            nodes {
              imagePosition
              imageUrl
            }
          }
        }
      }
    }
  }
  `;
export const shopByStyloriSilver = (data) => {
  return `query MyQuery {
 ${data?.map((val) => {
   return `${val}: allProductMaterials(filter: {and: {materialName: {includes: "Silver"}, productListByProductSku: {isactive: {equalTo: true}, productType: {equalTo: "${val}"}}}} first: 3) {
      nodes {
        materialName
        productListByProductSku {
          productType
          productImagesByProductId {
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
}

  `;
};
export const allSeoPriorities = (arrayOfProductTypes) => `
  query seoCollections{
    allSeoUrlPriorities(filter: {attributeName: {equalTo: "Product Type"}, attributeValue: {in: [${arrayOfProductTypes}]}}) {
      nodes {
        attributeName
        attributeValue
        seoUrl
        seoText
      }
    }
  }
  `;
export const checkProductAlreadyExistInCart = (data) => ` {
    allShoppingCartItems(condition: {productSku: "${data.skuId}", shoppingCartId: "${data.cartId}"}) {
      nodes {
        productSku
      }
    }
  }`;

export const filterProductMatrix = (type, value) => {
  let fc = { table: "", type: "" };
  switch (type) {
    case "productId": {
      fc = {
        table: "",
        type: "productId",
      };
      break;
    }
    case "sizeVarient": {
      fc = {
        table: "",
        type: "sizeVarient",
      };
      break;
    }
    case "metalColor": {
      fc = {
        table: "transSkuListsByProductId",
        type: "metalColor",
      };
      break;
    }
    case "diamondType": {
      fc = {
        table: "productDiamondsByProductSku",
        type: "diamondType",
      };
      break;
    }
    default: {
      break;
    }
  }

  return filterGenerator(fc.type, value, fc.table);
};

export const conditions = {
  productId: (id) => ({
    condition: {
      productId: id,
    },
  }),

  generateFilters: (filters) => {
    let filter = {};
    const filterKeys = filters.map((val) => val);

    filterKeys.map((k) => {
      const fk = String(Object.keys(k));
      const fval = String(Object.values(k));
      const fquery = filterProductMatrix(fk, fval);
      filter = { ...filter, ...fquery };
    });

    if (Object.keys(filter).length > 0) {
      return { filter };
    } else {
      return {};
    }
  },
};
