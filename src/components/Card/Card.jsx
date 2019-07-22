import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import  { FaChevronDown, FaHeart } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { image, imageTitle, title, shortDescription, description, link, switchIsChecked } = props
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={`portfolio-card ${classes.card}`}>
      <CardHeader
        title={title}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={imageTitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { shortDescription }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <FaHeart />
        </a>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <FaChevronDown />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{ switchIsChecked ? "Features:" : "Atividades:" }</Typography>
          <Typography paragraph>
            { description }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}