import React from 'react'
import { Grid } from '@material-ui/core'
import Title from '../ProductTitle'
import { TopPicksGridComponent } from '../TopPicksGridComponent/index'
import { useDummyRequest } from '../../../hooks';
import { HomedataSilver } from '../../../mappers';
import { FeaturedGridComponent } from '../FeaturedGridComponent'
import Testimonialsmodel from '../TestimonialModel'
import { useStyles } from './style.js'


const MultipleSections = (props) => {
    const { titleContiner, TopPicksimages, FeaturedCarousel, testimonyCarousel } = props.data;
    const classes = useStyles();
    return (
        <Grid container className={classes.containerTop}>
            {
                titleContiner.map(title => {
                    return (
                        <>
                            <Title title={title} />
                            {title == 'TOP PICKS' && <TopPicksGridComponent data={TopPicksimages} />}
                            {title == 'FEATURED' && <FeaturedGridComponent data={FeaturedCarousel} />}
                            {title == 'TESTIMONIALS' && <Testimonialsmodel data={testimonyCarousel} />}

                        </>
                    );
                }
                )
            }
        </Grid>
    )
}

export default (props => {
    const { mapped } = useDummyRequest(HomedataSilver);
    if (Object.keys(mapped).length === 0) return ''

    return <MultipleSections {...props} data={mapped} />
});

