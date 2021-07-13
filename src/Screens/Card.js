import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Empty from './empty.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
    marginBottom: 5
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({newsItem}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={newsItem.urlToImage ? newsItem.urlToImage : Empty}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {newsItem.title}
          </Typography>
          <Typography>
            By {newsItem.author ? newsItem.author : "Unknown"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {newsItem.content ? newsItem.content : "No content"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href={newsItem.url}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
