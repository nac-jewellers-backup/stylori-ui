import { resolutions } from "utils";
// const baseUi = "https://assets-cdn.stylori.com/";
const injectUrl = (url, baseUi) => resolutions.map(k => ({ ...k, img: `${baseUi}${k.res}${url}` }))

export default function (data, cdnUrl) {
    let mapperdata = [];
    try {
        mapperdata = data.data.allProductLists.nodes;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(k => ({
        offerPrice: "23000.10",
        price: "29000.0",
        title: k.productName,
        save: '5999.9',
        offerDiscount: '25% FLAT OFF',
        dis: "Pendants set in 14 Kt White Gold 0.84 gm with Diamonds (0.06 ct IJ -SI)",
        fadeImages: [
            'https://images7.alphacoders.com/421/421542.jpg ',
            'https://images7.alphacoders.com/421/421542.jpg ',
            'http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg', 'https://images7.alphacoders.com/421/421542.jpg ',
            'http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg',
            'https://images7.alphacoders.com/421/421542.jpg ',
            'http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg',
        ],
        image: {
            placeImage: injectUrl("/images/product/SE0262/SE0262-1Y.jpg", cdnUrl),
            hoverImage: injectUrl("/images/product/SE0262/HOVER-SE0262-2Y.jpg", cdnUrl)
        },
        productsubHeaderlist: [
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
        productTabs: [
            {
                tab1: {
                    header: "Ring Size",
                    Children:
                        [
                            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'
                        ]
                },
                tab2: {
                    header: "Metal Purity",
                    Children: [
                        {
                            name: "18k Yellow", icon: "https://img.icons8.com/color/48/000000/gold-bars.png"
                        }, {
                            name: "18k Yellow", icon: "https://img.icons8.com/color/48/000000/gold-bars.png"
                        }, {
                            name: "18k Yellow", icon: "https://img.icons8.com/color/48/000000/gold-bars.png"
                        },
                    ]
                },
                tab3: {
                    header: "Diamond Clarity",
                    Children: [
                        {
                            name: "SU 9IM", icon: "https://img.icons8.com/color/48/000000/gold-bars.png"
                        },
                        {
                            name: "SU 9IM", icon: "https://img.icons8.com/color/48/000000/gold-bars.png"
                        },
                    ]
                }
            }
        ],
        productsbuy: [
            {
                telephone: '98-554-54-54554',
                phonenum: "+91 7864697459",
                chat: "Chat",
                shipby: "SHIPS BY 31 Jul 2019"
            }
        ]
    }))
    return _format;
}
