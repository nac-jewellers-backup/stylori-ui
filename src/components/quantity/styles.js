const styles = (theme) => ({
  alignGrid:{
      display:"flex",
      margin:'auto',
      justifyContent:'center'
      
  },
  label:{
    margin:'8px 0px',
  },
  qty:{
    margin:'8px 0px',
    "& input":{
        color:theme.palette.secondary.main,
        fontWeight:'bold',
        textAlign:'center'
    }
  },
icon:{
    fill: `${theme.palette.primary.main} !important`,
    color: theme.palette.overallButoon.contrastText,
    cursor:'pointer'
}
});
export default styles;
