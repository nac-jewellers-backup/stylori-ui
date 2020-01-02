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
//         icon: "https://assets-cdn.stylori.com/images/static/icon-star.png"
//     }, {
//         name: " Secure  Payments   ",
//         icon: "https://assets-cdn.stylori.com/images/static/icon-lock.png"
//     }, {
//         name: "  Free Insured    Shipping   ",
//         icon: "https://assets-cdn.stylori.com/images/static/icon-van.png"
//     }, {
//         name: "  25 - Day   Returns   ",
//         icon: "https://assets-cdn.stylori.com/images/static/icon-return.png"
//     }
// ]


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
                materialName: k.productListByProductId.productMaterialsByProductSku.nodes === undefined ? '' : k.productListByProductId.productMaterialsByProductSku.nodes.map(val => {
                    return val.materialName
                }),
                // materialName: k.productMaterialsByProductSku.nodes[0].materialName,
                productType: k.productListByProductId.productType,
                prdheader: k.productListByProductId.productName,
                // allorderdata: allorderdata,
                productId: k.productListByProductId && k.productListByProductId.productId,
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
                                name: "Quality",
                                details: k.diamondType
                            },
                            {
                                name: "Metal",
                                details: k.purity + ' ' + k.metalColor
                            }, {
                                name: "Gold",
                                details: k.skuWeight + " " + "GM"
                            },
                            {
                                name: k.skuSize && k.skuSize.length > 0 ? "Ring" : "",
                                details: k.skuSize
                            },
                            {
                                name: "Product Code",
                                details: k.generatedSku
                            }],
                        // }, {
                        //     header: "Diamond Details ",


                        //     namedetail: [
                        //         {
                        //             name: "Total No of ",
                        //         },
                        //         {
                        //             name: "Diamonds",
                        //             details: "35"
                        //         },
                        //         {
                        //             name: "Color",
                        //             details: "IF"
                        //         },
                        //         {
                        //             name: "Clarity",
                        //             details: "SI"
                        //         },

                        //     ],
                        // },
                        // {
                        //     header: "Price Breakup",
                        //     namedetail: [{
                        //         name: "Metal",
                        //         details: "SP0679-18110000"
                        //     },
                        //     {
                        //         name: "Diamond",
                        //         details: "18K Yellow Gold"
                        //     }, {
                        //         name: "Making Charges",
                        //         details: "1.463"
                        //     },
                        //     {
                        //         name: "GST",
                        //         details: "1.463"
                        //     },
                        //     ],
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
                        image: {
                            placeImage:
                                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/SE0176-1R.jpg",
                            hoverImage:
                                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/HOVER-SE0176-2R.jpg"
                        },

                    },
                ],
                fadeImages: (k.productListByProductId.productImagesByProductId.nodes.map(val => (
                    `https://assets.stylori.net/base_images/${val.imageUrl}`
                ))),
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
                        icon: "https://assets-cdn.stylori.com/images/static/icon-star.png"
                    }, {
                        name: " Secure  Payments   ",
                        icon: "https://assets-cdn.stylori.com/images/static/icon-lock.png"
                    }, {
                        name: "  Free Insured    Shipping   ",
                        icon: "https://assets-cdn.stylori.com/images/static/icon-van.png"
                    }, {
                        name: "  25 - Day   Returns   ",
                        icon: "https://assets-cdn.stylori.com/images/static/icon-return.png"
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