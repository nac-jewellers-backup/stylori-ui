import React, { Component } from 'react';
import {FilterOptionsProvider} from 'context'
import ProductListing from 'containers/ProductListing'
import { CartProvider } from 'context'
import CMSPages from 'screens/CMSPages';
import { API_URL } from 'config';
import { ALLCDNPAGES } from 'queries/cms';
export default class Stylori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cmspage: false,
    };
  }
  componentDidMount() {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ALLCDNPAGES,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const dataRecieved = data.data.allCdns.nodes;
        const pages = dataRecieved?.map((val) => val.page);
        console.log(pages,"kkk")
        const isCdnPage = pages.includes(window.location.pathname.split("/")[1]);
        console.log(isCdnPage,"jj")
        const p1 = window.location.pathname
        const regex = /silver/i;
        const hasSubstring = regex.test(p1);
        var in_Path=(window.location.pathname.includes("Silver")||window.location.pathname.includes("silver"))
        console.log(in_Path,"in_Path")
        console.log(hasSubstring,"hasSubstring1")
        // if(window.location.pathname.split("/")[1].includes("silver")){
        //   localStorage.setItem("isCdnPage", "true")
        // }
        if(isCdnPage || hasSubstring){
          localStorage.setItem("isCdnPage", "true")
        }
        // else{
        //   localStorage.setItem("isCdnPage", "")
        // }

        
        this.setState({
          ...this.state,
          cmspage: isCdnPage,
        });
      });
  }
  render() {
    // const fadeImages = [
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
    //   'https://assets-cdn.stylori.com/images/megamenu/ear-jacket.jpg'
    // ];

    // const dataCarousel = {
    //   dots: false,
    //   infinite: true,
    //   autoplay: true,
    //   speed: 1000,
    //   fade: true,
    //   arrows: false
    // }
    return this.state.cmspage ? (
      <CMSPages {...this.props} />
    ) : (
      <FilterOptionsProvider >
          <CartProvider>
     <ProductListing /> 
     </CartProvider>
     </FilterOptionsProvider>


    )
  }
}
