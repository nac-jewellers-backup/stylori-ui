import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: "80%",
    maxWidth: "85%",
    boxShadow: "none",
    padding: "0px",
    border: "1px solid #f5f5f5"
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
    width:'auto',
    height:'63px',  
    paddingTop: "56.48%", // 16:9
    marginLeft: "15px",
    marginRight: "15px",
    marginBottom: "15px"
  }
}));
const handleClick = (name) =>{
    // alert('deii thangam venum na rendu illa na moonu nal aagum venum na wait pannu')
    if(name==='truck'){
        console.log('deii thangam venum na rendu illa na moonu nal aagum venum na wait pannu')
    }

}


 export default function ProductCards(props)  {
  const classes = useStyles();
  const [cardstate, setCardState] = React.useState({
    hovered: false,
    loaded: false,
    dataLoaded: true
  });

  return (
    <Card className={classes.card}>
        <a href ={props.data.image['placeImage']} target={"_blank"} style={{textDecoration:'none'}}>
      <CardHeader
        className={classes.header}
        avatar={
          <IconButton aria-label="Settings" className={classes.avatar}>
            <i style={{ fontSize: "18px", color: "#F699A3" }} className="fa" onClick={handleClick('truck')}>
              &#xf0d1;
            </i>
          </IconButton>
        }
        action={
          <IconButton aria-label="Settings" className={classes.action}>
            <i style={{ fontSize: "18px", color: "#F699A3" }} class="fa">
              &#xf08a;
            </i>
          </IconButton>
        }
      />
      <CardMedia
        onMouseOver={() => {
          setCardState({ ...cardstate, hovered: !cardstate.hovered });
        }}
        onMouseOut={() => {
          setCardState({ ...cardstate, hovered: !cardstate.hovered });
        }}
        className={classes.media}
      
        image={
          props.data.image[cardstate.hovered ? "hoverImage" : "placeImage"]
        }
        title={props.data.title}
      />
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
        <Typography
          variant="body2"
          color="textSecondary"
          component="body2"
          style={{ paddingBottom: "5px", textAlign: "left",textOverflow:'br' }}
        >
          {/* Dazzling Gold Bloom Diamond Pendant */}
          {props.data.title}
        </Typography>
        {/*  */}
        <Typography style={{ display: "flex" }}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ display: "flex", alignItems: "center" ,wordBreak:'break-word'}}
          >
            <del>₹&nbsp;{props.data.price}</del>
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            style={{ paddingLeft: "25px", color: "#ed1165",wordBreak:'break-word' }}
          >
            ₹&nbsp;{props.data.offerPrice}
          </Typography>
        </Typography>
        {/*  */}
        <Typography style={{ display: "flex" }}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ed1165",
             
            }}
          >
            You save
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
            style={{ paddingLeft: "10px", color: "#ed1165" }}
          >
            ₹ {props.data.save}
          </Typography>
        </Typography>
      </CardContent>
      </a>
    </Card>
  );
}