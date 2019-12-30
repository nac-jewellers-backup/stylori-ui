import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { HomeSlider } from './carouselData'
import './home.css'


class Socialmediacard extends React.Component {
    state = {
        checked: [1],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };
    render() {

        return (
            <Container minWidth="lg">
                <div className='socialmediacard'>
                    <div style={{ height: "55px", textAlign: 'center', borderBottom: "1px solid #ddd", lineHeight: "55px", padding: "10px" }}>
                        <b style={{ float: 'left' }}>Instagram  </b><b style={{ textAlign: "center" }}>Facebook
                   </b><b style={{ float: 'right' }}>Stylori News
                      </b>

                    </div>

                    <Grid container spacing={2} style={{ height: "450px" }}>
                        <Grid container item xs={4}>
                            <Grid container spacing={3} style={{ height: "440px" }}>
                                <Grid container item xs={6}>
                                    <img src='https://assets-cdn.stylori.com/200x200/images/product/SE0027/SE0027-1Y.jpg' alt=""/>
                                </Grid>
                                <Grid container item xs={6}>
                                    <img src='https://assets-cdn.stylori.com/200x200/images/product/SE0027/SE0027-1Y.jpg' alt=""/>
                                </Grid>

                                <Grid container item xs={6}>
                                    <img src='https://assets-cdn.stylori.com/200x200/images/product/SE0027/SE0027-1Y.jpg' alt=""/>
                                </Grid>
                                <Grid container item xs={6}>
                                    <img src='https://assets-cdn.stylori.com/200x200/images/product/SE0027/SE0027-1Y.jpg' alt=""/>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid container item xs={4} style={{ overflowY: 'scroll', height: "450px" }} >
                            {HomeSlider.map(row =>
                                <Card style={{ width: "345px", height: "450px" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{ height: "300px" }}
                                            image="https://assets-cdn.stylori.com/images/stories/Travel-stylori-blog-cover.jpg"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <div >
                                                <b className="contents"> Stylori<br />20 hours ago</b>
                                                <h style={{ float: 'right', marginTop: '-28px' }}>  <img height="40px" width="40px" src='https://cdn-images-1.medium.com/max/280/1*MdlEcZxKJmUR-2pVUvWTjg@2x.png' alt=""/>
                                                </h>
                                            </div>
                                            <Typography component="p">
                                                Lizards are a widespread group of squamate reptiles,
                                            <a style={{ color: "#049BFF" }} href="#123">with over 6,000 species, ranging
                                            across all continents except</a> Antarctica
                                   </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions disableActionSpacing>
                                        <Typography className="contents" style={{ textAlign: 'center', padding: "10px" }}>
                                            <i style={{ marginLeft: "30px" }} class="fa fa-thumbs-up"></i> &nbsp; 20
                                 <i style={{ marginLeft: "30px" }} class="fa fa-comment-alt"></i>&nbsp;Comments
                           <i style={{ marginLeft: "30px" }} class="fa fa-share"></i>&nbsp;Share
                                   </Typography>
                                    </CardActions>
                                </Card>
                            )}
                        </Grid>


                        <Grid container item xs={4} style={{ height: "440px", overflow: 'scroll' }}>
                            {HomeSlider.map(row =>
                                <List style={{ borderBottom: "1px solid #ddd" }}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlb0Y0AUZb90zCir4fNNnJ3X2v9mOKZIA-O2U03SXitjtE1wY6KQ" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Brunch this weekend?"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography component="span" color="textPrimary">
                                                        Ali Connors
                                                </Typography>
                                                    {" — I'll be in your neighborhood doing errands this…"}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            )}
                        </Grid>
                    </Grid>
                </div>
            </Container>

        );
    }
}

export default (Socialmediacard);