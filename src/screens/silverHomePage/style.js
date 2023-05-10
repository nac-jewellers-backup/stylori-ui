import { makeStyles } from "@material-ui/styles"


export const HomePageStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        zIndex: "999",
        background: "#fff",
        width: "100%",
        top: 0
    },
    container: {
        margin: "auto",
        padding: "16px 24px",
        width: "96%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start"
    },
    alignStartContainer: {
        margin: "auto",
        padding: "16px 24px",
        width: "96%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logoImage: {
        width: "100%",
        height: "70px"
    },
    menuListCursor: {
        cursor: "pointer",
        fontFamily: "Roboto",
        fontWeight: 500,
        color: "#6e6d72",
        borderBottom: "1px solid #fff",
        whiteSpace: "nowrap",
        width: "100%",
        textTransform: "capitalize",
        fontSize: "15px!important",
        textDecoration: "none!important",
        marginLeft: "3.5%",
        "&:hover": {
            color: "#06AB9F",
        },
    },
    heartIcon: {
        marginLeft: "24px"
    },
    IconGrid: {
        justifyContent: "flex-end",
        alignItems: "center"
    },
    inrTxt: {
        fontSize: "20px",
        color: "rgb(109, 110, 113)",
        display: "flex",
        alignItems: "center",
        "& svg": {
            fontSize: "20px",
            color: "rgb(109, 110, 113)",
            marginLeft: "7px"
        }
    },
    navList: {
        // width: "30%",
        display: "block",
        background: "#fff",

    },
    navListItem: {
        textAlign: "start",
        cursor: "pointer",
        margin: "6px 0 !important",
        "& span": {
            "& a": {
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "14px!important",
                fontFamily: "Roboto",
                fontWeight: 500,
                color: "#6e6d72",
                textDecoration: "none",
                "&:hover": {
                    color: "#06AB9F",
                },
            }
        }
    },
    navListItemCollection: {
        textAlign: "center",
        width: "19%",
        margin: "12px 0",
        // padding: "0 6px",
        cursor: "pointer",
        "& span": {
            "& a": {
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "14px!important",
                fontFamily: "Roboto",
                fontWeight: 500,
                color: "#6e6d72",
                textDecoration: "none",
                "&:hover": {
                    color: "#06AB9F",
                },
            }
        }
    },
    subImgItems: {
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontSize: "13px!important",
        fontFamily: "Roboto",
        fontWeight: 500,
        color: "#6e6d72",
    },
    navBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: (props) => props?.width ? props?.width : "43%",
        margin: "0 auto 0 120px",
        padding: "45px 0 30px 0"
    },
    bigImage: {
        marginLeft: 30,
        width: "150px",
        height: "250px"
    },
    gridNavItem: {
        padding: "45px 0 30px 0"
    },
    drawerPaperSilver: {
        height: "100% !important",
        width: "100%",
        color: theme.palette.secondary.main,
        backgroundColor: "white",
        "& .MuiList-padding": {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
    // menuheader: {
    //     width: "230px !important",
    //     position: "sticky",
    //     top: "0px",
    //     zIndex: 10000,
    // },
    listItems1: {
        textAlign: "left",
        whiteSpace: "nowrap",
        width: "100%",
        fontSize: "11px !important",
        letterSpacing: "1px",
        textTransform: "capitalize",
        fontFamily: "Roboto",
    },
    iconbuttons: {
        position: "fixed",
        left: "228px",
        top: "-9px",

    },
    drawer: {
        wditth: "240px",
        height: "100vh"
    },
    drawerContainer: {
        overflow: "hidden",
    },
    drawer1: {
        width: "240px",
        height: `40px`,
    },
    subNavBox: {
        textAlign: "center",
        padding: "0 6px",
        marginBottom: "10px"
    },
    drawerPaperSilver: {
        height: "100% !important",
        width: "100%",
        color: theme.palette.secondary.main,
        backgroundColor: "white",
        "& .MuiList-padding": {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
    rightMobileNav: {
        display: "flex",
        alignItems: "center"
    },
    mobileNav: {
        width: "97%",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center"
    },
    heartIconMob: {
        marginLeft: "12px"
    },
    inrTxtMob: {
        fontSize: "15px",
        color: "rgb(109, 110, 113)",
        display: "flex",
        alignItems: "center",
        "& svg": {
            fontSize: "15px",
            color: "rgb(109, 110, 113)",
            marginLeft: "4px"
        }
    },
    clickMenu: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    ulList: {
        paddingTop: "0",
        position: "fixed",
        zIndex: "9999",
        top: "0",
        background: "#fff",
        height: "100vh",
        width: "100%",
        overflow: "auto"
    },
    subAccordion: {
        display: "block",
        background: "rgb(230, 231, 232)",
        padding: "0",
        "& div": {
            borderRadius: "0 !important"
        }

    },
    subAccordionSummary: {
        borderRadius: "none !important"
    },
    subAccordionTxt: {
        width: "100%",
        "& a": {
            textTransform: "uppercase",
            fontSize: "14px",
            color: "#6D6E71",
            width: "100%",
        }
    },
    subAccordionDetails: {
        background: "#fff",
        padding: "21px 12px"
    },
    listItemsMenu: {
        fontWeight: "600",
        width: "100%",
        fontSize: "16px !important",
        letterSpacing: "1px",
        textTransform: "capitalize",
        fontFamily: "Roboto",
        color: "#fff"
    },
    bgColor: {
        background: "rgb(6, 171, 159)",
        display: "flex",
        padding: "10px 0"
    },
    categorytitle: {
        color: "#6D6E71",
        fontSize: "14px!important",
        textAlign: "left",
        fontFamily: "Roboto",
        fontWeight: 700,
        whiteSpace: "nowrap",
        letterSpacing: "1px",
    },
    iconBtn: {
        "& span": {
            "& svg": {
                fill: "#fff !important",
                fontSize: "25px"
            }
        }
    }
}))
