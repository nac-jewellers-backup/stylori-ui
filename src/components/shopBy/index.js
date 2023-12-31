import React from "react";
import ShopByCard from "./ShopByCard";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

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

// const _shopsProductss = (val) => {

//   // _shopsProducts = [
//   //   {
//   //     label: val.label,
//   //     image:val.images[0].imageUrl,
//   //   },

//   // ];
//   _shopsProducts = Object.keys(val).map((data)=>{return {label:val[data].label, image:val[data].images}})
// };

// const _queryResultsValidator = (_result) => { 
//   let _keys = Object.keys(_result);
//   var _obj = {};
//   _keys.map((val) => {
//     var a = _result[val].nodes.map((val) => {
//       return val.productListByProductSku.productImagesByProductId.nodes;
//     });

//     let _arr = [];
//     a.map((val1) => {
//       val1.map((val2) => {
//         if (val2.imagePosition === 2) return _arr.push(val2);
//       });
//     });
//     _obj[val] ={label:val,images:_arr};
//   });
//   _shopsProductss(_obj)
// };

// const _fetchProducts = () => {
//   fetch(`${API_URL}/graphql`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query: `${shopByStyloriSilver([
//         "Earrings",
//         "Pendants",
//         "Rings",
//         "Bracelets",
//         "Bangles"
//       ])}`,
//     }),
//   })
//     .then((res) => res.json())
//     .then((res) => _queryResultsValidator(res.data));
// };

const ShopBy = (props) => {

  //   React.useEffect(() => {
  //     _fetchProducts();
  //   }, []);
  const { classes, isSilver } = props;
  let v = isSilver ? (props?.shopByStyloriSilver?.length > 3 ? props?.shopByStyloriSilver?.slice(0, 4) : props?.shopByStyloriSilver) : props.shopByStyloriSilver
  return (
    // <Container style={{ padding: "0px 17px" }} maxWidth="lg">
    <Grid container xs={12} justify="space-around">
      <Grid container item xs={12} className={`${classes.shopByLabel} ${isSilver ? classes.silverLabel : ''}`} justify="center">
        <Typography variant="body1" component="div">
          SHOP BY TYPE
          </Typography>
      </Grid>
      <Grid container item xs={12} className={classes.shopbyProductCardGrid}>
        {v.map((val,i) => {
          return val.image.length > 0 ?
            <Grid item xs={6} className={classes.productCard}>
              {/* showButton={true} height={400} */}
              <ShopByCard label={val.label} image={val.image} i={i} settingSilver={settingSilver} height={450} showtitle={true} />
            </Grid>
            :
            null

        })}
      </Grid>
    </Grid>
  );
};
export default withStyles(styles)(ShopBy);
