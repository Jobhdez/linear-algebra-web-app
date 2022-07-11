import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NavLink as MuiLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar 
      position="static">
      <Toolbar>
        <MuiLink to="/"
                 variant="h5"
                 style={{paddingLeft: 20, textDecoration: "none"}}
                 color="primary">
            Research Papers

         </MuiLink>
                 
          
        <MuiLink to="/LinearAlgebraChat" 
                 variant="h5"
                 style={{paddingLeft:15, textDecoration:"none"}}
                 color="primary">
                 
           
          Linear-Algebra-Chat
       </MuiLink>

       <MuiLink to="/Search"
                variant="h5"
                style={{paddingLeft: 13, textDecoration:"none"}}
                color="primary"
                >
                    Search Papers
       </MuiLink>
       <MuiLink to="/Compute"
                variant="h5"
                style={{paddingLeft: 13, textDecoration:"none"}}
                color="primary">
                    Compute-Linear-Algebra
        </MuiLink>

      </Toolbar>
    </AppBar>
  );
}
export default Header;