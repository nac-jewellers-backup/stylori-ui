import React from 'react';
import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import { CollectionPageStylori } from './CollectionData';
import Slideshow from '../../components/Carousel/carosul';
import { makeStyles } from '@material-ui/styles';
import ChildCollectionItemOne from './ChildCollectionItemOne';
import ChildCollectionItemTwo from './ChildCollectionItemTwo';
import './Collection.css';
import { seoUrlResult } from 'queries/productListing';
import { NetworkContext } from 'context/NetworkContext';
import { useNetworkRequest } from 'hooks/NetworkHooks'

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
    var data_con = {}
    var Collectionz = {};
    const { NetworkCtx: { graphqlUrl: uri } } = React.useContext(NetworkContext);
    const classes = useStyles();
    const { loading, error, data: CollectionData, makeFetch: fetchproducts } = useNetworkRequest('/fetchproducts', {}, false, {})
    const slider = React.createRef();
    const [values, setValues] = React.useState({
        onViewMoreCollection: false
    })
    const viewMoreCollections = () => {
        setValues(
            {
                onViewMoreCollection: true
            }
        )
    }
    const map_Ids = () => {
        var arr = [];
        CollectionPageStylori.Testimony.carousel.data.map(data => {
            data.containerImage.map(val => {
                var img_url = val.navigateUrl
                var image_split = img_url.split(':')
                var product_filter = image_split[1].split("/")
                var product_filter_val = product_filter[3].split("?")
                var product_data = product_filter_val[0].split("-")
                var product_data_one = product_data[0]
                var product_data_two = product_data[1]
                arr.push(product_data_one)
                arr.push(product_data_two)
            })
        })
        return arr
    }
    const conditionfiltersSeo = { seofilter: { seoUrl: { in: map_Ids() } } }
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
    fetch(uri, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: seoUrlResult,
            variables: { ...conditionfiltersSeo },
        }),
    }).then(status)
        .then(json)
        .then(async function (data) {
            debugger
            var paramsfilter = (Object.entries(data).length !== 0 && data.constructor === Object && data.data.allSeoUrlPriorities) && data.data.allSeoUrlPriorities.nodes.map(val => {
                let attrName = val.attributeName.replace(/\s/g, '')
                let attrVal = val.attributeValue.replace(/\s/g, '')
                Collectionz[attrName] = attrVal
            })
            // fetchproducts(Collectionz)
            // CollectionPageStylori(CollectionData)
        }).catch(function (error) {
            // console.log('Request failed');
        });

    return (
        <>
            {/* {JSON.stringify(CollectionData)} */}
            <ChildCollectionItemOne CollectionData={CollectionData} />
            {
                CollectionPageStylori.Testimony.carousel.data.length >= 2 ?
                    <>
                        {
                            values.onViewMoreCollection ? <ChildCollectionItemTwo CollectionData={CollectionData} /> : <>
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
