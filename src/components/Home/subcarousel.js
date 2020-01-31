import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Container from '@material-ui/core/Container';
import './home.css' 
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'Shimmering Array gfgf',
        imgPath:
            'https://assets-cdn.stylori.com/200x200/images/product/SR0818/SR0818-1Y.jpg',
    },
    {
        label: 'Embracing Twines dsds',
        imgPath:
            'https://assets-cdn.stylori.com/200x200/images/product/SE0109/SE0109-1Y.jpg',
    },
    {
        label: ' Swirls of Beauty dsdds',
        imgPath:
            'https://assets-cdn.stylori.com/200x200/images/product/SR0204/SR0204-1Y.jpg',
    },
];

const styles = theme => ({
    root: {
        maxWidth: '100%',
        flexGrow: 1,
        padding: "0 55px",
        boxShadow: "0 0 5px #888",
        height: "368px",
        marginTop: "45px",
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        width: '100%',
    },
});

class SubCarousel extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = tutorialSteps.length;

        return (
            <div>
                <Container minWidth="lg">
                    <div className={classes.root}>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={this.handleStepChange}
                            enableMouseEvents
                        >
                            {tutorialSteps.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        // <img className={classes.img} src={step.imgPath} alt={step.label} />

                                        <div className="subcrousel">
                                            <Paper square className={classes.header}>
                                                <Typography style={{ color: "#394578" }}>{tutorialSteps[activeStep].label}</Typography>
                                            </Paper>

                                            <Grid container spacing={12} >
                                                <Grid xs={4} lg={4}>
                                                    <Card className="sub-scrl-card">
                                                        <img src={step.imgPath} alt=""/>
                                                    </Card>
                                                    <br />
                                                    <Typography className="contents">$ 8989.8978</Typography>
                                                    <Button className="sub-button">Shop Now</Button>
                                                </Grid>
                                                <Grid xs={8}  lg={8} style={{ color: "#666666", fontSize: "14px", lineHeight: "2.428571" }}>
                                                    <b>
                                                        <img style={{ height: "57px" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTYiIGhlaWdodD0iMTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTUuMzc1LDE0NS4xMjV2LTY3LjcyNWMwLC0yOC45MTc1IDIwLjczMDMsLTUwLjAwMjU1IDQ5LjQ1LC01MC41MTQyNXYxNS4yOTcyNWMtMTkuMDM2MSw1LjQ5NTQgLTIxLjUsMjEuNjcyIC0yMS41LDM1LjIxN3YxLjA3NWgzOC43djY2LjY1eiIgZmlsbD0iI2NjY2NjYyI+PC9wYXRoPjxwYXRoIGQ9Ik01My43NSwyNy45ODg3djEzLjM5MjM1Yy0xOS4wMTI0NSw1Ljg5NzQ1IC0yMS41LDIyLjI3ODMgLTIxLjUsMzYuMDE4OTV2Mi4xNWgyLjE1aDM2LjU1djY0LjVoLTY0LjV2LTY2LjY1YzAsLTEzLjk3NSA0LjkzMjEsLTI2LjYwNDEgMTMuODg5LC0zNS41NjFjOC40OTY4LC04LjQ5NDY1IDIwLjI5NiwtMTMuMzY4NyAzMy40MTEsLTEzLjg1MDNNNTUuOSwyNS44Yy0zMC4wODA2NSwwIC01MS42LDIxLjUxOTM1IC01MS42LDUxLjZ2NjguOGg2OC44di02OC44aC0zOC43YzAsLTE1LjA0MTQgMy4yNjM3LC0yOS41MzY3IDIxLjUsLTM0LjR2LTE3LjJ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGc+PHBhdGggZD0iTTk5Ljk3NSwxNDUuMTI1di02Ny43MjVjMCwtMjguOTE3NSAyMC43MzAzLC01MC4wMDI1NSA0OS40NSwtNTAuNTE0MjV2MTUuMjk3MjVjLTE5LjAzNjEsNS40OTU0IC0yMS41LDIxLjY3MiAtMjEuNSwzNS4yMTd2MS4wNzVoMzguN3Y2Ni42NXoiIGZpbGw9IiNjY2NjY2MiPjwvcGF0aD48cGF0aCBkPSJNMTQ4LjM1LDI3Ljk4ODd2MTMuMzkyMzVjLTE5LjAxMjQ1LDUuODk3NDUgLTIxLjUsMjIuMjc4MyAtMjEuNSwzNi4wMTg5NXYyLjE1aDIuMTVoMzYuNTV2NjQuNWgtNjQuNXYtNjYuNjVjMCwtMTMuOTc1IDQuOTMyMSwtMjYuNjA0MSAxMy44ODksLTM1LjU2MWM4LjQ5NjgsLTguNDk0NjUgMjAuMjk2LC0xMy4zNjg3IDMzLjQxMSwtMTMuODUwM00xNTAuNSwyNS44Yy0zMC4wODA2NSwwIC01MS42LDIxLjUxOTM1IC01MS42LDUxLjZ2NjguOGg2OC44di02OC44aC0zOC43YzAsLTE1LjA0MTQgMy4yNjM3LC0yOS41MzY3IDIxLjUsLTM0LjR2LTE3LjJ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+"
                                                         alt=""
                                                        />   Loved the product. The design and work is simply superb 👌 👌 👌 👌 .
                                                                                                             Since ordering till delivery everything is taken care and sent.
                                                                                                             I have seen many websites regarding jewellery but I liked Stylori
                                                                                                              because of its unique designs. I would wish to purchase more as already
                                                                                                             my 2nd order is also placed. Thank you very much “Stylori”😊
                                                                                                      &NBSP;
                                                <img style={{ height: "47px", float: "right" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTYiIGhlaWdodD0iMTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2NjY2NjYyI+PHBhdGggZD0iTTIyLjU3NSwxMjkuODE3YzE5LjAzNjEsLTUuNDk1NCAyMS41LC0yMS42NzIgMjEuNSwtMzUuMjE3di03LjUyNWgyNy45NXY3LjUyNWMwLDI4LjkxNzUgLTIwLjczMDMsNTAuMDAyNTUgLTQ5LjQ1LDUwLjUxNDI1eiI+PC9wYXRoPjxwYXRoIGQ9Ik03MC45NSw4OC4xNXY2LjQ1YzAsMTMuOTc1IC00LjkzMjEsMjYuNjA0MSAtMTMuODg5LDM1LjU2MWMtOC40OTY4LDguNDk0NjUgLTIwLjI5NiwxMy4zNjg3IC0zMy40MTEsMTMuODUwM3YtMTMuMzkyMzVjMTkuMDEyNDUsLTUuODk3NDUgMjEuNSwtMjIuMjc4MyAyMS41LC0zNi4wMTg5NXYtNi40NWgyNS44TTczLjEsODZoLTMwLjF2OC42YzAsMTUuMDQxNCAtMy4yNjM3LDI5LjUzNjcgLTIxLjUsMzQuNHYxNy4yYzMwLjA4MDY1LDAgNTEuNiwtMjEuNTE5MzUgNTEuNiwtNTEuNnYtOC42eiI+PC9wYXRoPjxwYXRoIGQ9Ik01LjM3NSwyNi44NzVoNjYuNjV2NjYuNjVoLTY2LjY1eiI+PC9wYXRoPjxwYXRoIGQ9Ik03MC45NSwyNy45NXY2NC41aC02NC41di02NC41aDY0LjVNNzMuMSwyNS44aC02OC44djY4LjhoNjguOHYtNjguOHoiPjwvcGF0aD48cGF0aCBkPSJNNzAuOTUsOTQuNmwtMjUuOCwyLjE1di02LjQ1aDI1Ljh6TTExNy4xNzUsMTI5LjgxN2MxOS4wMzYxLC01LjQ5NTQgMjEuNSwtMjEuNjcyIDIxLjUsLTM1LjIxN3YtNy41MjVoMjcuOTV2Ny41MjVjMCwyOC45MTc1IC0yMC43MzAzLDUwLjAwMjU1IC00OS40NSw1MC41MTQyNXoiPjwvcGF0aD48cGF0aCBkPSJNMTY1LjU1LDg4LjE1djYuNDVjMCwxMy45NzUgLTQuOTMyMSwyNi42MDQxIC0xMy44ODksMzUuNTYxYy04LjQ5NjgsOC40OTQ2NSAtMjAuMjk2LDEzLjM2ODcgLTMzLjQxMSwxMy44NTAzdi0xMy4zOTIzNWMxOS4wMTI0NSwtNS44OTc0NSAyMS41LC0yMi4yNzgzIDIxLjUsLTM2LjAxODk1di02LjQ1aDI1LjhNMTY3LjcsODZoLTMwLjF2OC42YzAsMTUuMDQxNCAtMy4yNjM3LDI5LjUzNjcgLTIxLjUsMzQuNHYxNy4yYzMwLjA4MDY1LDAgNTEuNiwtMjEuNTE5MzUgNTEuNiwtNTEuNnYtOC42eiI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik05OS45NzUsMjYuODc1aDY2LjY1djY2LjY1aC02Ni42NXoiPjwvcGF0aD48cGF0aCBkPSJNMTY1LjU1LDI3Ljk1djY0LjVoLTY0LjV2LTY0LjVoNjQuNU0xNjcuNywyNS44aC02OC44djY4LjhoNjguOHYtNjguOHoiPjwvcGF0aD48L2c+PHBhdGggZD0iTTE2NS41NSw5NC42bC0yNS44LDIuMTV2LTYuNDVoMjUuOHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" 
                                                alt=""
                                                />
                                                    </b><br />
                                                    <div style={{ marginLeft: "5%", marginTop: "2%" }}>
                                                        <Typography variant='h5' className="contents">Shree Devi </Typography>
                                                        <Typography className="contents">Shree Devi </Typography>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            // steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            className={classes.mobileStepper}
                            nextButton={
                                <Button size="small" className='nextButton' onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                            }
                            backButton={
                                <Button size="small" className='backButton' onClick={this.handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                </Button>
                            }
                        />
                    </div>
                </Container>
                <div style={{ marginTop: "45px" }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={2} >
                            <Grid item xs={3} spacing={2} style={{ height: "650px" }}>
                                <img height="100%" width="100%" src='https://assets-cdn.stylori.com/276x567/images/homepage/PendantVertical.png' 
                                alt=""
                                /></Grid>
                            <Grid container item xs={9}>
                                <Grid container xs={12} spacing={2}>
                                    <Grid item xs={4}>
                                        <img height="100%" width="100%" src='https://assets-cdn.stylori.com/276x276/images/homepage/BangleSquare.png' alt=""/>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <img height="100%" width="100%" src='https://assets-cdn.stylori.com/1150x575/images/homepage/EarringRectangle.png' alt=""/>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} spacing={2} style={{ marginTop: "6px" }}>
                                    <Grid item xs={8}>
                                        <img height="100%" width="100%" src='https://assets-cdn.stylori.com/552x276/images/homepage/RingRectangle.png' alt=""/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <img height="100%" width="100%" src='https://assets-cdn.stylori.com/276x276/images/homepage/nosepinSquare.png' alt=""/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SubCarousel);