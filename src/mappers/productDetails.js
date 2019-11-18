import { resolutions } from "utils";
import { CDN_URL } from 'config'
import moment from "moment";
import { NavigateBeforeSharp } from "@material-ui/icons";
// const baseUi = "https://assets-cdn.stylori.com/";
const injectUrl = (url, baseUi) => resolutions.map(k => ({ ...k, img: `${baseUi}${k.res}${url}` }))
const generateImgurls = (PD, val) => {
    var arrOfurls = []
    console.log(typeof imgurlsplit, typeof metalcolor)
    val.map(imgurl => {
        var imgurlsplit = imgurl.imageUrl.split('.')[0].charAt(imgurl.imageUrl.split('.')[0].length - 1)
        var metalcolor = PD.metalColor.charAt(0)
        if (imgurlsplit === metalcolor) {
            console.log('${CDN_URL}${val.imageUrl}', `${CDN_URL}${imgurl.imageUrl}`)
            arrOfurls.push(`${CDN_URL}${imgurl.imageUrl}`)

        }
        return arrOfurls
    })

    return arrOfurls
}
const calculatetotalmm = (arr) => {
    var a = 0;
    arr.map(val => {
        a =
            new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(val.discountPrice))
    });
    return a;
}

const calculatetotalms = (arr) => {
    var a = 0;
    arr.map(val => {
        a =
            new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(val.sellingPrice))
    });
    return a;
}
const generatedDiamondType = (PD, valProductDiamond, type) => {
    var arrOfdiamondType = []
    valProductDiamond.map(val => { if (val.diamondType === PD.diamondType) { arrOfdiamondType.push(val[type]) } return arrOfdiamondType })
    return arrOfdiamondType
}
const gemstoneType = (PD, valGemstoneType, type) => {
    console.log('PD,valGemstoneType, type', PD, valGemstoneType, type)
    var arrOfGemstoneType = []
    valGemstoneType.map(val => {
        PD.map(valPD => {
            if (val.gemstoneType === valPD.gemstoneType) { arrOfGemstoneType.push(val[type]) } return arrOfGemstoneType
        })
    })
    return arrOfGemstoneType
}
// if (val.gemstoneType === PD.gemstoneType) { arrOfGemstoneType.push(val[type]) } return arrOfGemstoneType })
const generatedimondClarity = (val) => {
    var a = [...new Set(val.map(P => P.diamondType))]

    return a.map(P => ({
        name: P,
        icon: "https://img.icons8.com/color/48/000000/gold-bars.png"
    }))
}
const generateShipsBy = (readytoship, vendorDeliveryTime) => {
    var isReadytoShip = readytoship
    var numberOfDays = vendorDeliveryTime
    var date = moment().format(' h a')
    console.log(date)
    if (isReadytoShip) {
        if (JSON.stringify(date) > " 1 pm") {
            return 'Ships by' + ' ' + moment().add(1, 'days').format('MMM Do YY');
        }
    }

    else {
        return 'Ships by' + ' ' + moment().add(numberOfDays, 'days').format('MMM Do YY');
    }
}
// icon: "https://img.icons8.com/color/48/000000/gold-bars.png"})
export default function (data, like_data, rating, viewedddatas) {
    console.info('datapd', data)
    let mapperdata = [];
    try {
        // mapperda = ;
        mapperdata = data.data.allTransSkuLists.nodes;
        debugger
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(PD => (
        {
            // lk: rating,
            title: PD.productListByProductId.productName,
            skuId: PD && PD === undefined ? '' : PD.generatedSku,
            price: PD.discountPrice,
            offerPrice: PD.markupPrice,
            save: '5999.9',
            offerDiscount: '25% FLAT OFF',
            dis: PD && PD !== undefined && PD.transSkuDescriptionsBySkuId.nodes[0].skuDescription !== '' ? PD.transSkuDescriptionsBySkuId.nodes[0].skuDescription : '',
            productType: PD.productListByProductId.productType && PD.productListByProductId.productType,
            fadeImages: PD.productListByProductId.productImagesByProductId.nodes &&
                generateImgurls(PD, PD.productListByProductId.productImagesByProductId.nodes),


            productsubHeaderlist: [{
                name: "From the House of NAC",
                icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
            },
            {
                name: "Quality Assurance",
                icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
            },
            {
                name: "Easy Returns",
                icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
            },
            {
                name: "Diverse Styles",
                icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
            },
            {
                name: "Secure Payments",
                icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
            },
            {
                name: "Gold Coins",
                icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
            }],

            productTabs: [{
                tab1: {
                    header: "Ring Size",
                    Children: PD.productListByProductId && PD.productListByProductId.sizeVarient
                },
                tab2: {
                    header: "Metal Purity",
                    // Children: {
                    //     metal:
                    //         (PD.transSkuListsByProductId.nodes).map(P => (

                    //             P.purity
                    //         )),
                    //     iconcolor: (PD.transSkuListsByProductId.nodes).map(P => (
                    //         P.metalColor
                    //     ))
                    // }
                    Children: PD.productListByProductId && PD.productListByProductId.colourVarient
                },
                tab3: {
                    header: "Diamond Clarity",
                    Children:
                        PD.productListByProductId.productDiamondsByProductSku.nodes &&
                        generatedimondClarity(PD.productListByProductId.productDiamondsByProductSku.nodes)
                    // var c = [...new Set(temp1.map(bill => bill.name))]

                }
            }],

            ProductContactNum: [{
                telephone: '1800-102-0330',
                phonenum: "+91 99526 25252",
                chat: "Chat",
                shipby: generateShipsBy(PD.isReadyToShip, PD.vendorDeliveryTime),
                isReadyToShip: PD.isReadyToShip
            }],
            // //////////////////////////     productsDetails    ////////////////////////////////////////////
            productsDetails: [{
                header: "Product Details",
                namedetail: [{
                    name: "Product Code",
                    details: PD && PD.generatedSku !== '' ? PD.generatedSku : ''
                },
                {
                    name: "Metal Type",
                    details: PD && PD.purity + ' ' + PD.metalColor
                }, {
                    name: "Approximate Metal weight (in gram)",
                    details: PD.productListByProductId && PD.productListByProductId.defaultWeight
                },

                {
                    name: "Size (in mm)",
                    details: PD && PD.generatedSku !== '' ? PD.skuSize : ''
                }],
            },

            {
                header: "Diamond Details",
                namedetail: [{
                    name: "Total No of Diamonds",
                    details: PD.productListByProductId.productDiamondsByProductSku.nodes && (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) &&
                        generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'stoneCount')
                },

                {
                    name: "Color",
                    details: PD.productListByProductId.productDiamondsByProductSku.nodes && (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) && generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'diamondColour')

                },

                {
                    name: "Clarity",
                    details: PD.productListByProductId.productDiamondsByProductSku.nodes && (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) &&
                        generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'diamondClarity')
                },
                {
                    name: "Total Weight (in Carat)",
                    details: PD.productListByProductId.productDiamondsByProductSku.nodes && (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) &&
                        generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'stoneWeight')
                },
                {
                    name: "Setting Type",
                    details: PD.productListByProductId.productDiamondsByProductSku.nodes && (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) &&
                        generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'diamondSettings')
                },
                {
                    name: "Shape",
                    details: PD.productListByProductId.productDiamondsByProductSku.nodes &&
                        (PD.productListByProductId.productDiamondsByProductSku.nodes.length > 0) &&
                        generatedDiamondType(PD, PD.productListByProductId.productDiamondsByProductSku.nodes, 'diamondShape')
                }]
            },
            {
                header: "Gemstone Details",
                namedetail: [{
                    name: "Stone Type",
                    details: PD.productListByProductId.productGemstonesByProductSku.nodes &&
                        PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                        gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                            PD.productListByProductId.productGemstonesByProductSku.nodes, 'gemstoneType')
                },
                {
                    name: "Shape",
                    details: PD.productListByProductId.productGemstonesByProductSku.nodes &&
                        PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                        gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                            PD.productListByProductId.productGemstonesByProductSku.nodes, 'gemstoneShape')

                },
                {
                    name: "Total No of Stones",
                    details: PD.productListByProductId.productGemstonesByProductSku.nodes && PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                        gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                            PD.productListByProductId.productGemstonesByProductSku.nodes, 'stoneCount')
                },
                {
                    name: "Size (in mm)",
                    details: PD.productListByProductId.productGemstonesByProductSku.nodes && PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                        gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                            PD.productListByProductId.productGemstonesByProductSku.nodes, 'gemstoneSize')
                },

                {
                    name: "Setting",
                    details: PD.productListByProductId.productGemstonesByProductSku.nodes && PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                        gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                            PD.productListByProductId.productGemstonesByProductSku.nodes, 'gemstoneSetting')
                },
                {
                    name: "Weight (Carat)",
                    details: PD.productListByProductId.productGemstonesByProductSku.nodes && PD.productListByProductId.productGemstonesByProductSku.nodes.length === 0 ? '' :
                        gemstoneType(PD.productListByProductId.productGemstonesByProductSku.nodes,
                            PD.productListByProductId.productGemstonesByProductSku.nodes, 'stoneWeight')
                }
                ]
            },

            {
                header: "Price Breakup",
                namedetail: [{
                    name: "Metal",
                    details: [calculatetotalm(PD.pricingSkuMetalsByProductSku.nodes, "goldprice"),
                    calculatetotalss(PD.pricingSkuMetalsByProductSku.nodes, "goldprice")]

                },
                {
                    name: "Diamond",
                    details: [PD.pricingSkuMaterialsByProductSku.nodes !== undefined ?
                        calculatetotalmm(PD.pricingSkuMaterialsByProductSku.nodes) : 0
                        ,
                    PD.pricingSkuMaterialsByProductSku.nodes !== undefined ?
                        calculatetotalms(PD.pricingSkuMaterialsByProductSku.nodes) : 0],

                },
                {
                    name: "Gemstone",
                    details: [PD.pricingSkuMaterialsByProductSku.nodes !== undefined ?
                        calculatetotalmm(PD.pricingSkuMaterialsByProductSku.nodes) : 0
                        ,
                    PD.pricingSkuMaterialsByProductSku.nodes !== undefined ?
                        calculatetotalms(PD.pricingSkuMaterialsByProductSku.nodes) : 0]
                },
                {
                    name: "Making Charges",
                    details: [calculatetotal(PD.pricingSkuMetalsByProductSku.nodes, "makingcharge"), calculatetotals(PD.pricingSkuMetalsByProductSku.nodes, "makingcharge")]
                },
                {
                    name: "GST",
                    details:
                        [new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.discountPriceTax)), new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.discountPriceTax))]
                },
                {
                    name: "Total",
                    details:
                        [new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.markupPrice)),
                        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.discountPrice))],
                }],
            },
            ],
            productsubHead: [
                {
                    name: "From the House of NAC",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                    url: "/#/",
                },
                {
                    name: "Quality Assurance",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                    url: "/#/",
                },
                {
                    name: "Easy Returns",
                    url: "/#/",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                },
                {
                    name: "Diverse Styles",
                    url: "/#/",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                },
                {
                    name: "Secure Payments",
                    url: "/#/",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                },
                {
                    name: "Gold Coins",
                    url: "/#/",
                    icon: 'https://img.icons8.com/wired/64/000000/diamond.png',
                },
            ],
            productsPendants: [{
                header: PD && PD !== undefined && PD.transSkuDescriptionsBySkuId.nodes[0].skuDescription !== '' ? PD.transSkuDescriptionsBySkuId.nodes[0].skuDescription : '',
                name: [
                    '#EveryDay', '#Female', '#THree Stone', '#Spots', '#Special Occasion', '#Designer', '#Essentails', '#EveryDay', '#Female', '#THree Stone', '#Spots', '#Special Occasion', '#Designer', '#Essentails',]
            }],
            // like_data.data.youMayalsolike1.nodes
            fadeImageSublist:
                like_data && like_data.data && Object.entries(like_data.data).length > 0 && like_data.data.youMayalsolike1 && (like_data.data.youMayalsolike1.nodes.length !== 0 || like_data.data.youMayalsolike2.nodes.length !== 0) ?
                    like_data.data.youMayalsolike1 && like_data.data.youMayalsolike1.nodes.length > 0 ?
                        like_data.data.youMayalsolike1.nodes.map(
                            val => {
                                return ({
                                    img: `${CDN_URL}${val.productImagesByProductId.nodes[0].imageUrl}`,
                                    title: val.productName,
                                    price: Math.round(val.transSkuListsByProductId.nodes[0].discountPrice),
                                    url: `jewellery/${val.productType}/${val.transSkuListsByProductId.nodes[0].productListByProductId.productMaterialsByProductSku.nodes[0].materialName}/${val.productName}?skuId=${val.transSkuListsByProductId.nodes[0].generatedSku}`
                                })
                            }
                        )
                        :
                        like_data.data.youMayalsolike2.nodes.map(
                            val => {
                                return ({
                                    img: `${CDN_URL}${val.productImagesByProductId.nodes[0].imageUrl}`,
                                    title: val.productName,
                                    price: Math.round(val.transSkuListsByProductId.nodes[0].discountPrice),
                                    url: `/jewellery/${val.productType}/${val.transSkuListsByProductId.nodes[0].productListByProductId.productMaterialsByProductSku.nodes[0].materialName}/${val.productName}?skuId=${val.transSkuListsByProductId.nodes[0].generatedSku}`
                                })
                            }
                        )
                    :
                    [],
            fadeImageSublistRecentlyViewed: viewedddatas && viewedddatas.data && Object.entries(viewedddatas.data).length > 0 && viewedddatas.constructor === Object && viewedddatas.data.allTransSkuLists.nodes.length > 0 ?

                viewedddatas.data.allTransSkuLists.nodes.map(val => {
                    return ({
                        img: `${CDN_URL}${val.productListByProductId.productImagesByProductId.nodes[0].imageUrl}`,
                        title: val.productListByProductId.productName,
                        price: Math.round(val.discountPrice),
                        url: `/jewellery/${val.productListByProductId.productType}/${val.productListByProductId.productMaterialsByProductSku.nodes[0].materialName}/${val.productListByProductId.productName}?skuId=${val.generatedSku}`
                    })
                })
                :
                []

        }))
    return _format;
}


const calculatetotal = (arr, name) => {
    var a = 0;
    arr.map(val => {
        if (val.materialName === name || name === undefined) {
            a = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a + val.discountPrice))
        }
    }
    );
    return a;
}
const calculatetotals = (arr, name) => {
    var a = 0;
    arr.map(val => {
        if (val.materialName === name || name === undefined) {
            a = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a + val.sellingPrice))
        }
    });
    return a;
}
const calculatetotalm = (arr, name) => {
    var a = 0;
    arr.map(val => {
        if (val.materialName === name || name === undefined) {
            a = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a + val.discountPrice))
        }
    });
    return a;
}
const calculatetotalss = (arr, name) => {
    var a = 0;
    arr.map(val => {
        if (val.materialName === name || name === undefined) {
            a = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a + val.sellingPrice))
        }
    });
    return a;
}
