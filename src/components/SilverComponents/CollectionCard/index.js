import React from "react";
import { Typography } from "@material-ui/core";
import { SilverButton } from "../SilverButton";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: "center",
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 600,
  },
  description: {
    fontWeight: 500,
  },
  buttonContainer: {
    width: 120,
    margin: "auto",
    marginTop: 12,
  },
}));

function CollectionCard({ collection, title, description, onClick }) {
  const classes = useStyles();
  return (
    <div>
      <img
        src={collection}
        alt={title}
        style={{ width: "100vw", maxWidth: 400 }}
      />

      <Typography className={classNames(classes.text, classes.title)}>
        Mural Collection
      </Typography>
      <Typography className={classNames(classes.text, classes.description)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>

      <div className={classes.buttonContainer}>
        <SilverButton variant="outlined" size="dense" weight="semi-bold">
          Shop Now
        </SilverButton>
      </div>
    </div>
  );
}

export default CollectionCard;
