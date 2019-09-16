import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Breadcrumbs, Link, Container } from '@material-ui/core/';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
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
}));



export default function CustomSeparator(props) {
  const classes = useStyles();

  return (
    <Container >
      <div className={classes.root}>


        <Paper elevation={0} className={classes.paper} style={{ height: "40px" }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb" style={{ lineHeight: "40px" }}>
{
  props.data.map(data=>(
    <Link color="inherit" onClick={data} className={classes.BreadCrumbs} style={{ fontSize: "14px" }}>
      {data}
    </Link>
  ))
           

}          
          </Breadcrumbs>
        </Paper>
      </div>
    </Container>
  );
}