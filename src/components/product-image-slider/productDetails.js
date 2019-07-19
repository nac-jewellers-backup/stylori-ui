import React from "react";
import './product-images.css';
import { Grid, ListItemText } from '@material-ui/core';
import data from './producthoverData'

class ProductDetails extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={12} >
                    {data.productsDetails.map(val => (
                        <>
                            <h4 key={val.name} className="product-details">{val.header}</h4>
                            <hr class="bottom-line"></hr>
                            <>{
                                val.namedetail !== undefined && val.namedetail.map(res => <Grid container item xs={12} >
                                    <Grid xs={6} >
                                        <ListItemText variant='' className="product-subhead">
                                          <span style={{fontSize:"12px"}}> {res.name}</span>  
                                        </ListItemText>
                                    </Grid>
                                    <Grid xs={6}>
                                        <ListItemText variant='' className="product-subhead-list">
                                        <span style={{fontSize:"12px"}}> {res.details}</span>  
                                        </ListItemText>
                                    </Grid>
                                </Grid>)
                            }</>
                        </>
                    ))}
                </Grid>
                <Grid container spacing={12} >
                    {data.productsPendants.map(val => (
                        <>
                            <h4 key={val.name} className="product-details">{val.header}</h4>
                            <hr class="bottom-line"></hr>
                            <Grid item xs={12} className="product-subhead">
                            <span style={{fontSize:"12px"}}>{val.name.join(' ')}</span>  
                            </Grid>
                        </>
                    ))}
                </Grid>

            </div>
        );
    }
}
export default ProductDetails;