import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Select, OutlinedInput } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    formControl: {
        margin: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

export default function SimpleSelect(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: null,
        helperText: false
    });

    React.useEffect(() => {
        console.info('EVENT', values.age, Boolean((values.age != null && values.age !== "")));
    }, [values.age])

    function handleChange(event) {
        setValues({ [event.target.name]: event.target.value, helperText: !Boolean((event.target.value != null && event.target.value !== "")) })
    }

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl required className={classes.formControl} style={{ width: "100%" }}>
                {props.name ?
                    <InputLabel htmlFor="outlined-age-native-simple">{props.name}</InputLabel> : ""
                }
                <Select
                    renderValue={() => {
                        return (values.age)

                    }}
                    onChange={handleChange}
                    name={props.name ? props.name : ""}
                    input={<OutlinedInput id="outlined-age-native-simple" name={props.name ? props.name : ""} />}
                    inputProps={{ id: "outlined-age-native-simple", "aria-required": true }}
                    MenuProps={{ "aria-required": true }}
                    className={classes.selectEmpty}
                    variant="outlined"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {props.selectData.map(data => (
                        <MenuItem value={data}>{data}</MenuItem>
                    ))}
                </Select>
                {values.helperText && <FormHelperText><b style={{ color: 'red' }}>Required</b></FormHelperText>}
            </FormControl>
        </form>
    );
}
SimpleSelect.propTypes = {
    handleChange: PropTypes.func,
    selectData: PropTypes.object.isRequired
}