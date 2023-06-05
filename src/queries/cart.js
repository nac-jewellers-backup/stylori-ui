export const CART = `query myquerycart($productList: [String!]) {
  allTransSkuLists(filter: {generatedSku: {in: $productList}}) {
    nodes {
      generatedSku
      purity
      metalColor
      discountPrice
      discount
      minOrderQty
      maxOrderQty
      skuId
      markupPrice
      skuUrl
      
      productListByProductId {
        productId
        productName
        isactive
        productImagesByProductId(filter: {imagePosition: {equalTo: 1}}) {
          nodes {
            imageUrl
          }
        }
        productType
        productMaterialsByProductSku {
          nodes {
            materialName
          }
        }
        productDiamondsByProductSku {
          nodes {
            diamondColour
            diamondShape
            stoneWeight
          }
        }
        productGemstonesByProductSku {
          nodes {
            gemstoneSize
            gemstoneType
            stoneWeight
          }
        }
      }
      skuWeight
      diamondType
      skuSize
    }
  }
}
`
export const ALLORDERS = `query MyQuery($userProfileId: [UUID!]) {
  allOrders(filter: {userProfileId: {in: $userProfileId}}, orderBy: CREATED_AT_DESC, condition: {paymentStatus: "Submitted","Paid"}) {
    nodes {
      paymentStatus
      shoppingCartByCartId {
        discountedPrice
        discount
        shoppingCartItemsByShoppingCartId {
          nodes {
            transSkuListByProductSku {
              discountPrice
              generatedSku
              sellingPrice
              purity
              metalColor
              isReadyToShip
              vendorDeliveryTime
              productListByProductId {
                productImagesByProductId(filter: {isdefault: {equalTo: true}, imagePosition: {equalTo: 1}}) {
                  nodes {
                    imageUrl
                  }
                }
                productName
                productType
                productDiamondsByProductSku {
                  nodes {
                    stoneWeight
                  }
                }
              }
              skuWeight
              markupPrice
              skuSize
            }
            qty
          }
        }
        cartAddressesByCartId(condition: {addressType: 1}) {
          nodes {
            addressline1
            city
            contactNumber
            country
            countryCode
            firstname
            lastname
            pincode
            state
            addressType
          }
        }
        giftwrapsByCartId {
          nodes {
            message
            giftTo
          }
        }
      }
      createdAt
      id
      orderStatus
      paymentMode
    }
  }
}



`
export const UPDATEGIFT = `mutation MyMutation ($cartId:UUID,$id:UUID!,$message:String,$giftTo:String) {
  updateGiftwrapById(
    input: {giftwrapPatch: {cartId:$cartId , message: $message,giftTo:$giftTo}, id: $id}
  ) {
    giftwrap {
      cartId
      message
      id
      giftTo
    }
  }
}`


// query MyQuery($userProfileId: [UUID!]) {
//   allOrders(filter: {id: {in: $userProfileId}}) {
//     nodes {
//       shoppingCartByCartId {
//         shoppingCartItemsByShoppingCartId {
//           nodes {
//             transSkuListByProductSku {
//               discountPrice
//               generatedSku
//               sellingPrice
//               purity
//               metalColor
//               isReadyToShip
//               vendorDeliveryTime
//               productListByProductId {
//                 productImagesByProductId(filter: {isdefault: {equalTo: true}, imagePosition: {equalTo: 1}}) {
//                   nodes {
//                     imageUrl
//                   }
//                 }
//                 productName
//                 productDiamondsByProductSku {
//                   nodes {
//                     stoneWeight
//                   }
//                 }
//               }
//               skuWeight
//               markupPrice
//               skuSize
//             }
//           }
//         }
//         cartAddressesByCartId {
//           nodes {
//             addressline1
//             city
//             contactNumber
//             country
//             countryCode
//             firstname
//             lastname
//             pincode
//             state
//           }
//         }
//         giftwrapsByCartId {
//           nodes {
//             message
//             giftTo
//           }
//         }
//       }
//       createdAt
//       id
//     }
//   }
// }

export const ORDERSUCCESSFUL = `query MyQuery($orderId: OrderCondition) {
  allOrders(condition: $orderId) {
    nodes {
      paymentMode
      shoppingCartByCartId {
        discountedPrice
        discount
        shoppingCartItemsByShoppingCartId {
          nodes {
            transSkuListByProductSku {
              discountPrice
              discount
              generatedSku
              sellingPrice
              purity
              metalColor
              isReadyToShip
              vendorDeliveryTime
              productListByProductId {
                productImagesByProductId(filter: {isdefault: {equalTo: true}, imagePosition: {equalTo: 1}}) {
                  nodes {
                    imageUrl
                  }
                }
                productName
                productType
                productDiamondsByProductSku {
                  nodes {
                    stoneWeight
                  }
                }
              }
              skuWeight
              markupPrice
              skuSize
            }
            qty
          }
        }
        giftwrapsByCartId {
          nodes {
            message
            giftTo
          }
        }
        cartAddressesByCartId(condition: {addressType: 1}) {
          nodes {
            addressline1
            city
            contactNumber
            country
            countryCode
            firstname
            lastname
            pincode
            state
            addressType
          }
        }
      }
      createdAt
      id
    }
  }
}


`
export const ALLUSERWISHLISTS = `query MyQuery($userprofileId: [UUID!]) {
  allUserWhislists(filter: {userprofileId: {in: $userprofileId}, isActive: {equalTo: true}}) {
    nodes {
      userprofileId
      productId
      skuId
      productListByProductId {
        productName
        productImagesByProductId(condition: {isdefault: true, imagePosition: 1}) {
          nodes {
            imageUrl
          }
        }
        isactive
      }
      transSkuListBySkuId {
        discountPrice
        markupPrice
        generatedSku
      }
    }
  }
}

`
export const FetchSku = `query MyQuery($CartId:ShoppingCartItemCondition) {
  allShoppingCartItems(condition: $CartId) {
    nodes {
      transSkuListByProductSku {
        generatedSku

      }
    }
  }
}

`
export const FetchCartId = `query FetchCartId($UserId: ShoppingCartCondition) {
  allShoppingCarts(condition: $UserId, orderBy: UPDATED_AT_DESC, first: 1) {
    nodes {
      userprofileId
      id
      status
      shoppingCartItemsByShoppingCartId {
        nodes {
          qty
          productSku
          price
          isComboOffer
          comboMainProduct
        }
      }
    }
  }
}


`
export const USERPROFILE = `query MyQuery($id: UUID!) {
  userProfileById(id: $id) {
    firstName
    lastName
    email
    country
    countryCode
    salutation
    city
    mobile
    id
    pincode
  }
}

`

export const ComboCart = `query MyQuery($mainProduct: String!) {
  productComboOfferByMainProduct(mainProduct: $mainProduct) {
    discountType
    discountValue
    offeredProducts
    mainProduct
  }
}

`
export const TotalAmountCheckout = `query MyQuery($CartId:ShoppingCartItemCondition) {
  allShoppingCartItems(condition: $CartId) {
    nodes {
      isComboOffer
      productSku
      shoppingCartByShoppingCartId {
        discount
        discountedPrice
      }
    }
  }
}

`
