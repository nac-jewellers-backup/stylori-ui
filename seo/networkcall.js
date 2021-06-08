const { request } = require("graphql-request");
const { seoUrlResult, PRODUCTDETAILS } = require("./gqlquery");
const { API_URL } = require("./config");
const { default: axios } = require("axios");
const networkcall = (path, skuID) => {
  console.log(path)
  console.log(skuID)
  if (skuID !== undefined) {
    var variables = { conditionfilter: { skuId: skuID } };
    return request(API_URL + "/graphql", PRODUCTDETAILS, variables).then((data) => {
      var ResultData = data.allTransSkuLists.nodes;
      imgConstructURL = ResultData[0].productListByProductId.productImagesByProductId.nodes[0].imageUrl;

      var SlasValue = 0;
      var imgData = "";
      var i;
      for (i = 0; i < imgConstructURL.length; i++) {
        if (imgConstructURL.charAt(i) == "/") {
          SlasValue = SlasValue + 1;
          if (SlasValue == 2) {
            imgData = imgData.concat("/1000X1000");
          }
        }
        imgData = imgData + imgConstructURL.charAt(i);
      }

      return {
        title: `${ResultData[0].productListByProductId.productName} 
        
        `,
        description: ResultData[0].transSkuDescriptionsBySkuId.nodes[0].skuDescription,
        imgURL: `https://styloriimages-staging.s3.ap-south-1.amazonaws.com/${imgData}`,
      };
      // return { title: replaceValue, description: data.seo_text };
    });
  } else if (path.indexOf("jewellery")) {
    var pathnameSplit = path.split("/");
    const splitHiphen = () => {
      if (pathnameSplit[1].indexOf("-")) {
        return pathnameSplit[1].split("-");
      }
    };

    const variables = {
      seofilter: { seoUrl: { in: splitHiphen() } },
    };

    // Run GraphQL queries/mutations using a static function
    return request(API_URL + "/graphql", seoUrlResult, variables).then((data) => {
      var filters = {};
      data.allSeoUrlPriorities.nodes.map((val) => {
        var attrName = val.attributeName.replace(/\s/g, "").toLowerCase();
        var attrVal = val.attributeValue;

        filters[attrName] = attrVal;
      });

      return axios.post(API_URL + "/filterlist", filters).then((response) => {
        var data = response.data;
        var replaceValue = "";

        var Page_title = data.seo_url.replace(/[-\+]/gi, " ");

        replaceValue = Page_title.toLowerCase()
          .split("-")
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
        return {
          title: replaceValue,
          description: data.seo_text,
          imgURL: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori-jewellery-15K-21-mar-W.jpg",
        };
      });
    });
  }
};
module.exports = { networkcall };
