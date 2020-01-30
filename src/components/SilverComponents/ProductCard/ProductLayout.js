import React from 'react';
import { GridList, GridListTile, Button } from '@material-ui/core';
import ProductCards from './index';
import { withStyles } from '@material-ui/core/styles';
import { FilterOptionsContext } from 'context'

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
  const { setOffset, setFirst, FilterOptionsCtx: { offset } } = React.useContext(FilterOptionsContext);
  return <Component offset={offset} setOffset={setOffset} setFirst={setFirst}  {...props} />
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
    const { classes, data } = this.props;

    // const { disabledstate } = this.state;
    // const disabledstate = this.props.data.length < 24 ? 'disabled=true' : ''
    // console.log(dataCard)
    // const { loading, errro, data, mappedData } = useGraphql(productlistquery,productlistmapper);
    return (
      <div className={`productLayoutRoot `} style={this.props.styles}>
        {
          <>
            {this.state.loading && <div className="overall-loaders"><div id="loadings"><img src="https://alpha-assets.stylori.com/images/static/loadingimg.gif" alt="loading..." /></div></div>}
            {this.state.loading === false && <>
              <GridList cellHeight={"auto"} className={`productLayoutGridList ${classes.gridlistmain}`} cols={this.state.colSize} style={{ margin: '25px !important' }}>
                {
                  data.map(tile => {

                    return (
                      tile && Object.entries(tile).length > 0 ?
                        <GridListTile key={tile.title} cols={tile.cols || 1} style={{ height: 'auto', padding: '0 !important', marginBottom: '12px', marginTop: '12px' }} className={`${classes.liClass}`} >

                          {/* <ProductCard data={tile} /> */}
                          <ProductCards data={tile} />
                        </GridListTile>
                        :
                        ''
                    )
                  })

                }

              </GridList>

              <div className={`${classes.gridlistmainviewmore}`}>
                {this.props.loading
                  ?
                  <div style={{ textAlign: 'center' }}>Loading...</div>
                  :
                  <>
                    <Button variant="contained" className={`${classes.button}  ${classes.viewmoreColor}`} onClick={() => { this.handleOffset() }} disabled={data.length < 24} >
                      {data.length === 0 && `No products found`}
                      {data.length >= 24 && ` View ${data.length > 0 ? data[0].totalCount - data.length : ''} More Products`}
                      {(data.length > 0 && data.length < 24)
                        && `Only ${data.length > 0 ? data[0].totalCount - data.length : ''} products avalilable`}
                    </Button>
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


export default withStyles(styles, { withTheme: true })(ProductLayout);