import React, { useEffect } from "react";
import {
  Grid,
  Hidden,
  Typography,
  Collapse,
} from "@material-ui/core";
import { withRouter } from "react-router";
import "index.css";
import FaqsTitle from "components/faqs/faqsTitle";
import FaqsHelp from "components/faqs/faqsHelp";
import FaqsCustomer from "components/faqs/faqsCustomer";
import parse from "html-react-parser";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import faqStyles from "./styles";

const CMSfaqs = (props) => {
  const classes = faqStyles();
  const header = props?.state?.filter(
    (val) => val.component === "faqTitle"
  )?.[0];
  const [open, setOpen] = React.useState(null);

  useEffect(() => {
    const tabs = props?.data?.props?.map((val, i) => {
      return i;
    });
    setOpen(tabs);
  }, []);
  const handleClick = (i) => {
    const newOpen = [...open];
    if(open.includes(i)){
        const indexOf = newOpen.indexOf(i)
        newOpen.splice(indexOf,1);
        setOpen(newOpen);
    }else{
        newOpen.push(i);
        setOpen(newOpen)
    }
  };
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{ marginTop: 15, display: "flex", justifyContent: "center" }}
      >
        <Grid container class="menuqans">
          <Grid item class="mainWidth">
            <Grid container>
              <Hidden smDown>
                <Grid item class="sideContent" lg={3} xl={3}>
                  <FaqsTitle />
                  <FaqsHelp />
                  <FaqsCustomer />
                </Grid>
              </Hidden>

              <Grid item class="mainContent" lg={9} xl={9}>
                <Typography className={classes.titleColor} gutterBottom>
                  {header?.props?.title_Text}
                </Typography>
                {(open !== null) &&
                  props?.data?.props?.map((val, index) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding:open.includes(index) ? "15px 0px 0px" :"15px 0px",
                            borderBottom:open.includes(index) ? "none" : "1px solid #e8e8e8"
                          }}
                          onClick={(e) =>handleClick(index)}
                        >
                          <Typography
                            className={classes.accordSummaryTitle}
                            variant="body1"
                          >
                            {val?.role}
                          </Typography>
                          {open.includes(index) ? (
                            <ExpandLess style={{cursor:"pointer"}} />
                          ) : (
                            <ExpandMoreIcon style={{cursor:"pointer"}} />
                          )}
                        </div>
                        <Collapse
                          in={open.includes(index)}
                          timeout="auto"
                          unmountOnExit
                          style={{borderBottom:"1px solid #e8e8e8"}}
                        >
                          <Typography
                            className={classes.jobText}
                            variant="body1"
                          >
                            {parse(val?.JobDescription)}
                          </Typography>
                        </Collapse>
                      </>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(CMSfaqs);
