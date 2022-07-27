import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { featuredPostData } from "../../constants/data";

const useStyles = makeStyles(theme => ({
    cardStyles: {
        transition: 'all .2s cubic-bezier(.25,.7,.25,1)',
        border: '1px solid #e1e1e1',
        borderRadius: '4px',
        maxWidth: '100%',
        marginRight: '1em',
        marginLeft: '1em'
    },
    cardMediaStyles: {
        height: 'none !important',
        height: '25em',
        position: 'relative',
        borderRadius: '4px 4px 0 0',
        overflow: 'hidden'
    },
    anTag: {
        fontSize: '12px !important',
        color: '#5a5a5a !important',
        marginBottom: '1em !important'
    },
    featuredHeading: {
        fontSize: '1.8em !important',
        color: '#000 !important',
        fontWeight: '800 !important'
    },
    dateFeature: {
        color: '#767676 !important',
        fontSize: '0.6em !important'
    }
  }));
export const ImgMediaCard = ({media}) => {
    const classes = useStyles();
    const [data, setData] = React.useState(featuredPostData)
  
  return (
    <Grid container spacing="2">
    <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
    {
        data.map((x)=>{
            return(
                <Grid item xs={12} sm={12} md={5} lg={5}>
            <Card className={classes.cardStyles}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        className={classes.cardMediaStyles}
                        image={x?.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className={classes.anTag}>
                        Announcements
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className={classes.featuredHeading}>
                       {x?.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.dateFeature}>{x?.Author}</Button>
                        <Button size="small" className={classes.dateFeature}>{x?.date}</Button>
                    </CardActions>
                </Card>
                 <br />
                </Grid>  
            )
        })
    }
        <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
    </Grid>
  );
}
