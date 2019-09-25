import { gql } from 'apollo-boost';

export const productlist = gql`query MyQuery {
  allProductLists {
    nodes {
      productName
    }
  }
}
`
export default [
  productlist
]