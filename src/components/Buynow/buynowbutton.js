import React from 'react';
import '../product-image-slider/product-images.css'
import { withRouter } from "react-router";
import {
    Button,
} from '@material-ui/core';
class Buynowbutton extends React.Component {
    render() {
        return (
            <div>
                <Button className={this.props.class} style={{borderRadius:"5px"}}>
                    <i class="fa fa-shopping-bag buynow-icon"></i> <span className={this.props.button}>Buy Now</span>
             </Button>
            </div>
        )
    }
} 
export default withRouter(Buynowbutton);