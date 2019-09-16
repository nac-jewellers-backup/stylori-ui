
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';
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
        // width: 580,
        // height: 450,
        
    },
}));


function ImageGridList(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={4}>



                {props.tabdata[props.activetab].map(tile => (
                    <>
                    <GridListTile key={tile.img} cols={tile.cols || 1} >
                        <img src={tile.img} style={{width:'100%',height:'auto'}}  alt="img" />
                        <div>
                        Product
                    </div>
                    </GridListTile>
            
                    </>

                ))}

            </GridList>

        </div>
    );
}

export default ImageGridList;

ImageGridList.propTypes = {
    tabdata: PropTypes.object,

}
