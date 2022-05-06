import React from "react";
import Header from "components/SilverComponents/Header";
import { Grid, Hidden } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import ProductModal from "components/SilverComponents/ProductModal";
import Footer from "components/Footer/Footer";
import CarosolTop from "components/SilverComponents/SilvercarosolPhoto";
import { API_URL } from "config";
import {
  silverStyloriCollections,
  silverStyloriAllMasterCollections,
  allSeoPriorities,
} from "queries/home";
import Title from "../../components/SilverComponents/ProductTitle";

class HomeStylori extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container>
        <Header />
        <CarosolTop collectionsPageSilver={true} />
      <Hidden smDown>
      <Grid container item xs={12} justify={"center"} style={{marginTop:30}}>
        <Grid  item xs={10} >
          <Title isSilver={true} title={"COLLECTION"} />
        </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
      <Grid container item xs={12} justify={"center"} style={{marginTop:30, marginBottom:30}}>
        <Grid  item xs={10} >
          <Title isSilver={true} title={"COLLECTION"} />
        </Grid>
        </Grid>
      </Hidden>
        <ProductModal
          data={this.props.data}
          allSeo={this.props.allSeo}
          isPagination={true}
        />
        <Grid item>
          <Footer silver={true} />
        </Grid>
      </Grid>
    );
  }
}

const Components = (props) => {
  const [state, setState] = React.useState({ data: {}, allSeo: {} });
  React.useEffect(() => {
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
        allCollections = data.data.allMasterCollections.nodes.map((val) => {
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
              .then((res) => {
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

                setState({ ...state, data: state.data, allSeo: state.allSeo });
              });
          });
      });
      // eslint-disable-next-line
  }, []);
  let content = <HomeStylori data={state.data} allSeo={state.allSeo} />;
  return content;
};

export default withRouter(Components);
