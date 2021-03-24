import React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IPage from '../interface/page';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

const MCard: React.FunctionComponent<IPage & RouteComponentProps<any>> = (props: any) => {
    
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
        // @ts-ignore
      <Card className={classes.root}>
        <CardContent>
          
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="h6" component="h2">
            ID: {props.id}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {bull}Color: {props.color}
          </Typography>
          <Typography variant="body2" component="p">
           {bull}Attack: {props.attack}
            <br />
            {bull}Defense: {props.defense}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/robot/${props.id}`}> see info </Link>
        </CardActions>
      </Card>
    );
}

export default withRouter(MCard);





