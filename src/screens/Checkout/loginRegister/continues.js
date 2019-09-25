import React from 'react';
import './loginRegisters.css'
import { Container, Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';


class Continues extends React.Component {
    state = {
        mail: ""
    }
    handleChange(event, name) {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
    }
    render() {
        const { classes } = this.props;
        return (
            <Container>
                <div className='pt-sm'>
                    <form onSubmit={this.handleSubmit()}>
                        <Grid container spacing={12}>
                            <Grid item lg={1} />
                            <Grid item xs={12} lg={6}>
                                <h5 className={`title ${classes.normalfonts}`}>  Skip registration or login. continue as a guest  </h5>
                                <p className={`form-group tp ${classes.normalfonts}`} > (please note, you will need to login in to use a gift voucher) </p>
                                <Input
                                    margin="normal"
                                    variant="outlined"
                                    type="email"
                                    name="mail"
                                    value={this.state.mail}
                                    // error={this.state.mail ? this.state.mail : "**"}
                                    placeholder="Your Mail ID"
                                    onChange={event => this.handleChange(event, 'mail')}
                                />
                                <p className={`form-group ${classes.normalfonts}`}> We don't share these with anybody. Your contact details are secure with us. </p>

                                <div className='login-butn'>
                                    <Button className='back-b' onClick={() => this.props.change()} >Back</Button>
                                    <Button className='apply-b' type='submit'>Apply</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}
export default withStyles(styles)(Continues);