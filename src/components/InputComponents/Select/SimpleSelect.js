import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Select, OutlinedInput } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    mroot: {
        width: "100%",
        backgroundColor:"#fff",
        "& .MuiInputBase-input":{
          padding: '6px 5px 7px',
        }
      },
      root1: {
        width: "85%",
        "& .MuiOutlinedInput-input":{
           height:"35px !important"
        },
        marginTop:8,
        [theme.breakpoints.down("sm")]: {
         width:"95%"
        },
        backgroundColor:"#fff",
        "& .MuiInputBase-input":{
          padding: '6px 5px 7px',
        }
      },
    formControl: {
        margin: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));
export default function SimpleSelect2(props) {
    const classes = useStyles();
    const [invalid, setInvalid] = React.useState(false);
    const handleChange = e => {
        setInvalid(false);
        props.handleChange();
      }

      const handleInvalid = e => {
        e.preventDefault();
        setInvalid(true);
      }
    return (
        <form className={classes.root} autoComplete="off">
            <Select
                style={{ background: props.disabled ? "rgba(192, 192, 192, 0.41)" : "" }}
                displayEmpty
                onChange={handleChange}
                onInvalid={handleInvalid}
                error={invalid}
                // value={props.value}
                disabled={props.disabled ? props.disabled : ""}
                placeholder={"hello2"}
                input={<OutlinedInput id="outlined-age-native-simple" placeholder="hello"/>}
                inputProps={{ id: "outlined-age-native-simple", "aria-required": true }}
                MenuProps={{ "aria-required": true }}
                className={props.short ? classes.root1 : classes.mroot }
                variant='standard'
                {...props}
            >
               <MenuItem value="" disabled>
                  Country
               </MenuItem>
                {props.selectData.map(data => (
                    <MenuItem value={data.iso}>{data.nicename}</MenuItem>
                ))}
            </Select>
            {invalid && <FormHelperText><b style={{ color: 'red' }}>{props.helperText}</b></FormHelperText>}
            {/* </FormControl> */}
        </form>
    );
}
SimpleSelect2.propTypes = {
    handleChange: PropTypes.func,
    selectData: PropTypes.object.isRequired
}