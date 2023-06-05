import { makeStyles } from "@material-ui/core";

const frequently_Style = makeStyles((theme) => ({
  TotalFrequentBox: {
    width:"90%",
    margin:"auto",
    borderTop:"1px solid #06a296",
    paddingBottom:"40px"
  },
  alignItems:{
    display:"flex",
    alignItems:"center",
    gap:"12px"
  },
  headTitle: {
    fontFamily: `'Playfair Display', serif !important`,
    fontWeight: 600,
    fontSize: 28,
    color: "#6D6E71",
    padding:"18px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize:"18px"
    },
    [theme.breakpoints.up("xl")]: {
      fontSize:"38px"
    },
  },
  imgSx: {
    width: "100%",
    maxWidth: "129px",
    [theme.breakpoints.up("xl")]: {
      maxWidth:"225px"
    },
  },
  imgFun: {
    width: "100%",
    maxWidth: "92px",
    height: "92px",
  },
  imgxs: {
    width: "100%",
    maxWidth: "86px",
    height: "86px",
  },
  totalImagesPlus: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plusSx: {
    fontSize: "18px",
    margin: "12px",
  },
  linked: {
    color: "rgb(6, 171, 159)",
    fontSize: "14px",
    fontWeight: "600",
    [theme.breakpoints.up("xl")]: {
      fontSize:"18px"
    },
  },
  added: {
    backgroundColor: "rgb(6, 162, 150)",
    color: "#fff",
    width: "100%",
    padding: "5px 8px",
    borderRadius: "25px",
    textTransform: "capitalize",
    maxWidth: "110px",
  },
  totalImg: {
    // display: "flex",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  discount: {
    paddingLeft: "24px",
  },
  discountSx: {
    textAlign: "center",
    marginTop: "15px",
    border: " 3px solid rgb(166, 168, 171)",
    padding: "8px",
    position: "relative",
  },
  checkbox: {
    padding: "0px",
  },
  priceSx: {
    color: "rgb(58 69 120)",
    fontSize: "16px",
    fontWeight: "600",
    padding: "6px",
  },
  labelSx: {
    fontSize: "14px",
  },
  product: {
    display: "flex",
    alignItems: "center",
    paddingTop: "5px",
  },
  details: {
    fontSize: "13px",
    color: "#000",
    paddingLeft: "5px",
    fontWeight: "500",
    [theme.breakpoints.up("xl")]: {
      fontSize:"16px"
    },
  },
  detailsPrice:{
    color: "rgb(58,69,120)",
    fontSize: "14px",
    fontWeight: 600,
    paddingLeft: "5px",
    [theme.breakpoints.up("xl")]: {
      fontSize:"18px"
    },
  },
  textImg: {
    paddingTop: "18px",
  },
  info: {
    "& svg": {
      fontSize: "14px",
      marginTop: "5px",
    },
    "& path": {
      fill: "rgb(6, 171, 159)",
    },
  },
  more: {
    position: "absolute",
    right: "0px",
    "& path": {
      fill: "rgb(166 168 171)",
    },
  },
  close: {
    position: "absolute",
    right: "0px",
    top: "17px",
    "& path": {
      fill: "#000",
    },
  },
  discountBorder: {
    border: "3px solid rgb(166, 168, 171)",
  },
  buySx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buyPriceSx: {
    fontSize: "26px",
    color: "#000",
    fontFamily: `'Playfair Display', serif !important`,
  },
  downsx: {},
  drowDown: {
    border: "3px solid rgb(166, 168, 171)",
    textAlign: "center",
  },
  productSx: {
    borderBottom: "3px solid rgb(166, 168, 171)",
    display: "flex",
    padding: "12px",
  },
  closedialogSx: {
    border: "3px solid #a6a8ab",
    borderRadius: " 0px",
    padding: "0px",
  },
  linkedSx: {
    color: "rgb(6, 171, 159)",
    fontSize: "14px",
    fontWeight: "600",
    padding: "8px",
  },
  addedSx: {
    backgroundColor: "rgb(6, 171, 159)",
    color: "#fff",
    width: "100%",
    maxWidth: "176px",
    padding: "5px 8px",
    borderRadius: "25px",
    textTransform: "capitalize",
    marginBottom: "8px",
  },
}));

export default frequently_Style;
