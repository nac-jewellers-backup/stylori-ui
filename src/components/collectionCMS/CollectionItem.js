import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ChildCollectionItemOne from "./ChildCollectionItemOne";
import ChildCollectionItemTwo from "./ChildCollectionItemTwo";
import { seoUrlResult } from "queries/productListing";
import { NetworkContext } from "context/NetworkContext";
import "screens/screens.css";
import carosul from "components/Carousel/carosul";
const useStyles = makeStyles((theme) => ({
  ButtonViewMoreCollections: {
    fontSize: "12px",
    textTransform: "capitalize",
    color: "#394578",
    borderRadius: "0px !important",
    padding: "9px 29px",
    backgroundColor: "#fff",
    border: "1px solid #394578",
  },
}));
const carouselSetting = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: false,
  autoplaySpeed: 6000,
  arrows: false,
  accessibility: true,
  centerMode: false,
  focusOnSelect: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  pauseOnFocus: true,
  swipe: true,
};
export default function CollectionItem(props) {
  console.log(props.data, "parentColectionBlock");
  const classes = useStyles();
  // const { loading, error, data: CollectionData, makeFetch: fetchproducts } = useNetworkRequest('/fetchproducts', {}, false, {})
  const [values, setValues] = React.useState({
    onViewMoreCollection: false,
    arr_data: [],
    primaryNavigateUrl: null,
  });
  React.useEffect(() => {
    setValues({ ...values, arr_data: props.data });
  }, []);
  const viewMoreCollections = () => {
    setValues({ ...values, onViewMoreCollection: true });
  };
  return (
    <>
      {values.arr_data &&
      values.arr_data.Testimony &&
      values.arr_data.Testimony.carousel ? (
        <>
          <ChildCollectionItemOne CollectionPageStylori={values.arr_data} />
          {values.arr_data &&
          values.arr_data.Testimony &&
          values.arr_data.Testimony.carousel.data.length >= 2 ? (
            <>
              {values.onViewMoreCollection === true ? (
                <ChildCollectionItemTwo
                  CollectionPageStylori={values.arr_data}
                />
              ) : (
                <>
                  <Grid container>
                    <Grid item style={{ margin: "auto" }}>
                      <Button
                        type="button"
                        className={classes.ButtonViewMoreCollections}
                        onClick={() => {
                          viewMoreCollections();
                        }}
                      >
                        view More Collections
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          {window.location.href.toLowerCase().includes("silver") ? (
            <div className="overall-loader">
              <div id="loadingsilver"></div>
            </div>
          ) : (
            <div className="overall-loader">
              <div id="loading"></div>
            </div>
          )}
        </>
      )}
    </>
  );
}
