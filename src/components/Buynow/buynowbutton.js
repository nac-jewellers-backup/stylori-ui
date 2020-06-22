import React from 'react';
import '../product-image-slider/product-images.css'
import { withRouter } from "react-router";
import {
    Button,
} from '@material-ui/core';
// var valus = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products[0].sku_id : ""
let path = window.location.pathname.split('/').pop();
// const path = window.location.pathname !== "cart" || window.location.pathname!== "checkout"
class Buynowbutton extends React.Component {
    
    valus = (props) => {
        
        var valus_locl = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : ""
        
        var vals;
        // return valus_locl && valus_locl.map(val => {
        //     const vlx = this.props && this.props.sku
        //     if (vlx === val.sku_id) {
        //         vals = 1
        //         return vals
        //     } else {
        //         vals = 0
        //         return vals
        //     }

        // })
        if (valus_locl) {
            let productIds = valus_locl.map((val) => {
              return val.sku_id;
            });
            productIds.indexOf(props.sku) > -1 ? (vals = 1) : (vals = 0);
          }
          debugger;
          return vals;
        
    }
    componentDidUpdate(){
        debugger
        this.valus(this.props)

    }
    componentDidMount(){
        this.valus(this.props)

    }
    render() {
        return (
            <div>
                <Button  className={this.props.class} style={{ borderRadius: "5px" }}>
                    {path !== "cart" && path !== "checkout" && this.valus(this.props) === 1 ? <>
                        <i class="fa fa-shopping-bag buynow-icon"></i>
                        <span> In bag!</span>
                    </> : <>
                            {!this.props.isSilver && !this.props.smallScreen && <i class="fa fa-shopping-bag buynow-icon"></i>}
                            {this.props.isSilver && this.props.smallScreen ? 'ADD TO CART' : <span className={this.props.button}>Buy Now</span>}
                        </>
                    }

                </Button>
            </div>
        )
    }
}
export default withRouter(Buynowbutton);