import React, { Component } from 'react';
import './ProductDescription.css'
import CustomSeparator from '../BreadCrumb'


class ProductDescription extends Component{
  constructor(props){
    super(props)
  }
render(){
debugger
    return(
        <>

{/* <div className="div1">

<div className="div1-1">
<CustomSeparator />
</div>
<div className="div1-2">
Jewellery
</div>
</div> */}




        <div class="grid-container">
         
    <div class="grid-item1">
  <CustomSeparator  />
  </div>
  <div class="grid-item2">
      <h2>Jewellery</h2>
  
  </div>
  </div>
  <div class="grid-container1">
  <div class="grid-item3">
      
      <img src="https://assets-cdn.stylori.com/300x300/images/product/SE0749/SE0749-1Y.jpg" width="120px" height="120px" />
  
  </div>
  <div class="grid-item4">For every occasion and non-occasion. Shop our range of everyday fashion jewellery featuring gold, silver and stone rings and earrings, for work, play and everything in between. Give special occasions a little extra glimmer with our range of bridal jewellery ranging from engagement rings to wedding r... 
  </div>
{/*  */}
{/*  */}


  {/*  */}
  {/*  */}
  
  </div>
  {/* <div className="col-md-6 text-pdng1 div-ad">
               
               <p className="earings-para more-banner">For the most special day in your life, and other days too. Create a memory that lasts a lifetime with engagement rings and wedding rings that form the sacred bond.  Shop from our collection of rings for men and women with a range of casual, classic, solitaire rings and men's rings. Find the latest r<span class="moreellipses" style={{display: 'inline'}}>...&nbsp;</span><span class="morecontentbanner" style={{display: 'none'}}>ing designs, crafted using the finest jewellery design and jewellery making principles.  Buy our jewellery online for fast deliveries and an easy returns policy.<br />For every occasion and non-occasion. Shop our range of everyday fashion jewellery featuring gold, silver and stone rings and earrings, for work, play and everything in between. Give special occasions a little extra glimmer with our range of bridal jewellery ranging from engagement rings to wedding rings to classic party wear.  Crafted using the finest jewellery design and jewellery making principles, buy our jewellery online for fast deliveries and an easy returns policy.<br />&nbsp;&nbsp;</span></p>
               <p className="know-txt" style={{display: 'block'}}>
                  <span className="glyphicon glyphicon-play hidden-xs hidden-sm"></span> READ MORE
               </p>
               <p className="close-txt" style={{display: 'none'}}>
                  <span className="glyphicon glyphicon-triangle-top hidden-xs hidden-sm"></span> CLOSE
               </p>
            </div> */}
            
  </>
    );
}

}
export default ProductDescription;