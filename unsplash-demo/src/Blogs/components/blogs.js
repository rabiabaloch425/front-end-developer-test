import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from "axios";
import { Box } from '@mui/system';
import {SERVER_URL} from "../../constants/apiURL";

const imagePerRow = 4;

const useStyles = makeStyles(theme => ({
    cardStyles: {
        transition: 'all .2s cubic-bezier(.25,.7,.25,1)',
        border: '1px solid #e1e1e1',
        borderRadius: '4px',
        maxWidth: '100%',
        marginRight: '1em',
        marginLeft: '1em',
        cursor: "pointer"
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
    },
    loadMoreBtnStyles: {
        userSelect: 'none !important',
        color: '#767676 !important',
        fill: 'currentColor !important',
        backgroundColor: '#fff !important',
        border: '1px solid #d1d1d1 !important',
        height: '48px !important',
        padding: '0 16px !important',
        fontSize: '16px !important',
        lineHeight: '46px !important',
        marginBottom: '10em !important'
    },
    hrStyles: {
        width: '99em',
        marginBottom: '2em',
        borderColor: '#777'
    }
  }));
export const BlogCards = ({media}) => {
    const classes = useStyles();
    const [blogsData, setBlogData] = React.useState([]);
    const [next, setNext] = React.useState(imagePerRow);

React.useEffect(()=>{
    const formData = new FormData();
    formData.append(`page`, "0");
    axios({
        url: `${SERVER_URL}/api.test.php`,
        method: "POST",
        data: formData
      }).then((res)=>{
        setBlogData(res?.data?.data)
      })
},[])

const loadMoreBlogs = () => {
    setNext(next + imagePerRow);
  };

  return (
      <>
        <Grid container spacing="2">
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
                            <Grid container spacing="2">
                            {
                blogsData?.slice(0, next)?.map((x, index)=>{
                    return(
                        <Grid item xs={12} sm={12} md={4} lg={4}  key={index}>
                        <Card className={classes.cardStyles}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        className={classes.cardMediaStyles}
                        image="https://unsplash.com/blog/content/images/size/w1000/2022/07/A-look-back-at-June--Blog-.jpg"
                    />
                    <CardContent style={{height: '10.8em'}}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.anTag}>
                        {x?.blog_type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className={classes.featuredHeading}>
                        {x?.blog_namme}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.dateFeature}>{x?.first_name}</Button>
                        <Button size="small" className={classes.dateFeature}>{x?.date}</Button>
                    </CardActions>
                </Card>
                <br />
                        </Grid>
                    )
                })

                
            }


                            
                            </Grid>
                        <br />
            </Grid>  
                <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        </Grid>

        <Grid container spacing="2" >
        <Grid  item xs={12} sm={12} md={12} lg={12}>
                <Box  style={{
                textAlign: "center"
                }}>
                {next < blogsData?.length && (
                 <>
                      <Button
                    className={classes.loadMoreBtnStyles}
                    onClick={loadMoreBlogs}
                >
                    Load more posts
                </Button>
                 </>

                )}
                </Box>
                </Grid>
        </Grid>
      </>
      
  );
}
