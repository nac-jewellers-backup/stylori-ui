const { gql } = require("graphql-request");

var PRODUCTDETAILS = gql`
  query MyQuery(
    $conditionfilter: TransSkuListCondition
    $conditionImage: ProductImageCondition
    $productnamefilter: TransSkuListFilter
    $number: Int
  ) {
    allTransSkuLists(condition: $conditionfilter, filter: $productnamefilter, first: $number) {
      nodes {
        markupPrice
        transSkuDescriptionsBySkuId {
          nodes {
            skuDescription
          }
        }
        productListByProductId {
          productName
          productImagesByProductId(condition: $conditionImage, orderBy: IMAGE_POSITION_ASC, first: 1) {
            nodes {
              imageUrl
            }
          }
        }
      }
    }
  }
`;

var seoUrlResult = gql`
  query CheckForSeo($seofilter: SeoUrlPriorityFilter) {
    allSeoUrlPriorities(filter: $seofilter) {
      nodes {
        attributeName
        attributeValue
      }
    }
  }
`;

module.exports = { PRODUCTDETAILS, seoUrlResult };
