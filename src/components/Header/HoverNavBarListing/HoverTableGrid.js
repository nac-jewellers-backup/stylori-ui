import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    colorMain: {
        color: theme.palette.primary.main
    }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function HoverTableGrid(props) {
    const classes = useStyles();
    return (
        <Grid container style={{ marginTop: '5%' }} className={classes.root} >
            {props.tabdata[props.activetab].map(tile =>
                <Grid container item>

                    <Grid container item xs={6} justify="flex-start" style={{ borderBottom: '1px solid  #d9d9d9', }} className={`stytheading ${classes.colorMain}`}>{tile.headers}</Grid>
                    <Grid item xs={6} style={{ borderBottom: '1px solid  #d9d9d9', padding: '1%', textAlign: 'right' }} className="stytheadingView">View All</Grid>
                    {/* <div style={{borderBottom:'2px solid black',padding:'1%'}}></div> */}

                    {
                        tile.items.map(val =>
                            <Grid item xs={4} justifyContent="space-between" style={{ padding: '1%', textAlign: 'left' }} className={`stytview ${classes.colorMain}`}>
                                {val}
                            </Grid>
                        )
                    }
                </Grid>
            )}
        </Grid>
    );
}
HoverTableGrid.propTypes = {
    tabdata: PropTypes.object,
    activetab: PropTypes.string

}
