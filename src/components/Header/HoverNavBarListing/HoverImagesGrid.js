import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, Grid } from '@material-ui/core';
import './../header.css'
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        padding:'2%'
    },
    gridList: {
        width: 500,
        // height: 450,
    },
    imgTextColor: {
        color: theme.palette.primary.main
    },
    ulDiv:{
        '& div':{
            textAlign:'left'
        }
    }
}));


function ImageGridList(props) {
const {activetab} = props
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <GridList cellHeight={170} className={classes.gridList} cols={3}>
                    {props.tabdata[props.activetab].images.map((tile,i) =>{
                   
                     return(

                        <GridListTile key={`${tile.img}-${i}`} cols={tile.cols || 1} className={`${classes.ulDiv}`} >
                            <img src={tile.img} className={'shine menuListHoverDiv  '}  cols={tile.cols || 1} style={{ width: '120px', height: '120px' }} alt="" />
                            <Grid container justify="center">
                                <Grid item className={classes.imgTextColor}>
                                    {/* {tile.title} */}
                                    Worth things
                </Grid>
                            </Grid>
                        </GridListTile>


                    )}
                    )}


                </GridList>
                <span style={{ color: '#f36e23', position: 'relative' }}>
                    View All
            </span>
            </div>
            <Grid container xs={3}>
                {props.tabdata && props.tabdata[props.activetab] && props.tabdata[props.activetab].sideBanner.map(tile => (
                    <Grid item>
                        <img src={tile.img} cols={2} alt="img" style={{ width: '100%', height: '100%' }} />
                    </Grid>

                ))}

            </Grid>
        </div>
    );
}

export default ImageGridList;

ImageGridList.propTypes = {
    tabdata: PropTypes.object,
    activetab: PropTypes.string

}