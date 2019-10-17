export const CART = `query MyQuery($productList: [String!]) {
    allProductLists(filter: {transSkuListsByProductId: {some: {generatedSku: {in: $productList}}}}) {
      nodes {
        productName
        productId
        transSkuListsByProductId {
          nodes {
            generatedSku
            purity
            metalColor
            discountPrice
            markupPrice
          }
        }
        productImagesByProductId {
          nodes {
            imageUrl
          }
        }
      }
    }
  }`