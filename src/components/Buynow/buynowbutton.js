import React from 'react';
import '../product-image-slider/product-images.css'
import {
    Button,
} from '@material-ui/core';
class Buynowbutton extends React.Component {
    render() {
        return (
            <div>
                <Button className={this.props.class}>
                    <i class="fa fa-shopping-bag buynow-icon"></i> <span className={this.props.button}>Buy Now</span>
             </Button>
            </div>
        )
    }
}
export default Buynowbutton;