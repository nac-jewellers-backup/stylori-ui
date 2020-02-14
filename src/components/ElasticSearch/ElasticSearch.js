import React from 'react'
import {API_URL} from 'config.js'
import {
    Grid,
    InputBase,
    Typography,
    InputAdornment,
    ListItem
} from '@material-ui/core';
import {
    Link
  } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Seach from '../../assets/search'

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        overflow: "scroll",
        backgroundColor: "#fff",
        // transition: "all 3s"
    },
    closeIcons: {
        fontSize: "16px",
        color: "#b2b1b1",
        padding: "4px 7px 5px 6px",
        border: "1px solid #b2b1b1",
        borderRadius: "100%"
    },
    conatinerFull: {
        padding: "18px 18px"
    },
    withinput: {
        fontSize: "1.0rem",
        padding: "0px 0px 0px 8px",
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: " 0px",
        height: "40px !important",
        fontFamily: "Robot-Black!important",

    },
    closeContainer: {
        padding: "0px 0px 12px 0px"
    },
    productTitle: {
        fontSize: "0.9rem",
        color: " #666",
        padding: "8px 8px 8px 12px"
    },
    TitleContainer: {
        width: "100%",
        backgroundColor: "#eaeaea",
        marginBottom: "12px"
    },
    productSublist: {
        fontSize: "0.82rem",
        color: " #666",
        padding: "6px 8px 6px 20px"
    },
    searchContainer: {
        maxWidth: "950px",
    },
    link:{
        textDecoration:"none"
    }

}))
export default function ElasticSearch(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(null)
    const [data, setData] = React.useState({})
    const product = ["Bange", "Ring", "pendent", "Nosepin"]
    
    const handleChange = (e) =>{
        setValue(e.target.value)

        const status = (response) => {

            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        }

        const json = (response) => {
            return response.json()
        }
        fetch(`${API_URL}/auto_complete`, {

            method: 'post',
            // body: {query:seoUrlResult,variables:splitHiphen()}
            // body: JSON.stringify({query:seoUrlResult}),

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "search_text":`${e.target.value}`
            })
        })
            .then(status)
            .then(json).then(async val => { 
                setData(val)
                console.log(val, "elastic search")
            })
    }
    return (
        <Grid container className={classes.root}>
            <Grid xs={12} className={classes.conatinerFull}>
                <Grid container justify="flex-end" className={classes.closeContainer} onClick={() => props.handleClose()}>
                    <i style={{}} class={`${classes.closeIcons} fa fa-times closebus`}></i>
                </Grid>
                <Grid container justify="center" style={{ paddingBottom: "16px" }}>
                    <Grid item container className={classes.searchContainer}>
                        <InputBase
                        autoFocus
                            className={classes.withinput}
                            placeholder="Search"
                            value={value}
                            onChange={(e)=>handleChange(e)}
                            endAdornment={<InputAdornment position="end"><div className={classes.searchcontainerplain}><Seach className={"searchPlain"} />
                            </div></InputAdornment>} />
                    </Grid>
                </Grid>
                <Grid container justify="center" >
{
Object.entries(data).length>0 && data.seo_results.length > 0? 
        <Grid container item className={classes.searchContainer}>
        <Grid item className={classes.TitleContainer} xs={12}>
            <Typography className={classes.productTitle}>
            seo_results
        </Typography>
        </Grid>
        {
            
            data.seo_results.map(val =>
        <Grid item xs={12} style={{margin:"5px"}}>
         
            {/* <a href={`/${val.seo_url}`} className={classes.productSublist}>
                {val.seo_name}
            </a> */}
            <Link to={`/${val.seo_url}`} className={`${classes.productSublist} ${classes.link}`} replace >{val.seo_name}</Link>

        
        </Grid>
        )
           
        }
    </Grid>
    :
    null
    
}
{
Object.entries(data).length>0 && data.sku_results.length>0 ? 
        <Grid container item className={classes.searchContainer}>
        <Grid item className={classes.TitleContainer} xs={12}>
            <Typography className={classes.productTitle}>
            sku_results
        </Typography>
        </Grid>
        {
                
            data.sku_results.map(val => 
        <Grid item xs={12} style={{margin:"5px"}}>
            {/* <a href={`/${val.sku_url}`} className={classes.productSublist}>
                {val.sku_code}
            </a> */}
            <Link to={`/${val.sku_url}`} className={`${classes.productSublist} ${classes.link}`} replace > {val.sku_code}</Link>
        </Grid>
             )
            }
    </Grid>
     :
     null

}
{
 Object.entries(data).length>0 && data.product_results.length > 0? 
        <Grid container item className={classes.searchContainer}>
        <Grid item className={classes.TitleContainer} xs={12}>
            <Typography className={classes.productTitle}>
            product_results
        </Typography>
        </Grid>
        {
            
            data.product_results.map(val =>
        <Grid item xs={12} style={{margin:"5px"}}>
       {/* <a href={`/${val.sku_url}`} className={classes.productSublist}>
                {val.product_name}
            </a> */}
            <Link to={`/${val.sku_url}`} className={`${classes.productSublist} ${classes.link}`} replace >{val.product_name}</Link>
        </Grid>
                )
                }
    </Grid>
    :
    null
}              
{
    Object.entries(data).length>0 && data.product_results.length === 0 && data.sku_results.length === 0 && data.seo_results.length === 0 ? 'no results found' : null
}
                </Grid>
            </Grid>
        </Grid>
    )
}

