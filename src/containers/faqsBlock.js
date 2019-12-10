import React from "react";
import Header from "components/Header/header";
import { Grid } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { withRouter } from "react-router";

class FaqsBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ position: "sticky", top: "0", zIndex: "1000" }}
        >
          <Header />
        </Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
            
        </Grid>

        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

const Components = () => {
  let content = <FaqsBlock/>;
  return content;
};

export default withRouter(Components);
