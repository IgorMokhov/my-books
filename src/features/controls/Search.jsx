import { useDispatch, useSelector } from 'react-redux';

import { loadBooks } from '../books/books-slice';
import { selectControls, setSearch } from './controls-slice';
import { selectTheme } from '../theme/theme-slice';
import { openSnack } from '../snack/snack-slice';

import { darkModeColors, lightModeColors } from '../../themeConfig';

import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  const { search, category, sort } = useSelector(selectControls);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const searchSubmitHandler = (event) => {
    event.preventDefault();

    if (!search.trim()) {
      dispatch(openSnack({ message: 'Search is empty!', variant: 'error' }));
      return;
    }

    dispatch(loadBooks({ search, category, sort }));
  };

  const onChangeHandler = (event) => dispatch(setSearch(event.target.value));

  return (
    <Box
      component="form"
      sx={{
        backgroundColor:
          theme === 'light'
            ? lightModeColors.primary
            : darkModeColors.primaryBackground,
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        borderRadius: '20px',
        display: 'flex',
        mb: '20px',
      }}
      noValidate
      autoComplete="off"
      onSubmit={searchSubmitHandler}
    >
      <InputBase
        sx={{
          p: '5px 25px 5px',
        }}
        type="text"
        fullWidth
        placeholder="Search ..."
        value={search}
        onChange={onChangeHandler}
      />
      <IconButton type="submit">
        <SearchIcon sx={{ mr: '5px', fontSize: '1.7rem' }} />
      </IconButton>
    </Box>
  );
};
