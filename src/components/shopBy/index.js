import React from "react";
import ShopByCard from "./ShopByCard";
import { Grid, Container, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { shopByStyloriSilver } from "../../queries/productdetail";
import { API_URL, CDN_URL } from "../../config";

let _shopsProducts = []

let settingSilver = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  fade: false,
  arrows: false,
  arrowsImg: true,
  accessibility: true,
  autoplaySpeed: 300000,
  centerMode: false,
  focusOnSelect: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  swipe: false
}

const _shopsProductss = (val) => {
  debugger
  // _shopsProducts = [
  //   {
  //     label: val.label,
  //     image:val.images[0].imageUrl,
  //   },
  
  // ];
  _shopsProducts = Object.keys(val).map((data)=>{return {label:val[data].label, image:val[data].images}})
};

const _queryResultsValidator = (_result) => { 
  console.log(_result, "_result");
  let _keys = Object.keys(_result);
  var _obj = {};
  _keys.map((val) => {
    var a = _result[val].nodes.map((val) => {
      return val.productListByProductSku.productImagesByProductId.nodes;
    });

    let _arr = [];
    a.map((val1) => {
      val1.map((val2) => {
        if (val2.imagePosition === 2) return _arr.push(val2);
      });
    });
    _obj[val] ={label:val,images:_arr};
  });
  console.log(_obj, "aaa");
  _shopsProductss(_obj)
};

const _fetchProducts = () => {
  fetch(`${API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `${shopByStyloriSilver([
        "Earrings",
        "Pendants",
        "Rings",
        "Bracelets",
        "Bangles"
      ])}`,
    }),
  })
    .then((res) => res.json())
    .then((res) => _queryResultsValidator(res.data));
};

const ShopBy = (props) => {
  React.useEffect(() => {
    _fetchProducts();
  }, []);
  const { classes } = props;
  return (
    <Container style={{ padding: "0px 17px" }} maxWidth="lg">
      <Grid container item xs={12} justify="space-around">
        <Grid container item xs={10} className={classes.shopByLabel}>
          <Typography variant="body1" component="div">
            Shop by
          </Typography>
        </Grid>
        <Grid container item xs={10} className={classes.shopbyProductCardGrid}>
          {_shopsProducts.map((val) => {
            return  val.image.length > 0 ?
              <Grid item xs={3} className={classes.productCard}>
                <ShopByCard label={val.label} image={val.image} settingSilver={settingSilver}/>
              </Grid>
              :
              null
            
          })}
        </Grid>
      </Grid>
    </Container>
  );
};
export default withStyles(styles)(ShopBy);
