import React from 'react';
import Header from 'components/Header/header'
import ProductDescription from 'components/productDescription';
import { Grid, Hidden } from '@material-ui/core';
import Filter from 'components/Filter/filter'
import Footer from "components/Footer/Footer"
import { ChatHelp } from 'components/ChatHelp';
import { FilterOptionsContext } from 'context'
import productList from 'mappers/productlist'
import { CDN_URL } from 'config';
import { withRouter } from "react-router"
import 'screens/screens.css';
import filterData from 'mappers/filterData'

class Stylori extends React.Component {
  constructor(props) {
    super()
    this.state = { loading: false };
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log(this.props.mappedFilters, prevProps.mappedFilters, this.props.data, 'prevProps.mappedFiltersprevProps.mappedFilters')

    //  if(this.props.dataFilter !== prevProps.dataFilter){

    if (this.props.mappedFilters !== prevProps.mappedFilters) {

      this.props.setloadingfilters(false)

      // }
      // setTimeout(function(){ alert("Hello"); }, 3000);
      // setTimeout(function(){  this.props.setloadingfilters(false); }.bind(this), 5000);
    }

  }
  render() {
    const { data, dataFilter } = this.props
    return (
      <>

        <Grid container >
          {this.props.loadingfilters && <div className="overlayloadingfilter">
            <div  className="text" ></div> 
            {/* className="text"    Filters updating...*/}
          </div>}
          <Grid item xs={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
            <Header data={data} cartcount={this.props.cartcount} />
          </Grid>

          <Grid item xs={12}>
            <ProductDescription title="Jewellery" data={dataFilter} />
            <Filter datas={data} data={dataFilter} />
          </Grid>
          <Grid item xs={12} >
            <Hidden smDown>
              <ChatHelp data={data} />

              <Footer />
            </Hidden>
          </Grid>
        </Grid>
      </>
    )
  }
}

// const history = (props, aa) => props.history.push(`/stylori?${aa}`);

const Components = props => {
  let { FilterOptionsCtx: { data, loading, error, dataArr, mappedFilters, cartcount, loadingfilters }, setloadingfilters } = React.useContext(FilterOptionsContext);
  let content, mapped = [];
  debugger
  // alert(JSON.stringify(cartcount))
  var arrFilters = Array(mappedFilters)
  let mappedFiltersList = filterData(arrFilters)
  // let mappedFilter = filterData(mappedFilters)
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = productList(data, CDN_URL);
    }
  }
  if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>

  else content = <Stylori {...props} cartcount={cartcount} data={dataArr} dataFilter={mappedFiltersList} loadingfilters={loadingfilters} mappedFilters={mappedFilters} setloadingfilters={setloadingfilters} />
  return content
}


export default withRouter(Components);