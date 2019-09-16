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
    <div className={props.className}> 
    <Container >
        <Paper elevation={0} className={props.classsubhed}>
          <Breadcrumbs>
            {
              props.data.map(data => (
                <Link color="inherit" onClick={data}  style={{ fontSize: "14px" }}  className={props.list}>
                  {data}
                </Link>
              ))
            }
          </Breadcrumbs>
        </Paper>
    </Container>
    </div>
  );
}