import React from 'react';
import { GridList, GridListTile, Button } from '@material-ui/core';
import ProductCards from './index';
import { withStyles } from '@material-ui/core/styles';
import { useDummyRequest } from 'hooks';
import { productcarddatas } from 'mappers';
import productlist from 'mappers/productlist';
import { PRODUCTLIST } from 'queries';
import { useGraphql } from 'hooks/GraphqlHook';

const styles = theme => ({
  gridlistmain: {
    [theme.breakpoints.down('sm')]: {
      margin: '0px !important'
    }
  },
  gridlistmainviewmore: {
    width: '100%',
    textAlign: 'center',
    margin: '40px',
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
  }

});


class ProductLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colSize: window.innerWidth
    }
  }
  componentDidMount() {
    console.log(this.state.height);
    this.screenWidth()
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.screenWidth);
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
  render() {
    const { classes } = this.props;
    const { dataCard } = this.props.data;
    // console.log(dataCard)
    // const { loading, errro, data, mappedData } = useGraphql(productlistquery,productlistmapper);
    return (
      <div className={`productLayoutRoot `} style={this.props.styles}>
        <GridList cellHeight={"auto"} className={`productLayoutGridList ${classes.gridlistmain}`} cols={this.state.colSize} style={{ marginLeft: '12px' }}>
          {
            dataCard.map(tile => {
              return (
                <GridListTile key={tile.title} cols={tile.cols || 1} style={{ height: 'auto', paddingTop: '2%' }} >

                  {/* <ProductCard data={tile} /> */}
                  <ProductCards data={tile} />
                </GridListTile>
              )
            })

          }

        </GridList>
        <div className={`${classes.gridlistmainviewmore}`}>
          <Button variant="contained" className={`${classes.button}  ${classes.viewmoreColor}`}>
            View {dataCard.length} More Products
      </Button>
        </div>

      </div>

    );
  }

}

const Component = props => {
  const { mapped } = useDummyRequest(productcarddatas);
  const { loading, error, data } = useGraphql(PRODUCTLIST, productlist);
  if(!loading && !error){
    console.info('__MAPPED',data);
    let mapped = productlist(data);
    // setMappedData(mapped);
    console.info('__MAPPED2',mapped);
  }
  // console.info('MAPPED', loading, error, data, mappedData);
  // console.info('MAPPED2',mapped);
  if (Object.keys(mapped).length === 0) return <div></div>

  return <ProductLayout {...props} data={mapped} />
}

// export default ProductLayout

export default withStyles(styles, { withTheme: true })(Component);