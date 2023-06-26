import { Link } from 'react-router-dom';
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar() {
   return (
      <AppBar position="static">
         <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               My App
            </Typography>
            { /* Wrapping the JSX expressions in parentheses */}
            <Button color="inherit" component={Link} to="/">
               Home
            </Button>
            <Button color="inherit" component={Link} to="/dashboard">
               Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/contact">
               Contact
            </Button>
         </Toolbar>
      </AppBar>
   );
}