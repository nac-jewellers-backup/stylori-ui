
export const PRODUCTLIST = `query fetchProductDetails($condition: ProductListCondition) {
  allProductLists(condition: $condition, first:17) {
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
          discountPrice
        }
      }
      productImagesByProductId {
        nodes {
          ishover
          imageUrl
          imagePosition
        }
      }
    }
  }
}
`


export const conditions = {
  productId: (id) => ({
    "condition": {
      "productId": id,
      
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