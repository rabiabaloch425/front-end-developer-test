import { Box, Grid, Typography } from "@mui/material"
import logo from "../../../src/assets/images/logo.png";
import { makeStyles } from '@mui/styles';

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
    },
    footerMenu: {
        color: '#767676 !important',
        transition: 'color .1s ease-in-out !important',
        textDecoration: 'none !important',
        marginRight: '1em !important',
        cursor: 'pointer !important'
    }
  }));

export const Footer = () => {
    const classes = useStyles();

    return(
        <Grid container spacing="2" style={{
            borderTop: '1px solid #e4e4e4',
            paddingTop: '2em'
        }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
                <Typography> <img src={logo} style={{
                width: '2.5rem',
                marginLeft: '1em',
                position: 'relative',
                top: '7px'
            }}/> Make something awesome</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{float: "right"}}>
                <Typography className={classes.footerMenu}> About </Typography>
                <Typography className={classes.footerMenu}> Press </Typography>
                <Typography className={classes.footerMenu}> Join the team </Typography>
            </Box>
        </Grid>
    </Grid>
      
    )
}