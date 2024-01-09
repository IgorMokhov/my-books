import { useSelector } from 'react-redux';

import {setTheme } from './theme-slice';
import { selectTheme } from './theme-selectors';

import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppDispatch } from '../../redux-hooks';

export const ThemeSwitcher = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useAppDispatch();

  const onChangeTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <IconButton onClick={onChangeTheme}>
      {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
