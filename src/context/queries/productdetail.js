import { filterGenerator } from "utils";
// SR3261
export const PRODUCTDETAILS = `query fetchProductDetails($conditionfilter:TransSkuListCondition,$filter: ProductListCondition) {
  allProductLists(condition:$filter ) {
    nodes {
      productName
      productId
      defaultSize
      sizeVarient
      colourVarient
      defaultWeight
      productType
      productImagesByProductId (condition: {isdefault: true}) {
        nodes {
          ishover
          imageUrl
          imagePosition
        }
      }
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
      transSkuListsByProductId (condition:$conditionfilter ) {
        nodes {
          skuSize
          markupPrice
          sellingPrice
          purity
          metalColor
          discountPrice
          generatedSku
          transSkuDescriptionsBySkuId {
            nodes {
              skuDescription
            }
          }
          diamondType
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
        }
      }
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