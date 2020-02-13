import moment from "moment";
// export const productsDetails = [
//     {
//         header: "Product Details",
//         namedetail: [{
//             name: "Product Code",
//             details: "SP0-110000"
//         },
//         {
//             name: "Metal Type",
//             details: "18K Yellow Gold"
//         }, {
//             name: "Approximate",
//             details: "1.463"
//         }],
//     }, {
//         header: "Diamond Details ",


//         namedetail: [
//             {
//                 name: "Total No of ",
//             },
//             {
//                 name: "Diamonds",
//                 details: "35"
//             },
//             {
//                 name: "Color",
//                 details: "IF"
//             },
//             {
//                 name: "Clarity",
//                 details: "SI"
//             },

//         ],
//     },
//     {
//         header: "Price Breakup",
//         namedetail: [{
//             name: "Metal",
//             details: "SP0679-18110000"
//         },
//         {
//             name: "Diamond",
//             details: "18K Yellow Gold"
//         }, {
//             name: "Making Charges",
//             details: "1.463"
//         },
//         {
//             name: "GST",
//             details: "1.463"
//         },
//         ],
//     },
// ];

// export const dataCard1 = [
//     {
//         offerPrice: "23000.10",
//         price: "29000.0",
//         title: "Diamond Pendant Ring",
//         dis: 'Pendants set in 18 Kt Yellow Gold 3.95 gm with Diamonds (0.52 ct, GH - SI )',
//         save: '5999.9',
//         image: {
//             placeImage:
//                 "https://assets-cdn.stylori.com/313x313/images/product/SE0176/SE0176-1R.jpg",
//             hoverImage:
//                 "https://assets-cdn.stylori.com/313x313/images/product/SE0176/HOVER-SE0176-2R.jpg"
//         },

//     },
// ]
// export const fadeImages = [
//     'http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg',
//     'https://images7.alphacoders.com/421/421542.jpg ',
//     'http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg',
//     'https://images7.alphacoders.com/421/421542.jpg ',
//     'http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg',
//     'https://images7.alphacoders.com/421/421542.jpg ',
// ];
// export const breadcrumsdata = [
//     "Shopping Bag",
//     "Login/ Register",
//     "Address Detail",
//     "Payment Options",
//     "Order Confirmation",
// ]
// export const cartsubdata = [
//     {
//         name: "100% Certified   Jewellery  ",
//         icon: "https://assets.stylori.com/images/static/icon-star.png"
//     }, {
//         name: " Secure  Payments   ",
//         icon: "https://assets.stylori.com/images/static/icon-lock.png"
//     }, {
//         name: "  Free Insured    Shipping   ",
//         icon: "https://assets.stylori.com/images/static/icon-van.png"
//     }, {
//         name: "  25 - Day   Returns   ",
//         icon: "https://assets.stylori.com/images/static/icon-return.png"
//     }
// ]

