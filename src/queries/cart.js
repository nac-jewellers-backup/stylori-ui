export const CART = `query myquerycart($productList: [String!]) {
  allTransSkuLists(filter: {generatedSku: {in: $productList}}) {
    nodes {
      generatedSku
      purity
      metalColor
      discountPrice
      markupPrice
      productListByProductId {
        productId
        productName
        productImagesByProductId(filter: {isdefault: {equalTo: true}, imagePosition: {equalTo: 1}}) {
          nodes {
            imageUrl
          }
        }
        productType
        productMaterialsByProductSku {
          nodes {
            materialName
          }
        }
       }
      skuWeight
      diamondType
      skuSize
    }
  }
}`