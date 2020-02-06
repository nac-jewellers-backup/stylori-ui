import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "6px 6px 6px 6px",
    
    height:"100vh",
    display:"flex"
  },
  formControl: {
    margin: theme.spacing(0.8),
    fontFamily: "Roboto",

  },
  fromControlTwo: {
    '& span': {
      fontSize: '0.9rem !important',
      '& svg': {
        width: '0.99rem'
      }
    },
  },
  group: {
    color: "#394578",
  },
  radio: {
    color: "#394578",

  },
  hoverClass: {
    paddingRight: "10px",
    marginLeft: "0px !important",
    marginRight: "0px !important",
    '&:hover': {
      backgroundColor: "#9e9e9e40"
    }
  }
}));



export default function RadioBtn(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState({
    sortTitle: "Sort by",
    values: '',
    helperText: false
  }
  );

  const handleChange = e => {
    props.onChange(e);
  }
  // function handleChange(event) {
  //   setValue({...value, values:event.target.value, helperText: !Boolean((event.target.value != null && event.target.value !== ""))});
  // }
  // console.log(value);
  // console.info('objectvaluesobjectvalues', props.values.values)
  return (
    <div className={classes.root} style={{alignItems: "flex-end"}}>
      <FormControl  component="fieldset" className={`${classes.fromControlTwo} ${classes.formControl}`}>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={props.values.values}
          onChange={handleChange}
        >
          {props.radioValues.map(data => (
            <FormControlLabel  className={classes.hoverClass} value={data} control={<Radio color="primary"
              className={classes.radio} />} label={data} />
          ))}
        </RadioGroup>
        {value.helperText && <FormHelperText><b style={{ color: 'red' }}>Required</b></FormHelperText>}
      </FormControl>
    </div>
  );
}
