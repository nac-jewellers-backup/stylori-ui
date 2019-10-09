import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from "@material-ui/core/FormHelperText";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'

export default function Checkboxes(props) {
    let initialState = props.CheckBoxValues

    let [state, setState] = React.useState({
        data: initialState,
        helperText: false
    });

    let handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
        props.change()
    };
    // console.log(state)

    return (
        <Grid container className={`${props.classNames}`} xs={12}>
            <Grid item>


                <FormGroup >
                    {Object.keys(initialState).map(k => (
                        <FormControlLabel

                            control={<Checkbox color="primary" onChange={handleChange(k)} checked={state.k} value={k} />}
                            label={k}
                        />))}

                </FormGroup>
                {state.helperText && <FormHelperText><b style={{ color: 'red' }}>Required</b></FormHelperText>}

            </Grid>
        </Grid>
    );
}
Checkboxes.propTypes = {
    handleChange: PropTypes.func,
    CheckBoxValues: PropTypes.object.isRequired,
    classNames: PropTypes.string

}