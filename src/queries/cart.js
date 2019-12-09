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
export const ALLORDERS = `query MyQuery($userProfileId: [UUID!]) {
  allOrders(filter: {userProfileId: {in: $userProfileId}}) {
    nodes {
      orderStatus
      paymentMode
      paymentStatus
      userProfileId
      createdAt
      updatedAt
    }
  }
}
`