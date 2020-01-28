
//  ResponsiveFontSizes
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import PropTypes from "prop-types";
import "./productCard.css";
import CardControl from "./CardControl";



export const ProductCard = props => {
  const [cardstate, setCardState] = React.useState({
    hovered: false,
    loaded: false,
    dataLoaded: true
  });

  const renderControls = () =>
    Object.keys(props.controls).map(pos => (
      <CardControl position={pos} {...props.controls[pos]} />
    ));
  return (
    <Card style={styles.card} >
      {props.controls ? renderControls() : ""}
      <CardMedia
        onMouseOver={() => {
          setCardState({ ...cardstate, hovered: !cardstate.hovered });
        }}
        onMouseOut={() => {
          setCardState({ ...cardstate, hovered: !cardstate.hovered });
        }}
        onLoadedData={() => setCardState({ ...cardstate, loaded: true })}
        component="img"
        className="shine"
        alt={cardstate.dataLoaded && props.title}
        height="220"
        
        image={
          cardstate.dataLoaded &&
          props.data.image[cardstate.hovered ? "hoverImage" : "placeImage"]
        }
        title={cardstate.dataLoaded && 'props.data.title'}
      />
      <CardContent>
        <Typography
          className={`${!cardstate.dataLoaded && "shine"} title`}
          gutterBottom
          variant="overline"
          component="div"
          align="left"
         
        >
          {cardstate.dataLoaded && props.data.title}
        </Typography>
        {/* Pricing Info */}
        <div style={styles.priceHolder}>
          <Typography
            variant="p"
            color="textSecondary"
            style={styles.delPrice}
            component="p"
            align="left"
          >
            <del className={`${!cardstate.dataLoaded && "shine"}`}>
              {cardstate.dataLoaded && props.data.price}
            </del>
          </Typography>
          <Typography
            variant="h6"
            className={`${!cardstate.dataLoaded && "shine"} price`}
            style={{color:'#ED1165'}}
            
          >
            {cardstate.dataLoaded && props.data.offerPrice}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        {/* Add actions if required */}
        {/* <Button>Help</Button> */}
      </CardActions>
    </Card>
  );
};

const controlShape = PropTypes.shape({
  icon: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
});

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    placeImage: PropTypes.string.isRequired,
    hoverImage: PropTypes.string.isRequired
  }),
  controls: PropTypes.shape({
    topleft: controlShape,
    bottomleft: controlShape,
    topright: controlShape,
    bottomright: controlShape
  })
};

const styles = {
  delPrice: {},
  priceHolder: {
    display: "flex",
    alignItems: "baseline"
  },
  card: {
    width: "90%",
    border:'1px solid #e3e3e3',
    boxShadow:'none',
    position: "relative"
  }
};
