import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const Header = () => {

  const user = useSelector(state => state.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <Typography variant="h6" component="div">
                My Music Store
              </Typography>
            </Link>
          </Box>
          <Box mr={4}>
            {
              user && user.isAdmin && (
              <Link to="/admin">
                  <Button color="inherit">admin</Button>
              </Link>
              )
            }
          </Box>
          {/* IF user is logged in show "hi, <user.firstName>" instead */}
        <Link to="/sign-in">
          { 
            user
            ? `Hi, ${user.firstName}`
            : (
              <Button color="inherit">Sign in</Button>
              )
            }
        </Link> 
        <Link to="/cart">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 1 }}
            >
            <ShoppingCartIcon />
          </IconButton>
        </Link >
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;