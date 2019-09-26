import { gql } from 'apollo-boost';

export const PRODUCTLIST = `
{
  allProductLists {
    nodes {
      productName
      productId
<<<<<<< HEAD
      productType
=======
      productSeries
      
>>>>>>> 96c8db4d575a20657be0a9636134b20ad5ad4284
    }
  }
}
`
