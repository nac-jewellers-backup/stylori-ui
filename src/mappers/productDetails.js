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
    arr.map(val => { a = Math.round(a + val.discountPrice) });
    return a;
}
const calculatetotalms = (arr) => {
    var a = 0;
    arr.map(val => { a = Math.round(a + val.sellingPrice) });
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
        debugger
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
const generateShipsBy = () =>{
    var isReadytoShip=false
    var numberOfDays = 5
    var date = moment().format(' h a')
    console.log(date)
    if(isReadytoShip){
        debugger
        if(JSON.stringify(date)>" 1 pm"){
            return 'Ships by' +' '+ moment().add(1, 'days').format('MMM Do YY');
        }
    }

    else{
        return 'Ships by' +' '+ moment().add(numberOfDays, 'days').format('MMM Do YY');
    }
}
// icon: "https://img.icons8.com/color/48/000000/gold-bars.png"})
export default function (data, cdnUrl) {
    console.info('datapd', data)
    let mapperdata = [];
    try {
        mapperdata = data.data.allTransSkuLists.nodes;
        debugger
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(PD => (
        {
            title: PD.productListByProductId.productName,
            skuId: PD && PD === undefined ? '' : PD.generatedSku,
            price: PD.markupPrice,
            offerPrice: PD.sellingPrice,
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
                shipby: generateShipsBy()
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
                    details:
                        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(calculatetotalm(PD.pricingSkuMetalsByProductSku.nodes)))
                },
                {
                    name: "Diamond",
                    details: (PD.pricingSkuMaterialByProductSku !== null ?
                        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.pricingSkuMaterialByProductSku.discountPrice))
                        : '')
                        // && PD.pricingSkuMaterialByProductSku.nodes.length === 0 ? '' :
                        // calculatetotalmm(PD.pricingSkuMaterialByProductSku.nodes)) 
                        + '  ' +

                        (PD.pricingSkuMaterialByProductSku !== null ?
                            new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.pricingSkuMaterialByProductSku.sellingPrice))
                            : '')
                    // && PD.pricingSkuMaterialByProductSku.nodes.length === 0 ? '' :
                    // calculatetotalms(PD.pricingSkuMaterialByProductSku.nodes))
                },
                {
                    name: "Gemstone",
                    details: (PD.pricingSkuMaterialByProductSku !== null ?
                        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.pricingSkuMaterialByProductSku.discountPrice))
                        : '')
                        // && PD.pricingSkuMaterialByProductSku.nodes.length === 0 ? '' :
                        // calculatetotalmm(PD.pricingSkuMaterialByProductSku.nodes)) 
                        + '  ' +

                        (PD.pricingSkuMaterialByProductSku !== null ?
                            new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.pricingSkuMaterialByProductSku.sellingPrice))
                            : '')
                    // && PD.pricingSkuMaterialByProductSku.nodes.length === 0 ? '' :
                    // calculatetotalms(PD.pricingSkuMaterialByProductSku.nodes))
                    // type: (PD.pricingSkuMaterialByProductSku !== null ? PD.pricingSkuMaterialByProductSku.component : '')
                },
                {
                    name: "Making Charges",
                    details: calculatetotal(PD.pricingSkuMetalsByProductSku.nodes)
                        + ' ' + calculatetotals(PD.pricingSkuMetalsByProductSku.nodes)
                },
                {
                    name: "GST",
                    details: "1.463"
                },
                {
                    name: "Total",
                    details:
                        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.markupPrice)) + ' ' +
                        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(PD.sellingPrice)),
                }],
            },
            ],

            productsPendants: [{
                header: PD && PD !== undefined && PD.transSkuDescriptionsBySkuId.nodes[0].skuDescription !== '' ? PD.transSkuDescriptionsBySkuId.nodes[0].skuDescription : '',
                name: [
                    '#EveryDay', '#Female', '#THree Stone', '#Spots', '#Special Occasion', '#Designer', '#Essentails', '#EveryDay', '#Female', '#THree Stone', '#Spots', '#Special Occasion', '#Designer', '#Essentails',]
            }],

            fadeImageSublist: [{
                img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
                title: "Diamond And Gold Floral Ring",
                price: "98.89789"
            },
            {
                img: "https://assets-cdn.stylori.com/157x157/images/product/SP0603/SP0603-1Y.jpg",
                title: "You recently viewed",
                price: "98.89789"
            },
            {
                img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
                title: "You recently viewed",
                price: "98.89789"
            },
            {
                img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
                title: "You recently viewed",
                price: "98.89789"
            },
            {
                img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
                title: "You recently viewed",
                price: "98.89789"
            },
            {
                img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
                title: "You recently viewed",
                price: "98.89789"
            },
            {
                img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
                title: "You recently viewed",
                price: "98.89789"
            },
            {
                img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
                title: "You recently viewed",
                price: "98.89789"
            }]

        }))
    return _format;
}


const calculatetotal = (arr) => {
    var a = 0;
    arr.map(val => { a = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a + val.discountPrice)) }
    );
    return a;
}
const calculatetotals = (arr) => {
    var a = 0;
    arr.map(val => { a = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a + val.sellingPrice)) });
    return a;
}
const calculatetotalm = (arr) => {
    var a = 0;
    arr.map(val => { a = Math.round(a + val.markup) });
    return a;
}
