import React from "react";
import Paper from "@material-ui/core/Paper";
import RadioBtn from "./RadioBtn";
import './index.css'

export default function CardRadioButton(props) {
  return (
    <Paper className={props.cardWidth !== '' ? props.cardWidth : 'card'} >
      <RadioBtn radioValues={props.data} onChange={props.onChange} values={props.values}/>
    </Paper>
  );
}