export default function (data) {
  let mapperdata = [];
  try {
    mapperdata = data;
  } catch (error) {
    mapperdata = [];
  }
  const _format = mapperdata.map((k) => {
    const get = (data) => (data ? data : []);
    const getstring = (data) => (data ? data : "");
    const getSubFilterLength = (data) => {
      var arr =
        data && data.length > 0 && data.constructor === Array
          ? data.map((val) => {
              if (val.constructor === Object) return Object.values(val);
              else return val;
            })
          : data;
      return arr.constructor === Array ? arr.flat() : arr;
    };
    const _obj = {};

    const getSubFilters = (data) => {
      if (data && data.length > 0) {
        Object.keys(data[0]).map((val) => {
          if (
            val !== "master_category" &&
            val !== "seo_url" &&
            val !== "seo_text" &&
            val !== "seo_banner"
          ) {
            if (val === "price_range" || val.toLocaleLowerCase() === "price") {
              _obj[val] = data[0][val];
            } else {
              _obj[val] = getSubFilterLength(data[0][val]);
            }
          }
        });
      }
      return { ..._obj };
    };

    let _d;
    try {
      _d = {
        filter:
          data && data.length > 0
            ? Object.keys(data[0])?.filter((val) => {
                if (
                  val !== "master_category" &&
                  val !== "seo_url" &&
                  val !== "seo_banner" &&
                  val !== "seo_text"
                ) {
                  if (data[0][val].length > 0) return val;
                }
              })
            : [],

        subFilter: getSubFilters(data),
        sortOptions: [
          "New to Stylori",
          "Featured",
          "Price Low to High",
          "Price High to Low",
          "Ready to Ship",
          "Best Seller",
        ],
        seoText: getstring(data[0].seo_text),
        seoBanner:
          data && data.length > 0 && data[0].seo_banner
            ? data[0].seo_banner[0]
            : [],
        dataCarousel: {
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 1000,
          fade: true,
          arrows: false,
        },
        carouselImage: [
          "https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg",
          "https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg",
          "https://assets-cdn.stylori.com/images/megamenu/ear-jacket.jpg",
        ],
      };
    } catch (error) {
      console.info("error", error);
    }

    return _d;
  });
  return _format;
}
