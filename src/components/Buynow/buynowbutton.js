import React from 'react';
import '../product-image-slider/product-images.css'
import {
    Button,
} from '@material-ui/core';
class Buynowbutton extends React.Component {
    render() {
 let path = window.location.pathname.split('/').pop();
 return (
            <div>
                <Button className={this.props.class} style={{borderRadius:"5px",boxShadow:"rgba(216, 59, 59, 0.32) 0px 8px 15px"}}>
                    {path=='checkout'?"":<i class="fa fa-shopping-bag buynow-icon"></i>} <span className={this.props.button}>{this.props.buttonname}</span>
             </Button>
            </div>
        )
    }
}
export default Buynowbutton;