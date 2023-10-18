import { NavLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

export const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', ml: 'auto' }} component="nav">
      <Link
        sx={{ fontWeight: '400', color: 'inherit' }} // ?? color
        variant="h6"
        component={NavLink}
        to="/"
        underline="none"
      >
        Home
      </Link>
      <Link
        sx={{ fontWeight: '400', ml: '10px', color: 'inherit' }} // color ???
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
