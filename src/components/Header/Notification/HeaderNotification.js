import React from 'react';
import posed from 'react-pose';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import close from "../../../assets/Icons/close.svg"

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
                    style={{zIndex:10000}}

                >
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={8} style={{ textAlign: 'center',fontSize:'14px' }}>
                        Signup on Stylori | Avail Exclusive Offer on Your First Purchase
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'center', fontSize: '18px' }}>
                        <span
                        onClick={() => { this.setState({ isVisible: false });this.props.headerTransition() }}
                        ><img className="icons-header-size-snot-hover" src={close}/></span>
                        {/* <i className=' fa fa-times-circle top-close' ></i> */}
                    </Grid>
                </Grid>

            </Notification>

        );
    }
}

export default withStyles(styles)(NotificationMessage);