import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import './style.css';
import { Grid } from '@material-ui/core';
import { storyData } from './storyTemplateData';
const useStyles = makeStyles({
  card: {
    border: "1px solid #CCC",
    padding: "15px",
    margin: "15px"
  },
  media: {
    height: "auto",
    width: "100%"
  },
  cardContent: {
    background: "#fff",
    padding: 0,
    marginTop: "15px"
  },
  storiesTag: {
    marginTop: "16px",
    alignItems: "center",
    display: "flex"
  },
  socialMediaTag: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "flex-end"
  },
  cardReadLink: {
    marginLeft: "9px",
    display: "flex",
    alignItems: "center",
    fontSize: "10px"
  },
  cardHeader: {
    fontSize: "15px"
  }
});

export default function MediaCard() {
  const classes = useStyles();
  const listOfEducationCard = storyData.educationCard;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Grid container>
        {listOfEducationCard.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) =>
            <Grid item xs={12} sm={12} md={6} >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={data.image}
                  title={data.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom component="h3" className={classes.cardHeader}>
                    {data.cardHeader}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: "13px" }}>
                    {data.cardContent}
                  </Typography>
                  <Grid container>
                    <Grid item xs={3} className={classes.storiesTag}>
                      <span className="spanstories"></span>
                    </Grid>
                    <Grid item xs={9} className={classes.socialMediaTag}>
                      <a className="fa fa-facebook iconic" ></a>
                      <a className="fa fa-twitter twitter iconic"></a>
                      <a className="fa fa-google-plus google iconic"></a>
                      <a className={classes.cardReadLink}>read more</a>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
        )}
        <Grid container item>
        <TablePagination
        rowsPerPageOptions={[1, 2, 4]}
        component="div"
        count={listOfEducationCard.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
        </Grid>
    </Grid>

  )


}