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
import  'screens/screens.css';
import filterData from 'mappers/filterData'

class Stylori extends React.Component {
  render() {
    const { data, dataFilter } = this.props
    return (
      <Grid container >
        <Grid item xs={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
          <Header data={data} />
        </Grid>

        <Grid item xs={12}>
          <ProductDescription title="Jewellery" data={data} />
          <Filter datas={data} data={dataFilter}/>
        </Grid>
        <Grid item xs={12} >
          <Hidden smDown>
            <ChatHelp data={data} />

            <Footer />
          </Hidden>
        </Grid>
      </Grid>
    )
  }
}

// const history = (props, aa) => props.history.push(`/stylori?${aa}`);

const Components = props => {
  let { FilterOptionsCtx: { data, loading, error, dataArr, mappedFilters } } = React.useContext(FilterOptionsContext);
  let content, mapped = [];

  var arrFilters = Array(mappedFilters)
  let mappedFiltersList = filterData(arrFilters)

  // let mappedFilter = filterData(mappedFilters)

  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = productList(data, CDN_URL);
    }
  }
  if (Object.keys(data).length === 0) content =  <div className="overall-loader"><div id="loading"></div></div>
  
  else content = <Stylori {...props} data={dataArr} dataFilter={mappedFiltersList}/>
  return content
}


export default withRouter(Components);