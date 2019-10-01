import React, { Component } from 'react';
import ProductDetail from 'containers/productDetail';
import { ProductDetailProvider } from 'context'
import { withRouter } from 'react-router-dom';

class Stylori extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: (props.location.state && props.location.state.data !== undefined) ? props.location.state.data : '',
      // ringSize:
    }
  }

  render() {
    return (
      <div>
        {this.props.location.state && this.props.location.state.data !== undefined ?
          <ProductDetailProvider productId={this.state.productId} 
          // ringSize={
          //   this.state.ringSize
          // }
          >
            <ProductDetail />
          </ProductDetailProvider>
          :
          window.location.href = "/stylori"
        }

      </div>
    )
  }
}
export default withRouter(Stylori)
