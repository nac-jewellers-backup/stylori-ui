import { PRODUCTLIST } from "queries";

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