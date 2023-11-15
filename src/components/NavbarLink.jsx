import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';

import { useTheme } from '@emotion/react';

export const NavbarLink = ({ to, children }) => {
  const theme = useTheme();

  return (
    <Link
      sx={{
        fontWeight: '400',
        color: 'inherit',
        ml: '10px',
        '&.active': {
          color: theme.palette.secondary.main,
        },
        '@media (max-width: 420px)': {
          fontSize: '18px',
        },
      }}
      variant="h6"
      component={NavLink}
      to={to}
      underline="none"
    >
      {children}
    </Link>
  );
};
