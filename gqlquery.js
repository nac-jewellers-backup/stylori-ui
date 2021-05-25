var PRODUCTDETAILS = `query MyQuery($conditionfilter: TransSkuListCondition, $conditionImage: ProductImageCondition, $productnamefilter: TransSkuListFilter, $number: Int) {
     allTransSkuLists(
       condition: $conditionfilter
       filter: $productnamefilter
       first: $number
     ) {
       nodes {
         skuSize
         markupPrice
         sellingPrice
         purity
         discount
         skuWeight
         isActive
         metalColor
         maxOrderQty
         minOrderQty
         isActive
         discountPrice
         generatedSku
         skuId
         isReadyToShip
         vendorDeliveryTime
         discountPriceTax
         markupPriceTax
         transSkuDescriptionsBySkuId {
           nodes {
             skuDescription
             ringsizeImage
             certificate
           }
         }
         diamondType
         productListByProductId {
           prodDescription
           productName
           productId
           defaultSize
           width
           height
           isactive
           sizeVarient
           colourVarient
           earringBacking
           defaultWeight
           productType
           productDiamondsByProductSku {
             nodes {
               diamondClarity
               diamondColour
               diamondType
               stoneWeight
               diamondShape
               diamondSettings
               stoneCount
             }
           }
           productGemstonesByProductSku {
             nodes {
               gemstoneType
               gemstoneSize
               gemstoneShape
               gemstoneSetting
               productSku
               stoneCount
               stoneWeight
             }
           }
           productImagesByProductId(
             condition: $conditionImage
             orderBy: IMAGE_POSITION_ASC
           ) {
             nodes {
               ishover
               imageUrl
               imagePosition
               productColor
             }
           }
           productMaterialsByProductSku {
             nodes {
               materialName
             }
           }
         }
         pricingSkuMaterialsByProductSku {
           nodes {
             materialName
             component
             discountPrice
             sellingPrice
             markup
           }
         }
         pricingSkuMetalsByProductSku {
           nodes {
             materialName
             discountPrice
             sellingPrice
             markup
           }
         }
       }
     }
   }
   `;
module.exports = { PRODUCTDETAILS };
