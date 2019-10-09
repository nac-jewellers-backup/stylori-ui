export const PRODUCTDETAILS = `query fetchProductDetails($condition: ProductListCondition) {
  allProductLists(condition: $condition, first: 20) {
    nodes {
      productName
      productId
      defaultSize
      sizeVarient
      colourVarient
      defaultWeight
      productType
      productImagesByProductId {
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
      transSkuListsByProductId(condition: {isdefault: true}) {
        nodes {
          skuSize
          markupPrice
          sellingPrice
          purity
          metalColor
            transSkuDescriptionsBySkuId {
            nodes {
              skuDescription
            }
          }
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
export const conditions = {
  productId: (id) => ({
    "condition": {
      "productId": id
    }
  }),

  generateCondition: (filters) => {
    debugger
    let condition = {};
    const filterKeys = filters.paramsArrayOfObject.map(val => String(Object.keys(val)))
    filterKeys.map(k => {
      switch (k) {
        case "productId":
          condition["productId"] = ``;
          break;
        case "ringSize":
          condition["ringSize"] = ``;
          break;
        case "metalPurity":
          condition["metalPurity"] = ``;
          break;
        case "diamondClarity":
          condition["diamondClarity"] = `query fetchProductDetails($condition: ProductListCondition) {
            allProductLists(condition: $condition, first: 20) {
              nodes {
               productDiamondsByProductSku {
                      nodes {
                        diamondClarity
                      }
                    }
            }
           }
          }`;
          break;
        default:
      }
    })
    return condition;
  }
}