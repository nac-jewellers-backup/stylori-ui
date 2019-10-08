
export const PRODUCTLIST = `query fetchProductDetails($condition: ProductListCondition) {
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
          purity
          markupPrice
          sellingPrice
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