import { useDispatch, useSelector } from 'react-redux';

import { selectTheme, setTheme } from './theme-slice';

import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeSwitcher = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}
    >
      {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
