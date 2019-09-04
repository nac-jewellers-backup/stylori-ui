import React,{Component} from 'react';
import {GridList, GridListTile} from '@material-ui/core';
import ProductCards from './index';
import {dataCard} from './ProductData';



class ProductLayout extends Component
{
  constructor(props){
    super(props)
    this.state={
      colSize:window.innerWidth
    }
  }
  componentDidMount() {
    console.log(this.state.height);
    this.screenWidth()
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.screenWidth);
  }
   screenWidth =()=>{
    const width=window.innerWidth;
    if(width>2555)
    {
     this.setState({colSize:6}) 
    }
    else if(width>1440)
    {
      this.setState({colSize:4}) 
    }
    else if(width>760)
    {
      this.setState({colSize:4}) 
    }
    else if(width<760)
    {
      this.setState({colSize:2}) 
    }
  
  }
  render(){
 
 
console.log(dataCard)
  return (
    <div className="productLayoutRoot" style={this.props.styles}>
      <GridList  cellHeight={"auto"} className="productLayoutGridList" cols={this.state.colSize} style={{marginLeft:'12px'}}>
        {dataCard.map(tile => (
          <GridListTile key={tile.title} cols={tile.cols || 1} style={{height:'auto',paddingTop:'2%'}} >
            
           {/* <ProductCard data={tile} /> */}
           <ProductCards data={tile} />
          </GridListTile>
        ))}
  {/* <GridList  cellHeight={"auto"} className="productLayoutGridList" cols={this.state.colSize} style={{justifyContent:'center'}}> */}
          {/* <GridListTile key={tile.title} cols={tile.cols || 1} style={{height:'auto',padding:'8px'}} > */}
      </GridList>
    </div>
    
  );
}
  
}

export default ProductLayout