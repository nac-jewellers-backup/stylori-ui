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
        productImagesByProductId {
          nodes {
            imageUrl
          }
        }
      }
    }
  }
}`