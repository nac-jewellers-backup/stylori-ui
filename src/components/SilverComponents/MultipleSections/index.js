import React from 'react'
import { Grid } from '@material-ui/core'
import Title from '../ProductTitle'
import { TopPicksGridComponent } from '../TopPicksGridComponent/index'
import { useDummyRequest } from '../../../hooks';
import { HomedataSilver } from '../../../mappers';
import { FeaturedGridComponent } from '../FeaturedGridComponent'

const MultipleSections = (props) => {
    const { titleContiner, TopPicksimages, FeaturedCarousel } = props.data;

    return (
        <Grid container xs={12}>
            {
                titleContiner.map(title => {
                    return (
                        <>

                            <Title title={title} />

                            {title == 'TOP PICKS' && <TopPicksGridComponent data={TopPicksimages} />}
                            {title == 'FEATURED' && <FeaturedGridComponent data={FeaturedCarousel} />}
                            {title == 'TESTIMONIALS' && <FeaturedGridComponent data={FeaturedCarousel} />}

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

