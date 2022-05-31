import React from 'react';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { GlobalContext } from 'context'
let jewellery_theme = createTheme(require('./jewellery_theme.json'));
let silver_jewellery_theme = createTheme(require('./silver_jewellery_theme.json'));
let jewelleryThemes = responsiveFontSizes(jewellery_theme);
let silverThemes = responsiveFontSizes(silver_jewellery_theme);
// const useStyles = makeStyles(theme => ({
//     root: {
//         backgroundColor: theme.palette.background.paper,
//         // [theme.breakpoints.up('xl')]: {
//         //     zoom: 1.7
//         //   },
//     }
// }));
const Theme = (props) => {
    const { Globalctx } = React.useContext(GlobalContext)
    const theme_func = (props) =>{
        
      
      if(Globalctx && Globalctx.pathName === true ){
        return silverThemes
      }
      else{
        return jewelleryThemes
      }
      
      }
    return (    
                <ThemeProvider theme={theme_func()}>       
                        {props.children}
                </ThemeProvider>
        
    )
}
export default Theme;