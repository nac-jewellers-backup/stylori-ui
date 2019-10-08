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
// query fetchProductDetails($condition: ProductListCondition) {
//   allProductLists(condition: $condition) {
//     nodes {
//       productName
//       productId
//       productDiamondsByProductSku {
//         nodes {
//           diamondClarity
//           diamondColour
//           diamondType
//         }
//       }
//     }
//   }
// }
export const conditions = {

  productId: (id) => ({
    "condition": {
      "productId": id

    }

  }),

  generateCondition: (filters) => {

    let condition = {};
    const filterKeys = Object.keys(filters);
    filterKeys.map(k => {
      switch (k) {
        case "productId":
          condition["productId"] = filters[k];
          break;
        default: {

        }
      }
    })
    return condition;
  }
}