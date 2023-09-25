import { Box, Link, Menu, MenuItem, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', ml: 'auto' }} component="nav">
      <Link
        sx={{ color: 'black' }}
        variant="h6"
        component={NavLink}
        to="/"
        underline="none"
      >
        Home
      </Link>
      <Link
        sx={{ ml: '10px', color: 'black' }}
        variant="h6"
        component={NavLink}
        to="/about"
        underline="none"
      >
        About
      </Link>
    </Box>
  );
};
