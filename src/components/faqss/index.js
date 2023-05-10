import React, { useEffect } from "react";
import { Grid, Hidden, Typography, Collapse } from "@material-ui/core";
import { withRouter } from "react-router";
import "index.css";
import FaqsTitle from "components/faqs/faqsTitle";
import FaqsHelp from "components/faqs/faqsHelp";
import FaqsCustomer from "components/faqs/faqsCustomer";
import parse from "html-react-parser";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import faqStyless from "./styles";

const CMSfaqss = (props) => {
  const classes = faqStyless();
  const header = props?.state?.filter(
    (val) => val.component === "faqTitle"
  )?.[0];
  const [open, setOpen] = React.useState(null);
  const [dataNew, setDateNew] = React.useState([]);

  useEffect(() => {
    const data = props?.data?.props;
    const duplicateHeaderData = data.map((val) => val.header);
    const headerData = removeDuplicates(duplicateHeaderData);

    const newData = headerData.map((role) => {
      const newtry = data.filter((value) => value.header === role);
      return {
        header: role,
        data: newtry,
      };
    });
    setDateNew(newData);
    const tabs = newData.map((val, i) => {
      const data = val?.data?.map((value, index) => index);
      return {
        role: val.header,
        index: data,
      };
    });
    setOpen(tabs);
  }, []);

  const removeDuplicates = (arr) => {
    var unique = [];
    arr.forEach((element) => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });
    return unique;
  };
  const handleClick = (index, i) => {
    const newOpen = [...open];
    if (open?.[index]?.index?.includes(i)) {
      const indexOf = newOpen?.[index]?.index?.indexOf(i);
      newOpen[index].index.splice(indexOf, 1);
      setOpen(newOpen);
    } else {
      newOpen[index].index.push(i);
      setOpen(newOpen);
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
                {open !== null &&
                  dataNew?.map((val, index) => {
                    return (
                      <>
                        {val.header !== "-" && (
                          <Typography className={classes.titleColor} style={{fontSize:"15px",paddingTop:"10px"}}>
                            {val.header}
                          </Typography>
                        )}
                        {val.data.map((value, i) => {
                          return (
                            <>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  padding: open?.[index]?.index?.includes(i)
                                    ? "15px 0px 0px"
                                    : "15px 0px",
                                  borderBottom: open?.[index]?.index?.includes(
                                    i
                                  )
                                    ? "none"
                                    : "1px solid #e8e8e8",
                                }}
                                onClick={(e) => handleClick(index, i)}
                              >
                                <Typography
                                  className={classes.accordSummaryTitle}
                                  variant="body1"
                                >
                                  {value?.role}
                                </Typography>
                                {open?.[index]?.index?.includes(i) ? (
                                  <ExpandLess style={{ cursor: "pointer" }} />
                                ) : (
                                  <ExpandMoreIcon
                                    style={{ cursor: "pointer" }}
                                  />
                                )}
                              </div>
                              <Collapse
                                in={open?.[index]?.index?.includes(i)}
                                timeout="auto"
                                unmountOnExit
                                style={{ borderBottom: "1px solid #e8e8e8" }}
                              >
                                <Typography
                                  className={classes.jobText}
                                  variant="body1"
                                >
                                  {parse(value?.JobDescription)}
                                </Typography>
                              </Collapse>
                            </>
                          );
                        })}
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

export default withRouter(CMSfaqss);
