import { gql } from 'apollo-boost';

export const PRODUCTLIST = gql`query MyQuery {
  allProductLists {
    nodes {
      productName
    }
  }
}
`
export default [
  PRODUCTLIST
]