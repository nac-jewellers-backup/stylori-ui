const { request } = require("graphql-request");
const { seoUrlResult } = require("./gqlquery");
const { API_URL } = require("./config");
const { default: axios } = require("axios");
const networkcall = (path = "") => {
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
      console.log(replaceValue, data.seo_text);
      return { title: replaceValue, description: data.seo_text };
    });
  });
};
module.exports = { networkcall };
