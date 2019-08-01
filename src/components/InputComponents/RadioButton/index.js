import React from "react";
import Card from "@material-ui/core/Card";
import RadioBtn from "./RadioBtn";
import './index.css'

export default function CardRadioButton(props) {

  return (
    <Card className={props.cardWidth !== '' ? props.cardWidth : 'card'} >
      <RadioBtn radioValues={props.data} />
    </Card>
  );
}