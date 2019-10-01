
export const PRODUCTLIST = `
query fetchProductDetails($condition: ProductListCondition){
  allProductLists(condition: $condition, first: 10) {
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