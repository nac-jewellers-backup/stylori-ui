export const testimonials = `query testimonials {
    allCustomerReviews(condition: {isPublish: true}) {
      nodes {
        productListByProductId {
          productImagesByProductId(condition: {isdefault: true, imagePosition: 1}) {
            nodes {
              imageUrl
              imagePosition
              isdefault
              productColor
              productId
            }
          }
        }
        customerName
        message
        title
        transSkuListByProductSku {
          markupPrice
          skuUrl
        }
      }
    }
  }`

  export const silverStyloriHomepage = `query styloriSilverTestimonials {
    allCustomerReviews(condition: {isPublish: true}, orderBy: IS_PUBLISH_DESC) {
      nodes {
        customerName
        message
      }
    }
  }
  `