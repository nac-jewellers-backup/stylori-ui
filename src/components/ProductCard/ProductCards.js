import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import './productCard.css'
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { fontWeight } from "@material-ui/system";


// let theme = createMuiTheme(require('./../../theme.json'));
// theme = responsiveFontSizes(theme);
//theme={outerTheme}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: "80",
    maxWidth: "90%",
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

    marginRight: "15px",
    marginLeft: '15px',
    marginBottom: "15px"
  },
  colorLight: {
    color: theme.palette.secondary.light,

  },
  colorMain: {
    color: theme.palette.secondary.main
  },
  h6FontSize: {
    // [theme.breakpoints.down('md')]: {
    //   fontSize:'14px'
    // },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '13px',
      fontWeight: 'bold'

    },

  },
  offerPricePadding: {
    paddingLeft: '15px',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '8px',

    },
  },
  deletePrice: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
      fontWeight: 'bold'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  },
  youSave: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '11px',
    },
  }
}));
const handleClick = (name) => {
  if (name === 'truck') {
    console.log('deii thangam venum na rendu illa na moonu nal aagum venum na wait pannu')
  }

}


export default function ProductCards(props) {
  const classes = useStyles();
  const [cardstate, setCardState] = React.useState({
    hovered: false,
    loaded: false,
    dataLoaded: true
  });

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
      <a href={props.data.image['placeImage']} target={"_blank"} style={{ textDecoration: 'none' }}>
        <CardMedia
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
            variant="caption"
            color="textSecondary"
            component="div"
            className={`${props.data.title!=null & props.data.title!==''? '' : 'shine'}`}
            style={{ paddingBottom: "5px", textAlign: "left" }}
          >
            {/* Dazzling Gold Bloom Diamond Pendant */}
            {props.data.title}
          </Typography>
          {/*  */}
          <Typography style={{ display: "flex", width: '100%' }}>
            <Typography
              variant="caption"
              color="textSecondary"
              className={`${props.data.price!=null & props.data.price!==''? '' : 'shine'} ${classes.deletePrice}`}
              component="p"
              style={{ display: "flex", alignItems: "center" }}
            >
              <del>₹&nbsp;{props.data.price}</del>
            </Typography>
            <Typography

              variant="h6"
              component="h6"
              className={`${props.data.offerPrice!=null & props.data.offerPrice!==''? '' : 'shine'} ${classes.colorMain} ${classes.h6FontSize} ${classes.offerPricePadding} `}

            >
              ₹&nbsp;{props.data.offerPrice}
            </Typography>
          </Typography>
          {/*  */}
          <Typography style={{ display: "flex" }}>
            <Typography
              variant="body2"
              color="textSecondary"
              className={`${classes.colorMain} ${classes.youSave}`}
              component="p"

            >
              You save
          </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              component="p"
              className={`${props.data.save!=null & props.data.save!==''? '' : 'shine'} ${classes.colorMain} ${classes.offerPricePadding} `}
            >
              ₹ {props.data.save}
            </Typography>
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
}