import { gql } from 'apollo-boost';

export const productlist = () => gql`
{
    allProductLists(condition: {isactive: true, gender: "", productSeries: 10, height: 1.5}) {
      nodes {
        productSeries
        productName
      }
    }
  }
  
`