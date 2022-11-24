import { Select } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1.8),
  },
  selectEmpty: {
    marginTop: theme.spacing(3.3),
  },
}));
export default function SimpleSelect(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: null,
    helperText: false,
  });
 
  function handleChange(event) {
    if (props.val === "1") {
      localStorage.setItem("m", event.target.value);
    }
    setValues({
      [event.target.name]: event.target.value,
      helperText: !Boolean(
        event.target.value != null && event.target.value !== ""
      ),
    });
  }
  return (
    <form className={classes.root} autoComplete="off">
      {/* <FormControl required className={classes.formControl} style={{ width: "100%" }}>
               {props.name ?
                   <InputLabel htmlFor="outlined-age-native-simple">{props.name}</InputLabel> : ""
               } */}
      <Select
        style={{
          width: "100%",

          background: props.disabled ? "rgba(192, 192, 192, 0.41)" : "",
        }}
        displayEmpty
        renderValue={(value) =>
          values[props.name]
            ? values[props.name]
            : props.name
            ? props.value
            : "Select"
        }
        onChange={(e) => props.onChange ? props.onChange(e) : handleChange(e)}
        value={props.value ? props.value : values[props.name]}
        disabled={props.disabled ? props.disabled : ""}
        name={props.name ? props.name : "select"}
        inputProps={{ id: "outlined-age-native-simple", "aria-required": true }}
        MenuProps={{ "aria-required": true }}
        className={classes.selectEmpty}
        color="secondary"
      >
        {props.selectData.map((data) => (
          <MenuItem value={data.value}>{data.label}</MenuItem>
        ))}
      </Select>
      {values.helperText && (
        <FormHelperText>
          <b style={{ color: "red" }}>Required</b>
        </FormHelperText>
      )}
      {/* </FormControl> */}
    </form>
  );
}
SimpleSelect.propTypes = {
  handleChange: PropTypes.func,
  selectData: PropTypes.object.isRequired,
};
