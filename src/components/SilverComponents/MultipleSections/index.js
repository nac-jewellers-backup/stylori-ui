import React from 'react'
import { Grid } from '@material-ui/core'
import Title from '../ProductTitle'
import { TopPicksGridComponent } from '../TopPicksGridComponent/index'
import { useDummyRequest } from '../../../hooks';
import { HomedataSilver } from '../../../mappers';
import { FeaturedGridComponent } from '../FeaturedGridComponent'
import Testimonialsmodel from '../TestimonialModel'
import { useStyles } from './style.js'
import GridList from "components/GridList/GridList";
import { silverStyloriHomepage } from 'queries/home';
import { API_URL } from '../../../config'


const MultipleSections = (props) => {
    const { titleContiner, TopPicksimages, FeaturedCarousel, testimonyCarousel, collectionGrid } = props.data;

    
    const classes = useStyles();
    return (
        <Grid container className={classes.containerTop}>
            {
                titleContiner.map(title => {
                    return (
                        <>
                            <Title title={title} isSilver={true}/> 
                            {title == 'TOP PICKS' &&<GridList GridImage={collectionGrid} isHover={props.isHover}/>}
                            {title == 'FEATURED' && <FeaturedGridComponent data={FeaturedCarousel} />}
                            {title == 'TESTIMONIALS' && <Testimonialsmodel data={testimonyCarousel} testimonyCarousel={props.testimonyCarousel} />}

                        </>
                    );
                }
                )
            }
        </Grid>
    )
}

export default (props => {
    const [state, setState] = React.useState({data:[], testimonyCarousel:[]})
    React.useEffect(()=>{
        function status(response) {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        }

        function json(response) {
            return response.json()
        }
        fetch(`${API_URL}/graphql`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                query: silverStyloriHomepage
            })
        })
        .then(status)
        .then(json)
            .then(data => {
                setState({...state, data:data})
            })
    },[])
    const mapperData = (data) => {
        const _stateMapper =data &&  data.data &&  data.data.allCustomerReviews && data.data.allCustomerReviews.nodes.length > 0 && data.data.allCustomerReviews.nodes ? data.data.allCustomerReviews.nodes : []
        
        if(_stateMapper  && _stateMapper.length > 0){
          return [0,1].map((val)=> ({
            Content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
            name: "Selvan",
            location: 'Chennai'
        })
    )
      }
      else{
          return [{}]
      }
    }
    const testimonyCarousel = 

    
        [
            {
                settings: {
                    dots: true,
                    infinite: true,
                    autoplay: false,
                    speed: 1000,
                    fade: false,
                    arrows: false,
                    dotsClass: "featureCarousel",
                },
                images: mapperData(state.data) 
            }]
    React.useState(()=>{
        setState({...state,testimonyCarousel})
        // console.log(state.data,"vada mapala")
    },[state.data])
     

    const { mapped } = useDummyRequest(HomedataSilver);
    if (Object.keys(mapped).length === 0) return ''

    return <MultipleSections {...props} data={mapped}  testimonyCarousel={state.testimonyCarousel}/>
});

