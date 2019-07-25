import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";



// let theme = createMuiTheme(require('./../../theme.json'));
// theme = responsiveFontSizes(theme);
//theme={outerTheme}

const useStyles = makeStyles(theme => ({
    colorDark: {
        color: theme.palette.primary.dark,
    
      },
}));



export default function ProductCards(props) {
  const classes = useStyles();
  return (
<Typography className={`${classes.colorDark}`} variant='h6' component='h6'>
Jewellery
</Typography>
  );
}