const generateShipsBy = (readytoship, vendorDeliveryTime) => {
    var isReadytoShip = readytoship
    var numberOfDays = vendorDeliveryTime
    var date = moment().format(' h a')
    if (isReadytoShip) {
        if (JSON.stringify(date) > " 1 pm") {
            return 'Ships by' + ' ' + moment().add(1, 'days').format('Do MMMM YYYY');
        }
    }

    else {
        return 'Ships by' + ' ' + moment().add(numberOfDays, 'days').format('Do MMMM YYYY');
    }
}
export default function (data) {
    let mapperdata = [];
    try {
        mapperdata = data.data.allTransSkuLists.nodes;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(k => {
        let _d;

        try {
            _d = {
                generatedSku: k.generatedSku,
                skuUrl:k.skuUrl,
                materialName: k.productListByProductId.productMaterialsByProductSku.nodes === undefined ? '' : k.productListByProductId.productMaterialsByProductSku.nodes.map(val => {
                    return val.materialName
                }),
                // materialName: k.productMaterialsByProductSku.nodes[0].materialName,
                productType: k.productListByProductId.productType,
                prdheader: k.productListByProductId.productName,
                // allorderdata: allorderdata,
                productId: k.productListByProductId && k.productListByProductId.productId,
                shipby: generateShipsBy(k.isReadyToShip, k.vendorDeliveryTime),
                isReadyToShip: k.isReadyToShip,
                productsDetails: [
                    //                     Quality	
                    // Metal	
                    // Gold 
                    // Product Code
                    {
                        header: "Product Details",
                        pro_header: k.productListByProductId.productName,
                        namedetail: [
                            {
                                name: "Product Code",
                                details: k.generatedSku
                            },
                            {
                                name: k.metalColor.length > 0 ? "Metal" : "",
                                details: k.purity + ' ' + k.metalColor
                            },
                            {
                                name: k.productListByProductId.productType == "Kada"? "Metal Weight (Gm)" : "Gold Weight (Gm)",
                                details: k.skuWeight
                            },
                            {
                                name: k.skuSize && k.skuSize.length > 0 ? "Size" : null,
                                details: k.skuSize
                            },
                            {
                                name: k.diamondType&&k.diamondType.length > 0 ? "Diamond Quality" : "",
                                details: k.diamondType
                            },
                      
                         
                            {
                                name:k.productListByProductId.productDiamondsByProductSku.nodes.length>0 ? "Diamond Weight (Ct)" : null,
                                details:k.productListByProductId.productDiamondsByProductSku.nodes.length>0 ?k.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight: null
                            },
                            {
                                name:k.productListByProductId.productGemstonesByProductSku.nodes.length>0 ?"Gemstone Type" : null,
                                details:k.productListByProductId.productGemstonesByProductSku.nodes.length>0 ? k.productListByProductId.productGemstonesByProductSku.nodes[0].gemstoneType : null
                            },
                            {
                                name:k.productListByProductId.productGemstonesByProductSku.nodes.length>0 ? "Gemstone Weight" : null,
                                details:k.productListByProductId.productGemstonesByProductSku.nodes.length>0 ? k.productListByProductId.productGemstonesByProductSku.nodes[0].stoneWeight : null
                            },
               
                         
                            
                        ], 
                     
                    },
                ],
                // 
                // 
                dataCard1: [
                    {
                        offerPrice: k.markupPrice,
                        price: k.discountPrice,
                        title: "Diamond Pendant Ring",
                        dis: 'Pendants set in 18 Kt Yellow Gold 3.95 gm with Diamonds (0.52 ct, GH - SI )',
                        save: '5999.9',
                        discount:k && k.discount ? k.discount : null,
                        image: {
                            placeImage:
                                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/SE0176-1R.jpg",
                            hoverImage:
                                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/HOVER-SE0176-2R.jpg"
                        },

                    },
                ],
                // fadeImages: (k.productListByProductId.productImagesByProductId.nodes.map(val => (
                //     // `https://assets.stylori.net/base_images/${val.imageUrl}`
                //     val.imageUrl
                // ))),
                fadeImages: k.productListByProductId.productImagesByProductId.nodes,
                breadcrumsdata: [
                    { title: "Shopping Bag" },
                    { title: "Login/ Register" },
                    { title: "Address Detail" },
                    { title: "Order Confirmation" },
                    { title: "Payment Options" },
                ],
                cartsubdata: [
                    {
                        name: "100% Certified   Jewellery  ",
                        icon: "https://assets.stylori.com/images/static/icon-star.png"
                    }, {
                        name: " Secure  Payments   ",
                        icon: "https://assets.stylori.com/images/static/icon-lock.png"
                    }, {
                        name: "  Free Insured    Shipping   ",
                        icon: "https://assets.stylori.com/images/static/icon-van.png"
                    }, {
                        name: "  25 - Day   Returns   ",
                        icon: "https://assets.stylori.com/images/static/icon-return.png"
                    }
                ]
            }
        } catch (error) {
            console.info('error', error);
            throw error;
        }

        return _d;
    })
    // console.info('_format', _format);
    return _format;


}


/*
{
  "productList": ["SB0010-18220000","SB0011-18520000"]
}

query MyQuery($productList: [String!]) {
  allProductLists(filter: {transSkuListsByProductId: {some: {generatedSku: {in: $productList}}}}) {
    nodes {
      productName
      productId
      transSkuListsByProductId {
        nodes {
          generatedSku
        }
      }
    }
  }
}

*/