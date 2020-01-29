import React from 'react';
import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import CollectionPageStylori from './CollectionData';
import Slideshow from '../../components/Carousel/carosul';
import { makeStyles } from '@material-ui/styles';
import ChildCollectionItemOne from './ChildCollectionItemOne';
import ChildCollectionItemTwo from './ChildCollectionItemTwo';
import './Collection.css';
import { seoUrlResult } from 'queries/productListing';
import { NetworkContext } from 'context/NetworkContext';
import { useNetworkRequest } from 'hooks/NetworkHooks'
import 'screens/screens.css';

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
export default function CollectionItem(props) {
    // var arr_data;
    var data_ = [];
    var data_con = {}
    let img_url = [
        "/gemstone-jewellery?sort=latest",
        "/jewellery-from+the+renaissance+collection",
        "/jewellery-from+monsoon+collection",
        "/jewellery-butterfly?sort=latest",
        "/jewellery-from+the+summer+collection"
    ]
    const { NetworkCtx: { graphqlUrl: uri, apiUrl: ApiUrl } } = React.useContext(NetworkContext);
    const classes = useStyles();
    // const { loading, error, data: CollectionData, makeFetch: fetchproducts } = useNetworkRequest('/fetchproducts', {}, false, {})
    const slider = React.createRef();
    const [values, setValues] = React.useState({
        onViewMoreCollection: false,
        arr_data: [],
        primaryNavigateUrl: null
    })
    const [loading, setLoading] = React.useState(false);
    const viewMoreCollections = () => {
        setValues({ onViewMoreCollection: true })
    }
    var arr = [];

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
    let arr_data1;
    const promiseDta = (Collectionz, img_url) => {
        return new Promise(async (resolve, reject) => {
            await fetch(`${ApiUrl}/fetchproducts`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...Collectionz
                }),
            })
                .then(status)
                .then(json)
                .then(async (data) => {
                    if (data !== undefined && data !== null && data.length > 0) {
                        data_.push(data.data)
                    }
                    // else {
                    //     window.location.href = window.location.pathname + window.location.search + window.location.hash;
                    // }
                    resolve(data.data)
                }).catch((error) => {
                    reject(false)
                    // alert("error")
                });
        })
    }

    const grapiqlData = (conditionfiltersSeo, img_url) => {
        return new Promise(async (resolve, reject) => {
            await fetch(uri, {
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
                .then(async (data) => {
                    var Collectionz = {};
                    // alert(JSON.stringify(conditionfiltersSeo))
                    var paramsfilter = (Object.entries(data).length !== 0 && data.constructor === Object && data.data.allSeoUrlPriorities) && data.data.allSeoUrlPriorities.nodes.map(val => {
                        let attrName = val.attributeName.toLowerCase()
                        let attrVal = val.attributeValue
                        Collectionz[attrName] = attrVal
                        Collectionz['offset'] = 0
                    })
                    resolve(await promiseDta(Collectionz, img_url))
                }).catch(function (error) {
                    reject(false)
                    // alert("error")
                });
        });
    }
    const getAlldata = async (img_url) => {
        return new Promise(async (resolve, reject) => {
            let cells = img_url.map(async (val) => {
                var img_url11 = val
                var product_filter = img_url11.split("/")
                var product_filter_val = product_filter && product_filter[1].split("?")
                var product_data = product_filter_val && product_filter_val[0].split("-")
                var product_data_one = product_data && product_data[0]
                var product_data_two = product_data && product_data[1]
                if (arr.length > 0) {
                    arr = []
                }
                arr.push(product_data_one)
                arr.push(product_data_two)
                const conditionfiltersSeo = { seofilter: { seoUrl: { in: arr } } }
                return await grapiqlData(conditionfiltersSeo, img_url)
            })
            await Promise.all(cells).then(data => {
                arr_data1 = CollectionPageStylori(data)
                if (Object.keys(arr_data1).length > 0) {
                    values["arr_data"] = arr_data1.CollectionPageStylori
                    // values["primaryNavigateUrl"] = arr_data1.primaryNavigateUrl
                    setValues({
                        ...values,
                        values
                    })
                    // window.scrollTo(0,1)
                    resolve(true)
                }

            }).catch(() => { reject([]) })
        })
    }
    React.useEffect(() => {

        getAlldata(img_url);

    }, [])

    let onViewMoreCollect = values && values.onViewMoreCollection
    React.useEffect(() => {
        if (values.onViewMoreCollection === true) {

            getAlldata(img_url);
        }
    }, [onViewMoreCollect])
    return (
        <>
            {(values.arr_data && values.arr_data.Testimony && values.arr_data.Testimony.carousel && values.arr_data.Testimony.carousel.data.length) === (img_url && img_url.length) ? <>
                <ChildCollectionItemOne CollectionPageStylori={values.arr_data} />
                {
                    values.arr_data && values.arr_data.Testimony && values.arr_data.Testimony.carousel.data.length >= 2 ?
                        <>
                            {
                                values.onViewMoreCollection === true ? <ChildCollectionItemTwo CollectionPageStylori={values.arr_data} /> : <>
                                    <Grid container>
                                        <Grid item style={{ margin: "auto" }}>
                                            <Button type="button" className={classes.ButtonViewMoreCollections} onClick={() => {
                                                viewMoreCollections()
                                            }} >view More Collections</Button>
                                        </Grid>
                                    </Grid>
                                </>
                            }
                        </>
                        : ''
                }
            </>
                : <>
                    {<div className="overall-loader"><div id="loading"></div></div>}</>}
        </>
    )
}
