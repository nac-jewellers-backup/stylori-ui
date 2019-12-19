import React from 'react';
import { Grid } from '@material-ui/core'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import './faqs.css'
import { borderBottom, lineHeight } from '@material-ui/system';
import Icon from '@material-ui/core/Icon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AccordianElement from '../../components/faqs/accordianElement'
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        borderBottom: "1px solid #e8e8e8 "
    },
    titleColor: {
        color: '#ed1165',
        fontWeight: 600,
        // marginTop: "3%",
        fontSize: "21px",
        fontFamily: "Roboto",
        // paddingBottom: "10px"
        
    },
    titleColorsmall: {
        color: '#ed1165',
        fontWeight: 600,
        // marginTop: "3%",
        fontSize: "15px",
        fontFamily: "Roboto",
        paddingTop: "10px"
    },
  

}));


export default function Accordian(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>{props.faqs.faqs.map((val, i) => <Grid key={i} container>
            <Grid>
                <Typography className={val.font === "h2" ? classes.titleColor : classes.titleColorsmall} gutterBottom>{val.Title}</Typography>
            </Grid>
            {val.accordian.map((value, index) =>
                <AccordianElement value={value} accordian ={val.accordianIcon} keyvalues={index} opened={false} key={index} />
            )}
        </Grid>)
        }</>
    )
}
