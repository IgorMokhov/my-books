import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/theme/theme-selectors';
import { darkModeColors, lightModeColors } from '../themeConfig';
import { Link } from '@mui/material';

interface NavbarLinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavbarLink = ({ to, children }: NavbarLinkProps) => {
  const theme = useSelector(selectTheme);

  return (
    <Link
      sx={{
        fontWeight: '400',
        color: 'inherit',
        ml: '10px',
        '&.active': {
          color:
            theme === 'light'
              ? lightModeColors.secondary
              : darkModeColors.secondary,
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
