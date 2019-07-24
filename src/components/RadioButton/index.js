import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import RadioBtn from "./RadioBtn";

const useStyles = makeStyles({
  card: {
    minWidth: 175,
    maxWidth: 255,
    padding: 0
  },

  title: {
    fontSize: 10
  },
 
});

export default function CardRadioButton(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} style={{ padding: "0px !important",margin:'0px' }}>
        <RadioBtn radioValues={props.data} />
    </Card>
  );
}