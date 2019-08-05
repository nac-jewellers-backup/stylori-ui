import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Breadcrumbs, Link, Container} from '@material-ui/core/';
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



export default function CustomSeparator() {
  const classes = useStyles();

  return (
    <Container >
    <div className={classes.root}>


      <Paper elevation={0} className={classes.paper} >
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb">

          <Link color="inherit" onClick={window.location.hostname} className={classes.BreadCrumbs}>
            {window.location.hostname}

          </Link>

          <Link color="textPrimary" className={classes.BreadCrumbs} to={window.location.pathname}>{window.location.pathname.split('/').pop()}</Link>
        </Breadcrumbs>
      </Paper>
    </div>
    </Container>
  );
}