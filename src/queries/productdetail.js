export const PRODUCTDETAILS = `query fetchProductDetails($condition: ProductListCondition) {
  allProductLists(condition: $condition, first: 10) {
    nodes {
      productName
      productId
      defaultSize
      sizeVarient
      colourVarient
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
      transSkuListsByProductId {
        nodes {
          skuSize
          purity
          markupPrice
          sellingPrice
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