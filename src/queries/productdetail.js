export const PRODUCTDETAILS = `
query fetchProductDetails($condition: ProductListCondition){
    allProductLists(condition: $condition) {
      nodes {
        productName
        productId
        productSeries
        productType
        width
      }
    }
  }
  
`

export const conditions = {
    productId: (id) => ({
        "condition": {
            "productId": id
        }
    })
}