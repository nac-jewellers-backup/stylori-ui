import { resolutions } from "utils";
// const baseUi = "https://assets-cdn.stylori.com/";
const injectUrl = (url, baseUi) => resolutions.map(k => ({ ...k, img: `${baseUi}${k.res}${url}` }))

export default function (data, cdnUrl) {
    debugger
    let mapperdata = [];
    try {
        mapperdata = data.data.allProductLists.nodes;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(PD => ({
        
        title: PD.productName,
        skuId:PD.transSkuListsByProductId.nodes=== undefined ? '' : PD.transSkuListsByProductId.nodes.map(skus=>skus.generatedSku),
        price: (PD.transSkuListsByProductId.nodes).map(val => (
            val.markupPrice
        )),
        offerPrice: (PD.transSkuListsByProductId.nodes).map(val => (
            val.sellingPrice
        )),
        save: '5999.9',
        offerDiscount: '25% FLAT OFF',
        dis: PD.transSkuListsByProductId.nodes[0] !== undefined ?PD.transSkuListsByProductId.nodes[0].transSkuDescriptionsBySkuId.nodes[0].skuDescription :'',
        productType: PD.productType,
        fadeImages: (PD.productImagesByProductId.nodes.map(val => (
            `https://s3.ap-south-1.amazonaws.com/staging-assets.stylori.com/base_images/${val.imageUrl}`
        ))),


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
                Children: PD.sizeVarient
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
                Children: PD.colourVarient
            },
            tab3: {
                header: "Diamond Clarity",
                Children:
                    (PD.productDiamondsByProductSku.nodes).map(P => (
                        {
                            name: P.diamondType,
                            icon: "https://img.icons8.com/color/48/000000/gold-bars.png"
                        }))

            }
        }],

        ProductContactNum: [{
            telephone: '98-554-54-54554',
            phonenum: "+91 7864697459",
            chat: "Chat",
            shipby: "SHIPS BY 31 Jul 2019"
        }],
        // //////////////////////////     productsDetails    ////////////////////////////////////////////
        productsDetails: [{
            header: "Product Details",
            namedetail: [{
                name: "Product Code",
                details: "SP0-110000"
            },
            {
                name: "Metal Type",
                details: PD.colourVarient
            }, {
                name: "Approximate",
                details: PD.defaultWeight
            },

            {
                name: "Size",
                details: PD.sizeVarient
            }],
        },

        {
            header: "Diamond Details ",
            namedetail: [{
                name: "Total No of Diamonds",
                details: (PD.productDiamondsByProductSku.nodes[0] && PD.productDiamondsByProductSku.nodes[0].length > 0) && PD.productDiamondsByProductSku.nodes[0].stoneCount
            },

            {
                name: "Color",
                details: PD.productDiamondsByProductSku.nodes[0] && PD.productDiamondsByProductSku.nodes[0].diamondColour
                
            },

            {
                name: "Clarity",
                details: PD.productDiamondsByProductSku.nodes && PD.productDiamondsByProductSku.nodes[0].diamondClarity
            },
            {
                name: "Shape",
                details: PD.productDiamondsByProductSku.nodes[0] && PD.productDiamondsByProductSku.nodes[0].diamondShape
            }]
        },
        {
            header: "Gemstone Details",
            namedetail: [{
                name: "Stone Type",
                details: (PD.productDiamondsByProductSku.nodes[0] && PD.productDiamondsByProductSku.nodes[0].length > 0) ? PD.productGemstonesByProductSku.nodes[0].gemstoneType : ''
            },
            {
                name: "Shape",
                details: (PD.productDiamondsByProductSku.nodes[0] && PD.productDiamondsByProductSku.nodes[0].length > 0) && PD.productGemstonesByProductSku.nodes[0].gemstoneShape
            },
            {
                name: "Total No of Stones",
                details: (PD.productDiamondsByProductSku.nodes[0] && PD.productDiamondsByProductSku.nodes[0].length > 0) && PD.productGemstonesByProductSku.nodes[0].stoneCount
            },
            {
                name: "Size",
                details: (PD.productDiamondsByProductSku.nodes[0] && PD.productDiamondsByProductSku.nodes[0].length > 0) && PD.productGemstonesByProductSku.nodes[0].gemstoneSize
            },

            {
                name: "Setting",
                details: (PD.productDiamondsByProductSku.nodes[0] && PD.productDiamondsByProductSku.nodes[0].length > 0) && PD.productGemstonesByProductSku.nodes[0].gemstoneSetting
            }]
        },

        {
            header: "Price Breakup",
            namedetail: [{
                name: "Metal",
                details: "SP0679-18110000"
            },
            {
                name: "Diamond",
                details: (PD.transSkuListsByProductId.nodes[0] && PD.transSkuListsByProductId.nodes[0].length > 0) && PD.transSkuListsByProductId.nodes[0].purity
            }, {
                name: "Making Charges",
                details: "1.463"
            },
            {
                name: "GST",
                details: "1.463"
            }],
        },
        ],

        productsPendants: [{
            header: "Pendants set in 18 Kt Gold 1.46 gm with Diamonds (0.04 ct, IJ - SI ) ",
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
