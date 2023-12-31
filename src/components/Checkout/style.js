const styles = theme => ({
    cart: {
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            overflowX: "auto",
        },
        [theme.breakpoints.up('lg')]: {
            // width: "100%",
            // border: "0.5px solid #ccc",
            boxShadow: "1px 2px 13px 7px #DEDADA!important",
            // padding: "10px",
            marginBottom: "20px",
            outline: "none !important"

        },
    },
    main:{
        [theme.breakpoints.down('xs')]: {
           marginTop:"-13px"
        },
    },
    card: {
        width: "100%",
        margin: "auto",
        display: "flex",
        marginBottom: "15px",
        boxShadow: "rgb(222, 218, 218) 1px 2px 13px 7px",
        backgroundColor:"#fff"
    },
    details: {
        display: "flex",
        flexDirection: "column",
        padding: "2%",
        width: "100%"
    },
    content: {
        flex: "1 0 auto",
        padding: 0
    },
    cover: {
        width: "30vw"
    },
    cartTitle:{
        color: "#666", 
        fontSize: "14px", 
        margin: "0px 0px 10px",
        display:"flex",
        justifyContent:"center"
    },
    controls: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      
        "& button": {
            padding: "2.1px 13.8px"
        },
        [theme.breakpoints.down("sm")]: {
            "& button": {
                padding: "1.1px 1.8px"
            },
            paddingRight:"120px",
            gap:'10px',
        }
    },
    mainRoot: {
        backgroundColor:"#E6E7E8",height:"55vw",marginTop:"-15px" 
      },

    playIcon: {
        height: 38,
        width: 38
    },
    contents: {
        fontSize: "0.8rem",
    },
    labelPrice: {
        display: "flex"
    },
    labelPriceDel: {
        fontSize: "0.8rem",
        display: "flex",
        alignItems: "center"
    },
    labelPriceOff: {
        fontSize: "1.1rem"
    },
    buttons: {
        background: theme.palette.overallButoon.primary,
        color: theme.palette.overallButoon.contrastText
    },
    normalfonts: {
        color:"#6D6E71",
    },
    normalfontsCheck:{
       color:"#6D6E71",
       fontSize:"14px"
    },
    plusSx: {
        fontSize: "18px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        padding:"12px"
    },
    alignItems:{
        display: "flex",
        alignItems: "center"
    },
    comboImg:{
        width: "100%",
        maxWidth: "129px",
        maxHeight:"129px",
        height:"100%"
    },
    comboText:{
        color:"#6D6E71",
        fontSize:"13px"
    },
    comboButtons:{
        width: "96%",
        border: "1.46px solid #919396",
        backgroundColor: "white",
        borderRadius: "0px",
        boxShadow: "none",
        paddingRight: "10px",
        paddingLeft: "10px",
        color: "gray",
    },
    comboBox:{
        outline: "none",
        marginBottom: "25px",
        padding: "10px",
    },
    backgsecondary: {
        background: theme.palette.secondary.dark,
    },
    normalcolorback: {
        background: theme.palette.text.primary
    },
    fontwhite: {
        color: theme.palette.overallButoon.contrastText
    },
});
export default styles;