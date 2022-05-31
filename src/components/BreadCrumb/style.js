const styles = theme => ({
    root: {

        flexWrap: 'wrap',
        // display:'flex',
        // justifyContent:'center'
    
      },
      paper: {
        padding: theme.spacing(1, 2),
    
      },
      BreadCrumbs: {
        color: '#394578',
        fontSize: '11px',
    
      },
    buttons: {
        background: theme.palette.overallButoon.primary,
        color: theme.palette.overallButoon.contrastText
    },
    normalfonts: {
        color: theme.palette.text.primary,
    },
    normalfontsCheck:{
      color:"#6D6E71"
    },
    backgsecondary: {
        background: theme.palette.secondary.dark,
    },
});
export default styles;