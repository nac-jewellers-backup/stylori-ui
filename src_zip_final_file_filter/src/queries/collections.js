export const COLLECTIONS = `query MyQuery($productId: String) {
    allProductLists(condition: {productId: $productId}) {
        totalCount
        nodes {
          productName
          productId
          transSkuListsByProductId {
            nodes {
              markupPrice
              sellingPrice
              discountPrice
              generatedSku
              productListByProductId {
                productImagesByProductId(condition: {isdefault: true, ishover: true}) {
                  nodes {
                    ishover
                    imageUrl
                    isdefault
                  }
                }
              }
            }
          }
        }
      }
    }`