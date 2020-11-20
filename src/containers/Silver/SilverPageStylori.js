import React from "react";
import Header from "components/SilverComponents/Header";
import {
  Grid,
  Container,
  Hidden,
  Typography,
  withStyles,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import ProductModal from "components/SilverComponents/ProductModal";
import MultipleSections from "components/SilverComponents/MultipleSections";
import Footer from "components/Footer/Footer";
import CarosolTop from "components/SilverComponents/SilvercarosolPhoto";
import { CDN_URL, API_URL } from "config";
import {
  silverStyloriCollections,
  silverStyloriAllMasterCollections,
  allSeoPriorities,
  customerReviews,
} from "queries/home";
import Feedes from "components/Feedes/Index";
import { InstagramFeed } from "components/Feedes/instagramfeed";
import { NeedHelp } from "components/needHelp";

const styles = (theme) => ({
  instagramTitle: {
    color: "rgb(58,69,120)",
    letterSpacing: 6,
    textAlign: "center",
    paddingBottom: 10,
  },
});

class HomeStylori extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Header />
        <CarosolTop />
        <Container maxWidth={"lg"}>
          <ProductModal data={this.props.data} allSeo={this.props.allSeo} />
          <MultipleSections
            isHover={true}
            customerReviews={this.props.customerReviews}
            isGadgets={true}
            {...this.props}
          />
          <Hidden smDown>
            <Feedes
              isShowInsideDiv={true}
              style={{
                boxShadow: "rgb(204, 204, 204) 7px 8px 6px",
                border: "1px solid #ccc",
              }}
            />
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={12} style={{ marginBottom: 20 }}>
              <Typography variant="body1" className={classes.instagramTitle}>
                INSTAGRAM
              </Typography>
              <InstagramFeed />
            </Grid>
          </Hidden>
        </Container>
        <Grid item>
          <Footer silver={true} />
        </Grid>

        <>
          <Hidden smDown>
            <div
              style={{
                position: "fixed",
                bottom: "10%",
                right: 0,
                zIndex: 20,
              }}
            >
              <NeedHelp position="top" />
            </div>
          </Hidden>
          <Hidden mdUp>
            <div
              style={{ position: "fixed", top: "50%", right: 0, zIndex: 20 }}
            >
              <NeedHelp position="top" />
            </div>
          </Hidden>
        </>
      </Grid>
    );
  }
}

const Components = (props) => {
  const [state, setState] = React.useState({
    data: {},
    allSeo: {},
    customerReviews: [],
  });
  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function json(response) {
    return response.json();
  }
  const getcustomerReviews = async () => {
    let _arrData = [];
    await fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: customerReviews,
      }),
    })
      .then(status)
      .then(json)
      .then((data) => {
        data.data.allCustomerReviews.nodes.map((val) => {
          let _obj = {};

          _obj["Content"] = val.message ? val.message : "-STYLORI";
          _obj["name"] = val.customerName ? val.customerName : "-STYLORI";
          _obj["location"] = "Chennai";
          _arrData.push(_obj);
        });

        // console.log('@reviews', data)
      });
    return _arrData;
  };
  React.useEffect(() => {
    let allCollections = [];
    let allSeoCollections = [];

    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: silverStyloriAllMasterCollections,
      }),
    })
      .then(status)
      .then(json)
      .then((data) => {
        allCollections = data.data.allMasterCollections.nodes
          .filter((val) => {
            return Boolean(val.name);
          })
          .map((val) => {
            return val.name;
          });
        allSeoCollections = data.data.allMasterCollections.nodes.map((val) => {
          return `"${val.name}"`;
        });
        fetch(`${API_URL}/graphql`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            query: silverStyloriCollections(allCollections),
          }),
        })
          .then(status)
          .then(json)
          .then(async (data) => {
            state["data"] = data;

            allCollections = data;
            await fetch(`${API_URL}/graphql`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                query: allSeoPriorities(allSeoCollections),
              }),
            })
              .then(status)
              .then(json)
              .then(async (res) => {
                const func = () => {
                  var obj = {};
                  res.data.allSeoUrlPriorities.nodes.map((val) => {
                    obj[val.attributeValue] = {};
                    obj[val.attributeValue]["seoText"] = val.seoText
                      ? val.seoText
                      : " ";
                    obj[val.attributeValue]["seoUrl"] = val.seoUrl
                      ? val.seoUrl
                      : " ";
                  });
                  return obj;
                };
                // let _data =func()
                state["allSeo"] = func();

                state["customerReviews"] = await getcustomerReviews();

                setState({
                  ...state,
                  data: state.data,
                  allSeo: state.allSeo,
                  customerReviews: state.customerReviews,
                });
              });
          });
      });
  }, []);
  console.log(props.match.path === "/styloriSilver");
  let content = (
    <HomeStylori
      data={state.data}
      allSeo={state.allSeo}
      customerReviews={state.customerReviews}
      {...props}
    />
  );
  return content;
};

export default withStyles(styles)(withRouter(Components));
