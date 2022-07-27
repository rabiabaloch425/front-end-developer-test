import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CallMadeIcon from '@mui/icons-material/CallMade';
import logo from "../../../src/assets/images/logo.png";
import { makeStyles } from '@mui/styles';
const pages = ['Home', 'Announcements', 'Product', 'Brands','Partnership','Community'];

const useStyles = makeStyles(theme => ({
  root: {
    background: "none !important",
    boxShadow: "none !important",
  }
}));
export const Header = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" className={classes.root} iconStyleLeft={{color: "#777"}}>
        <Toolbar disableGutters>
       

       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
         <IconButton
           size="large"
           aria-label="account of current user"
           aria-controls="menu-appbar"
           aria-haspopup="true"
           onClick={handleOpenNavMenu}
           color="inherit"
         >
           <MenuIcon style={{
            color: "#777"
           }}/>
         </IconButton>
         <Menu
           id="menu-appbar"
           anchorEl={anchorElNav}
           anchorOrigin={{
             vertical: 'bottom',
             horizontal: 'left',
           }}
           keepMounted
           transformOrigin={{
             vertical: 'top',
             horizontal: 'left',
           }}
           open={Boolean(anchorElNav)}
           onClose={handleCloseNavMenu}
           sx={{
             display: { xs: 'block', md: 'none' },
           }}
         >
           {pages.map((page) => (
             <MenuItem key={page} onClick={handleCloseNavMenu}>
               <Typography textAlign="center">{page}</Typography>
             </MenuItem>
           ))}
         </Menu>
       </Box>
       <img src={logo} style={{
        width: '2.5rem',
        marginLeft: '1em'
       }}/>
     
       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}  style={{
             justifyContent: "center",
           }}>
         {pages.map((page) => (
           <Button
             style={{
               color: "#767676",
               fontSize: "12px",
               cursor: "pointer"
             }}
             key={page}
             onClick={handleCloseNavMenu}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
             {page}
           </Button>
         ))}
       </Box>

       <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} >
         <Tooltip title="To unsplash.com">
           <Typography style={{
             color: "#767676",
             fontSize: "12px",
             cursor: "pointer",
             marginRight: "1em"
           }}>unsplash.com<CallMadeIcon style={{
            fontSize: '1em',
            marginLeft: '0.5em',
            position: 'relative',
            top: '2px'
           }}/></Typography>
         </Tooltip>
       
       </Box>
     </Toolbar>
    </AppBar>
  );
};
