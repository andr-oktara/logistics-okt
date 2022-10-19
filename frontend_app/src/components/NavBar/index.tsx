import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../../pages/AppRoutes';

export default function NavBar() {
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
          <Button color="inherit"><Link to={ROUTE_PATHS.LIST_PACKAGES} style={{ color: "white" }}>Packages</Link></Button>
          <Button color="inherit"><Link to={ROUTE_PATHS.DELIVERY_MAP} style={{ color: "white" }}>Map</Link></Button>
          <Button color="inherit"><Link to={ROUTE_PATHS.MANAGE_WAREHOUSE} style={{ color: "white" }}>Warehouse</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
