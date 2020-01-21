import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Hidden } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    fontSize: "15px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"

  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const listOfEducationCard = window.location.pathname === "/stories" ? storyData.storiesData : storyData.educationCard;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

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
              <Typography variant="body2" color="textSecondary" component="p" style={{
                fontSize: "13px", overflow: "hidden",
                height: "68px"
              }}>
                {data.cardContent}
              </Typography>
              <Grid container>
                <Grid item xs={3} className={classes.storiesTag}>
                  <span className="spanstories"></span>
                </Grid>
                <Grid item xs={9} className={classes.socialMediaTag}>
                  <a target="_blank" style={{ color: "inherit", textDecoration: "none" }} href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} className="fa fa-facebook iconic" ></a>

                  <a target="_blank" style={{ color: "inherit", textDecoration: "none" }} href={`http://www.twitter.com/share?url=${window.location.href}`} className="fa fa-twitter twitter iconic"></a>
                  {/* <a className="fa fa-google-plus google iconic"></a> */}
                  <a className={classes.cardReadLink}>read more</a>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      )}
      <Hidden smDown>
        <Grid container item justify="flex-end">
          <TablePagination
            rowsPerPageOptions={[2, 4, 6]}
            component="div"
            count={listOfEducationCard.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Grid>
      </Hidden>

    </Grid>

  )


}