import React from 'react';
import posed from 'react-pose';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const Notification = posed.div({
    visible: {
        opacity: 1,
        scaleY: 1,
        
        transition: {
            opacity: { ease: 'easeOut', duration: 300 },
            default: { ease: 'linear', duration: 500 }
        },
    },
    hidden: {
        opacity: 0, 
        transition:{  opacity: { ease: 'linear', duration: 500, left: { x: -100 },
        right: { x: 100 } }}
    }
});

const styles = theme => ({
    colorDark: {
        backgroundColor: theme.palette.secondary.dark,
    
      },
      colorLight: {
        backgroundColor: theme.palette.secondary.light,
    
      },
});

class NotificationMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isVisible: true };
    }

    render() {
  
        const { isVisible } = this.state;
        const { classes } = this.props;
        return (
            <Notification pose={isVisible ? 'visible' : 'hidden'} >
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={`notificationHeader ${classes.colorDark}`}

                >
                    <Grid item xs={7} style={{ textAlign: 'right' }}>
                        Signup on Stylori | Avail Exclusive Offer on Your First Purchase
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'right', fontSize: '18px' }}>
                        <i className=' fa fa-times-circle top-close' onClick={() => { this.setState({ isVisible: false }) }}></i>
                    </Grid>
                </Grid>

            </Notification>

        );
    }
}

export default withStyles(styles)(NotificationMessage);