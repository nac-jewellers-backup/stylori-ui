export const CART = `query myquerycart($productList: [String!]) {
  allTransSkuLists(filter: {generatedSku: {in: $productList}}) {
    nodes {
      generatedSku
      purity
      metalColor
      discountPrice
      markupPrice
      
      productListByProductId {
        productId
        productName
        productImagesByProductId(filter: {isdefault: {equalTo: true}, imagePosition: {equalTo: 1}}) {
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
       }
      skuWeight
      diamondType
      skuSize
    }
  }
}`
export const ALLORDERS = `query MyQuery($userProfileId: [UUID!]) {
  allOrders(filter: {userProfileId: {in: $userProfileId}}) {
    nodes {
      shoppingCartByCartId {
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
                productDiamondsByProductSku {
                  nodes {
                    stoneWeight
                  }
                }
              }
              skuWeight
              markupPrice
            }
            price
          }
        }
        cartAddressesByCartId {
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
