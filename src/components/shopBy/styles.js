const styles = (theme) => ({
  productCard: {
    // maxWidth: "200px",
    padding: "10px 10px",
  
  },
  shopbyProductCardGrid: {
    justifyContent: "space-around",
  },
  silverLabel:{
    "& div": {
    color:`${theme.palette.primary.main} !important`,
    fontSize:24
    }
  },
  shopByLabel: {
      margin:"10px 0px 30px 0px",
    "& div": {
      textTransform: "uppercase",
      color:theme.palette.secondary.main,
      letterSpacing: "6px",
      fontWeight: "bold",
      // marginLeft: 40,
      padding:'0px 0px 0px 15px'
    },
  },
});
export default styles;
