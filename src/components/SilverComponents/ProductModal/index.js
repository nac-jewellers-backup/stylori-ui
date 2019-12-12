import React from 'react'
import Slideshow from '../../Carousel/carosul'
import { useDummyRequest } from '../../../hooks';
import { HomedataSilver } from '../../../mappers';
import { useStyles } from './styles.js'
import { Grid, Container, Hidden, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const ProductModal = (props) => {
    const dataCarousel = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
    }
    const { fadeImagessublist } = props.data;
    const classes = useStyles();
    return (
        <Grid container className={classes.containerTop} justify="center" >

            {fadeImagessublist.map(tile => {
                return (
                    <Grid item xs={12} sm={5} md={5} lg={5} xl={5} className={`ProductGrids ${classes.ProductGrids}`}>
                        <Hidden smDown>
                            <Slideshow class="subslider-carousel"
                                dataCarousel={dataCarousel} hoverlist={[tile]} hover={false} hovereffect={true} type='hover' />
                        </Hidden>
                        <Hidden mdUp>
                            <Slideshow class="subslider-carousel" hoverlist={tile}
                                dataCarousel={dataCarousel} WithoutHoverhover={true} type='hover' />
                            <Grid container item xs={12} alignContent="space-between" justify="center" className={classes.productCardDetail}>
                                <Grid container item xs={12} justify="center" className={classes.productCardTitle}>
                                    {tile.title}
                                </Grid>
                                <Grid container item xs={12} className={`${classes.productCardDescription}`}>
                                    {tile.description}
                                </Grid>
                                <Grid container item xs={12} justify="center">
                                    <Button variant="contained" className={`${classes.btnshop}`}>SHOP</Button>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>
                )
            })}


        </Grid>
    )
}
export default (props => {
    const { mapped } = useDummyRequest(HomedataSilver);
    if (Object.keys(mapped).length === 0) return ''
    return <ProductModal {...props} data={mapped} />
});



