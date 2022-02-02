import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
/*
import { Component, Fragment } from 'react';
import RegisterModal from './auth/registerModal';
import Logout from './auth/logout';
import LoginModal from './auth/loginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const pages = ['Tickets', 'Cart', 'Orders', 'Logout'];

class AppNavbar extends Component {

    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        const { isAuthenticated, user } = this.props.auth;

        
           
            const authLinks = (
                <Fragment>
                    <NavItem>
                    <Link to="/"><NavLink>Tickets</NavLink></Link> 
                    </NavItem>
                    <NavItem>
                      <Link to="/cart"><NavLink>Cart</NavLink></Link>  
                    </NavItem>
                    <NavItem className="mr-2">
                        <Link to="/orders"><NavLink>Orders</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Logout/>
                    </NavItem>
                </Fragment>
            );
    
            const guestLinks = (
                <Fragment>
                    <NavItem>
                        <RegisterModal/>
                    </NavItem>
                    <NavItem>
                        <LoginModal/>
                    </NavItem>
                </Fragment>
            );
            

        }

        
    return(
   

   <AppBar position="static">
   <Container maxWidth="xl">
   <Toolbar disableGutters>
   <Typography
   variant='h3'
   noWrap
   component="div"
   sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
 >
 MUSICVERSE
   
   <Menu id='appBar'>
   {pages.map((page) => (
    <MenuItem key={page} onClick={handleCloseNavMenu}>
      <Typography textAlign="center">{page}</Typography>
    </MenuItem>
  ))}
   </Menu>
   </Typography>
   </Toolbar>
   </Container>
   </AppBar>
       
    )
}*/