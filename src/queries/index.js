import { gql } from 'apollo-boost';

export const PRODUCTLIST = `
{
  allProductLists {
    nodes {
      productName
      productId
      productSeries
      
    }
  }
}
`
export const PRODUCTDETAILS =`
{
  allProductLists(condition: {productId: "SE1614"}) {
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