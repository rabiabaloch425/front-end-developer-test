import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Header } from "./components/header"
import { makeStyles } from '@mui/styles';
import { ImgMediaCard } from "./components/cards";
import { BlogCards } from "./components/blogs";
import { Footer } from "./components/footer";

const useStyles = makeStyles(theme => ({
    headTitle: {
        fontWeight: '900 !important',
        marginTop: '2em !important',
        fontSize: '3em !important',
        marginLeft: '13.3px !important'
    },
    headSubTitle: {
        fontWeight: '400 !important',
        fontSize: '21px !important',
        lineHeight: '3.35 !important',
        color: '#767676'
    }
  }));

export const Blogs = () =>{
    const classes = useStyles();
    return(
       <>
          <Header />

          <Box style={{
            textAlign: "center"
          }}>
           <Typography variant="h1" className={classes.headTitle}>Unsplash Blog</Typography>
           <Typography variant="h6" className={classes.headSubTitle}>Stories from the community powering the internet’s visuals</Typography>
          </Box>
         
         


         <Box>
         <Grid container spacing="2">
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
                <Grid item xs={12} sm={12} md={10} lg={10}>
                <Box>
                <Typography variant="h1" className={classes.headTitle}>Featured</Typography> <br />
                </Box>
                </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
          </Grid>
          <br />

           <ImgMediaCard />
         </Box>

         <Box>
         <Grid container spacing="2">
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
                <Grid item xs={12} sm={12} md={10} lg={10}>
                <Box>
                <Typography variant="h1" className={classes.headTitle}>Latest from the team</Typography> <br />
                </Box>
                </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
          </Grid>
          <br />

           <BlogCards />
         </Box>

         <Box>
         <Grid container spacing="2">
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
                <Grid item xs={12} sm={12} md={10} lg={10}>
                <Box>
                <Footer />
                </Box>
                </Grid>
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
          </Grid>

         </Box>

        


       </>
    )
}