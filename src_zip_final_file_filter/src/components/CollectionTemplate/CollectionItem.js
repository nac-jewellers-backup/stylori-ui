import React from 'react';
import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import { CollectionPageStylori } from './CollectionData';
import Slideshow from '../../components/Carousel/carosul';
import { makeStyles } from '@material-ui/styles';
import ChildCollectionItemOne from './ChildCollectionItemOne';
import ChildCollectionItemTwo from './ChildCollectionItemTwo';
import './Collection.css';

const useStyles = makeStyles(theme => ({
    ButtonViewMoreCollections: {
        fontSize: '12px',
        textTransform: "capitalize",
        color: '#394578',
        borderRadius: '0px !important',
        padding: '9px 29px',
        backgroundColor: '#fff',
        border: '1px solid #394578'
    }
}))
export default function CollectionItem() {
    const classes = useStyles();
    const slider = React.createRef();
    const [values, setValues] = React.useState({
        onViewMoreCollection: false
    })
    const viewMoreCollections = () => {
        setValues(
            {
                onViewMoreCollection:true
            }
            )
    }
    return (
        <>
           <ChildCollectionItemOne/>
            {
                CollectionPageStylori.Testimony.carousel.data.length >= 2 ?
                    <>
                        {
                            values.onViewMoreCollection ? <ChildCollectionItemTwo /> : <>
                                <Grid container>
                                    <Grid item style={{ margin: "auto" }}>
                                        <Button type="button" className={classes.ButtonViewMoreCollections} onClick={viewMoreCollections} >view More Collections</Button>
                                    </Grid>
                                </Grid>
                            </>
                        }
                    </>
                 : ''
            }
        </>
    )
}
