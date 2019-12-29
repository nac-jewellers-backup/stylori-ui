import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Card,CardHeader,CardMedia, CardContent, Typography} from "@material-ui/core";
import './productCard.css'
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import  Pricing  from "../Pricing";


// let theme = createMuiTheme(require('./../../theme.json'));
// theme = responsiveFontSizes(theme);
//theme={outerTheme}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: "80%",
    maxWidth: "90%",
    maxHeight:'auto',
    boxShadow: "none",
    padding: "0px",
    border: "1px solid #f5f5f5",
    [theme.breakpoints.down('sm')]: {
      minWidth: "inherit",
      maxWidth: "inherit",
    },
  },
  action: {
    paddingTop: "15px",
    margin: "0px"
  },
  avatar: {
    padding: "3px",
    margin: "0px"
  },
  header: {
    padding: "0px"
  },
  media: {

    marginRight: "15px",
    marginLeft: '15px',
    marginBottom: "15px"
  },
  colorLight: {
    color: theme.palette.secondary.light,

  },

}));
const handleClick = (name) => {
  if (name === 'truck') {
  }

}

const renderImages = (props, cardstate) => {
    const filterType = cardstate.hovered ? "hoverImage" : "placeImage";
    // console.info('props.data.image[filterType]',props.data.image[filterType]);
    return props.data.image[filterType].map(imgs=> `${imgs.img} ${imgs.size}`).toString()
   
}
const renderImagesSrc = (props, cardstate) => {
  const filterType = cardstate.hovered ? "hoverImage" : "placeImage";
  return props.data.image[filterType][0].img
}
export default function ProductCards(props) {
  const classes = useStyles();
  const [cardstate, setCardState] = React.useState({
    hovered: false,
    loaded: false,
    dataLoaded: true
  });
  
  // placeImage.placeImage.map(img => `${img.img} ${img.size}`).toString()
 
  return (
    <Card className={` ${classes.card}`} >

      <CardHeader
        className={`${props.data.image? '' : 'shine imgDiv'} classes.header`}
        avatar={
          <IconButton aria-label="Settings" className={classes.avatar}>
            <i style={{ fontSize: "18px", }} className={`fa ${classes.colorLight}`} onClick={handleClick('truck')}>
              &#xf0d1;
            </i>
          </IconButton>
        }
        action={
          <IconButton aria-label="Settings" className={classes.action}>
            <i style={{ fontSize: "18px" }} className={`fa ${classes.colorLight}`}>
              &#xf08a;
            </i>
          </IconButton>
        }
      />
      
      <Link to={{pathname:`/pricingPage/${props.data.productId}`, state: {
    data:props.data.productId}}} style={{textDecoration:'none'}} >
      {/* <a href={} target={"_blank"} style={{ textDecoration: 'none' }}> */}
        {/* <CardMedia
          component='img'
          onMouseOver={() => {
            setCardState({ ...cardstate, hovered: !cardstate.hovered });
          }}
          onMouseOut={() => {
            setCardState({ ...cardstate, hovered: !cardstate.hovered });
          }}
          className={`${props.data.image? 'shine imgDiv' :''}`}
            image={
              props.data.image[cardstate.hovered ? "hoverImage" : "placeImage"]
            }
            alt=""
          width='100%'
          height='auto'
          title={props.data.title}
        /> */}
<img 
srcset={renderImages(props, cardstate)}
sizes="(max-width: 320px) 320w,
            (max-width: 480px) 375w,
            (max-width: 600px) 600w,
            (max-width: 992px) 768w,
            (max-width: 1440px) 1440w,
            (max-width: 2560px) 2560w,
            2560w"
     alt=""

          src = {renderImagesSrc(props, cardstate)}
          title={props.data.title}
          onMouseOver={() => {
            setCardState({ ...cardstate, hovered: !cardstate.hovered });
          }}
          onMouseOut={() => {
            setCardState({ ...cardstate, hovered: !cardstate.hovered });
          }}
          style={{width:'100%',height:'100%'}}
          className={`${props.data===''?'shine':''}`}
          />
{/* src= {renderImagesSrc(props)} className={`${props.data.image? '' : 'shine '}`} */}





        {/* <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
       
      /> */}
        <CardContent>
         <Pricing title={props.data.title} price={props.data.price} offerPrice={props.data.offerPrice} save={props.data.save}/>
        </CardContent>
      {/* </a> */}
      </Link>
      {/* props.data.image['placeImage'] */}
     
    </Card>
    
  );
}
ProductCards.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    placeImage: PropTypes.string.isRequired,
    hoverImage: PropTypes.string.isRequired
  })
}