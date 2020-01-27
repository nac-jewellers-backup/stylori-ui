

import { resolutions } from "utils";
// { title: '1 Day Shipping', value: "1 Day Shipping" }, { title: '5 Day Shipping', value: '5 Day Shipping ' }, { title: '7 Day Shipping', value: '7 Day Shipping' }, { title: '10 Day Shipping', value: '10 Day Shipping' }, { title: '10 & Above Days Shipping', value: '10 & Above Days Shipping' }
export default function (data) {
    let mapperdata = [];
    try {
        mapperdata = data;
    } catch (error) {
        mapperdata = [];
    }
    const _format = mapperdata.map(k => {
        const get = (data) => data ? data : []
        const getstring = (data) => data ? data : ''
        let _d;
        try {
            _d = {
                filter: [
                    'Offers', 'Availability', 'Product Type', 'Style', 'Material', 'Theme', 'Collection',
                    'Metal Color', 'Metal Purity', 'Occasion', 'No Of Stones', 'Gender', 'Stone Color', 'Stone Shape', 'By Design', 'By Weight'
                ],

                subFilter: {
                    'Offers': [
                        'Up to  20%',
                        'Up to  30%',
                        'Up to  40%',
                        'Up to  50%',
                    ],
                    'Availability': [
                        "1 Day Shipping", '10 & Above Days Shipping'

                    ],
                    'Product Type': get(data[0].master_product_type).map(val => {
                        return val.product_type
                    }),
                    'Style': get(data[0].master_styles).map(val => {
                        return val.style_name
                    }),
                    'Material': get(data[0].master_material).map(val => {
                        return val.material_name
                    }),
                    'Theme': get(data[0].master_themes).map(val => {
                        return val.theme_name
                    }),
                    'Collection': get(data[0].master_collection).map(val => {
                        return val.collection_name
                    }),
                    'Metal Color': get(data[0].master_colors).map(val => {
                        return val.product_color
                    }),
                    'Metal Purity': get(data[0].master_purity).map(val => {
                        return val.purity
                    }),
                    'Occasion': get(data[0].master_occassion).map(val => {
                        return val.occassion_name
                    }),
                    'No Of Stones': get(data && data[0] && data[0].master_stonecount && data[0].master_stonecount).map(val => {
                        return val && val.stonecount
                    }),
                    'Gender': get(data[0].master_gender).map(val => {
                        return val.gender_name
                    }),
                    'Stone Color': get(data[0].master_stonecolor).map(val => {
                        return val.stonecolor
                    }),
                    'Stone Shape': get(data && data[0] && data[0].gemstone_shape).map(val => {
                        return val.gemstone_shape
                    }),
                    'Price Range': get(data[0].price_range).map(val => {
                        return val
                    }),
                    // goldcoins

                    'By Design': get(data && data[0] && data[0].master_bydesign && data[0].master_bydesign).map(val => {
                        return val && val.design_name
                    }),
                    'By Weight': get(data && data[0] && data[0].master_byweight && data[0].master_byweight).map(val => {
                        return val && val.weight
                    }),

                },
                // // [ 
                //     { 
                //         "max":5231.559,
                //         "min":0
                //      }
                //   ],
                sortOptions: [
                    "New to Stylori",
                    "Featured",
                    "Price Low to High",
                    "Price High to Low",
                    "Ready to Ship",
                    "Best Seller"
                ],
                seoText: getstring(data[0].seo_text),
                dataCarousel: {
                    dots: false,
                    infinite: true,
                    autoplay: true,
                    speed: 1000,
                    fade: true,
                    arrows: false
                },
                carouselImage: ['https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
                    'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
                    'https://assets-cdn.stylori.com/images/megamenu/ear-jacket.jpg'],


            }
        } catch (error) {
            console.info('error', error);
        }

        return _d;
    })
    // console.info('_format', _format);
    return _format;


}

// injectUrl("/images/product/SE0775/SE0775-1Y.jpg", cdnUrl)