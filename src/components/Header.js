import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Greetings from '../components/Greetings';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.a`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  &:hover, &:focus {
    color: yellow;
  }
  &:active {
    color: red;
  }
`

let Header = () => {
  let currentTime = new Date().toTimeString();
  let fName = "Dave";
  let lName = "Pua";
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
              Business Logo
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <br/>
              The current time is: {currentTime} <br/>
              <Greetings firstName={fName} lastName={lName}/> <br/>
              </Typography>
                <Box sx={{display: {xs: 'none', sm:'block'}}}>
                  <NavList>
                    <StyledLink to="/">Home</StyledLink>
                    {/* <StyledLink to="/about">About</StyledLink> */}
                    <StyledLink to="/activity">Activity</StyledLink>
                    <StyledLink to="/hook">Hooks</StyledLink>
                    <StyledLink to="/ContactUs">Contact Us</StyledLink>
                    <StyledLink to="/Task">Task</StyledLink>
                    <StyledLink to="/Thoughts">Thoughts</StyledLink>
                  </NavList>
                </Box>
            </Toolbar>
          </AppBar>
        </Box>
    );
}
export default Header