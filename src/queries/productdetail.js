import { filterGenerator } from "utils";
// SR3261
export const PRODUCTDETAILS = `query MyQuery($conditionfilter: TransSkuListCondition, $conditionImage: ProductImageCondition, $productnamefilter: TransSkuListFilter, $number: Int) {
  allTransSkuLists(condition: $conditionfilter, filter: $productnamefilter, first: $number) {
    nodes {
      skuSize
      markupPrice
      sellingPrice
      purity
      metalColor
      discountPrice
      generatedSku
      isReadyToShip
      vendorDeliveryTime
      discountPriceTax
      transSkuDescriptionsBySkuId {
        nodes {
          skuDescription
        }
      }
      diamondType
      productListByProductId {
        productName
        productId
        defaultSize
        sizeVarient
        colourVarient
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
        productImagesByProductId(condition: $conditionImage, orderBy: IMAGE_POSITION_ASC) {
          nodes {
            ishover
            imageUrl
            imagePosition
          }
        }
      }
      pricingSkuMaterialsByProductSku {
        nodes {
          costPrice
          component
          discountPrice
        }
      }
      pricingSkuMetalsByProductSku {
        nodes {
          materialName
          discountPrice
          sellingPrice
        }
      }
    }
  }
}


`
export  const CheckForCod= `query CheckForCod($pincode:String) {
  allPincodeMasters(first: 1, condition: {pincode:$pincode}) {
    nodes {
      isDelivery
      maxCartvalue
      minCartvalue
      isCod
      pincode
    }
  }
}
`
export const filterProductMatrix = (type, value) => {
  let fc = { table: "", type: "" }
  switch (type) {
    case "productId": {
      fc = {
        table: "",
        type: "productId"
      }
      break;
    }
    case "sizeVarient": {
      fc = {
        table: "",
        type: "sizeVarient"
      }
      break;
    }
    case "metalColor": {
      fc = {
        table: "transSkuListsByProductId",
        type: "metalColor"
      }
      break;
    }
    case "diamondType": {
      fc = {
        table: "productDiamondsByProductSku",
        type: "diamondType"
      }
      break;
    }
    default: {
      break;
    }
  }

  return filterGenerator(fc.type, value, fc.table);
}

export const conditions = {
  productId: (id) => ({
    "condition": {
      "productId": id
    }
  }),


  generateFilters: (filters) => {
    let filter = {};
    const filterKeys = filters.map(val => val);

    filterKeys.map(k => {
      const fk = String(Object.keys(k));
      const fval = String(Object.values(k));
      const fquery = filterProductMatrix(fk, fval);
      filter = { ...filter, ...fquery };
    })

    if (Object.keys(filter).length > 0) {
      return { filter };
    } else {
      return {};
    }
  }
}