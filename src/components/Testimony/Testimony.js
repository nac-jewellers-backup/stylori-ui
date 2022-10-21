import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import './Testimony.css';
import { Grid } from '@material-ui/core';
import Testimonycarosol from './Testimonycarosol';
import Stories from '../../components/Stories/Index'
import TestimonyImage from './TestimonyImage';
import { API_URL } from '../../config'
import { testimonials } from 'queries/home';

export default function Testimony(props) {
    const [state, setState] = React.useState(false)

    let url = API_URL;
    useEffect(() => {
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
        fetch(`${url}/graphql`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                query: testimonials
            })
        })
            .then(status)
            .then(json)
            .then(data => {
                return (
                    setState(data)
                )
            })
           // eslint-disable-next-line
    }, [])


    return (

        <Grid Container style={{ width: "100%" }}>
            <Grid item className="selectionHead">
                <em className="LeftImage"></em>
                <Grid className="headerTestimony">
                    <span className="Typograpytestimony">Testimonial</span>
                </Grid>
                <em className="rightImage"></em>
            </Grid>
            <div>
            <Testimonycarosol carosolData={state} dataCarousel={props.dataCarousel} />
            </div>
            <div 
            // data-aos="fade-left"
            >
            <TestimonyImage GridImage={props.GridImage} />
            </div>
        </Grid >
    )
}
