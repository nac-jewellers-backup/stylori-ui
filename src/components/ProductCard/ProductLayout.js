import React from 'react';
import { GridList, GridListTile, Button } from '@material-ui/core';
import ProductCards from './index';
import { withStyles } from '@material-ui/core/styles';
import { useDummyRequest } from 'hooks';
import { productcarddatas } from 'mappers';
import productlist from 'mappers/productlist';
import { PRODUCTLIST } from 'queries';
import { useGraphql } from 'hooks/GraphqlHook';
import { CDN_URL } from 'config';
import { FilterOptionsContext } from 'context'
import { withRouter } from "react-router";


const styles = theme => ({
  gridlistmain: {
    [theme.breakpoints.down('sm')]: {
      margin: '0px !important',
      marginTop: '10px !important'
    }
  },
  gridlistmainviewmore: {
    width: '100%',
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '40px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '75px',
    },


    button: {
      margin: theme.spacing(1),
    },
  },
  viewmoreColor: {
    backgroundColor: '#3a4578',
    color: 'white',
    padding: '6px 12px',
    '&:hover': {
      backgroundColor: '#3a4578',
      opacity: '0.8'
    }
  },


});
const ProductLayout = (props) => {
  const { setOffset, setFirst, FilterOptionsCtx } = React.useContext(FilterOptionsContext);
  return <Component offset={FilterOptionsCtx.offset} setOffset={setOffset} setFirst={setFirst} loadingFilterCtx={FilterOptionsCtx.loadingfilters} {...props} />
}

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colSize: window.innerWidth,
      loading: false,
      loadingtext: false
    }
  }
  componentDidMount() {

    this.screenWidth()
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.screenWidth);
    // setTimeout(function () { this.setState({ loading: false }); }.bind(this), 2000);
  }
  screenWidth = () => {
    const width = window.innerWidth;
    if (width > 2555) {
      this.setState({ colSize: 6 })
    }
    else if (width > 1440) {
      this.setState({ colSize: 4 })
    }
    else if (width > 1024) {
      this.setState({ colSize: 4 })
    }
    else if (width > 960) {
      this.setState({ colSize: 3 })
    }
    else if (width > 760) {
      this.setState({ colSize: 4 })
    }
    else if (width < 760) {

      this.setState({ colSize: 2 })
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    if (this.props.data !== prevProps.data) {
      this.setState({ loadingtext: false })
      // setTimeout(function(){ this.setState({loading:false}); }.bind(this), 2000);
    }



  }
  handleOffset = () => {
    const offsets = this.props.offset + 24
    // console.log('offsets', offsets)
    this.setState({ loadingtext: true })
    this.props.setOffset(offsets)

  }
  render() {
    const { classes, data, loading } = this.props;
    const { disabledstate } = this.state;
    // const _height = (data && data.imageResolution) ? `${data.imageResolution.img_res + 120}px` : `350px`
    // const disabledstate = this.props.data.length < 24 ? 'disabled=true' : ''
    // console.log(dataCard)
    // const { loading, errro, data, mappedData } = useGraphql(productlistquery,productlistmapper);
    return (
      <div className={`productLayoutRoot `} style={this.props.styles}>
        {
          <>
            {this.props.loadingFilterCtx && <div className="overall-loaders"><div id="loadings"><img src="https://alpha-assets.stylori.com/images/static/loadingimg.gif" alt="loading..." /></div></div>}
            {this.props.loadingFilterCtx === false && <>
              <GridList cellHeight={"auto"} className={`productLayoutGridList ${classes.gridlistmain}`} cols={this.state.colSize} style={{ margin: '25px !important' }}>
                {
                  data.map(tile => {

                    return (
                      tile && Object.entries(tile).length > 0 ?
                        <GridListTile key={tile.title} cols={tile.cols || 1} style={{ padding: '0 !important' }} className={`${classes.liClass}`} >
                          {/* <ProductCard data={tile} /> */}
                          <ProductCards data={tile} wishlist={this.props.wishlist}/>
                        </GridListTile>
                        :
                        ''
                    )
                  })

                }

              </GridList>

              <div className={`${classes.gridlistmainviewmore}`}>
                {this.state.loadingtext
                  ?
                  <div style={{ textAlign: 'center' }}>Loading...</div>
                  :
                  <>
                  {
                    data && data.length !== 0 ?
                  data[0] && data[0].totalCount && (data[0].totalCount - data.length === 0 ||  data[0].totalCount - data.length < 0) ?
                    ''
                    :
                    <Button variant="contained" className={`${classes.button}  ${classes.viewmoreColor}`} onClick={() => { this.handleOffset() }} disabled={data && data.length < 24} >
                      {data && data.length === 0 && `No products found`}
                      {data && data.length >= 24 && ` View ${data && data.length > 0 && data[0] ? data[0].totalCount - data.length : ''} More Products`}
                      {(data && data.length > 0 && data.length < 24)
                        && `Only ${data && data.length > 0 && data[0]? data[0].totalCount - data.length : ''} products avalilable`}
                    </Button>
                    :
                        <>
                    <div>No Products Found.</div>
                    {/* <div onClick={()=>{this.props.history.push('/jewellery')}}>Try Again.</div> */}
                    <a href="/jewellery">Try Again.</a>
                    {/* <Redirect to="/jewellery" >Try Again.</Redirect> */}
                    </>
                  }
                    
                  </>
                }

              </div>


            </>}
          </>
        }
      </div>

    );
  }

}


export default withRouter(withStyles(styles, { withTheme: true })(ProductLayout));