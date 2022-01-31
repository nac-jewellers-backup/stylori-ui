import { API_URL, CDN_URL } from "../config";
var colSize = null;
const screenWidth = () => {
  const width = window.innerWidth;
  colSize = 6;
};
var img_res;
var calc_card_resolution;
var screen_width_type = () => {
  // const {window_width, browser_type} = await lambda_func_front_end()
  var window_width = localStorage.browserDetails
    ? JSON.parse(localStorage.getItem("browserDetails"))
    : {};

  screenWidth();
  var _calc = () => {
    var width_of_filters_20_percentage =
      (window_width.browser_width - window_width.browser_width * 0.2) / colSize;
    var subtracting_spacesaroundcard =
      width_of_filters_20_percentage - width_of_filters_20_percentage * 0.1;
    return subtracting_spacesaroundcard;
  };
  calc_card_resolution = _calc();

  // var sizes = [275, 300, 350, 375, 400, 500, 600, 675, 700, 775, 800, 900, 975, 1000, 1100, 2400]
  var sizes = [
    60,
    70,
    80,
    90,
    100,
    125,
    150,
    175,
    200,
    225,
    250,
    275,
    300,
    325,
    350,
    375,
    400,
    425,
    450,
    475,
    500,
    525,
    550,
    575,
    600,
    625,
    650,
    675,
    700,
    725,
    750,
    775,
    800,
    825,
    850,
    875,
    900,
    925,
    950,
    975,
    1000,
    1100,
    1200,
    1300,
    1400,
    1500,
    1600,
    1700,
    1800,
    1900,
    2000,
    2100,
    2200,
    2300,
    2400,
  ];
  // [50,60,70,80,90,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950,975,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400]
  for (var i = 0; i <= sizes.length; i++) {
    if (
      calc_card_resolution + calc_card_resolution === sizes[i] ||
      calc_card_resolution + calc_card_resolution < sizes[i]
    ) {
      img_res = sizes[i];
      break;
    } else {
      if (sizes.length - 1 === i) {
        img_res = sizes[i];
      }
    }
  }
  return img_res;
};
export const injectUrl_url_construct = (url) => {
  var browser_type = JSON.parse(localStorage.getItem("browserDetails"));
  if (
    browser_type !== undefined &&
    url !== undefined &&
    url &&
    url?.imageUrl &&
    url?.imageUrl.length > 0
  ) {
    // If you need device adaptive use this piece of code
    // var resolution = screen_width_type()

    // If you need high resolution image use this piece of code
    var resolution = 1000;

    var _resolutions = `${resolution}X${resolution}`;
    var url_split =
      url && url?.imageUrl ? url?.imageUrl.split("/") : url.split("/");
    var extension_split = url_split && url_split[url_split.length - 1];
    var browser_type_append =
      extension_split &&
      extension_split
        .split(".")[0]
        .concat(`${browser_type && browser_type.browser_type}`);

    url_split[url_split && url_split.length - 1] = browser_type_append;
    url_split.splice(2, 0, _resolutions);
    var url_construct = url_split.join().replace(/\,/g, "/");
    var img_url = `${CDN_URL}${url_construct}`;
  } else {
    var img_not_found = "product/productnotfound.webp";
    url_split = img_not_found.split("/");
    extension_split = url_split[url_split.length - 1];
    browser_type_append = extension_split
      .split(".")[0]
      .concat(`${browser_type.browser_type}`);
    url_split[url_split.length - 1] = browser_type_append;
    url_split.splice(1, 0, _resolutions);
    url_construct = url_split.join().replace(/\,/g, "/");
  }

  return `${img_url}?_=${new Date().getTime()}`;
};
