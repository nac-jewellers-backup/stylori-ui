import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",

  },
  formControl: {
    margin: theme.spacing(1),

    fontFamily: "Roboto"
  },
  group: {
    color: "#394578",
  },
  radio: {
    color: "#394578",
    fontSize: '8px !important',
  }
}));



export default function RadioBtn(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("Sort By");

  function handleChange(event) {
    setValue(event.target.value);
  }
  console.log(value);
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          {props.radioValues.map(value => (
            <FormControlLabel value={value} control={<Radio color="primary" 
            className={classes.radio} />} label={value} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
