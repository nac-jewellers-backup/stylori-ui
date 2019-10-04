
export const PRODUCTLIST = `query fetchProductDetails($condition: ProductListCondition) {
  allProductLists(condition: $condition, last:50) {
    nodes {
      productName
      productId
      defaultSize
      sizeVarient
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


export const conditions = {
  productId: (id) => ({
    "condition": {
      "productId": id
    }
  }),
  generateCondition: (filters) => {
    console.log(PRODUCTLIST)
    let condition = {};
    const filterKeys = Object.keys(filters);
    console.info('filterKeys', filterKeys, filters);
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