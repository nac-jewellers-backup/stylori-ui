const styles = (theme) => ({
  productCard: {
    maxWidth: "200px",
    padding: "0px 10px",
  },
  shopbyProductCardGrid: {
    justifyContent: "space-around",
  },
  shopByLabel: {
      margin:"10px 0px 15px 0px",
    "& div": {
      textTransform: "uppercase",
      color:theme.palette.secondary.main,
      letterSpacing: "6px",
      fontWeight: "bold",
      marginLeft: 40,
    },
  },
});
export default styles;
