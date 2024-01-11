import { NavbarLink } from './NavbarLink';
import { Box } from '@mui/material';

export const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', ml: 'auto' }} component="nav">
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
    </Box>
  );
};
