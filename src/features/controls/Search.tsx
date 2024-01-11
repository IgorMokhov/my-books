import { useSearch } from './useSearch';
import { darkModeColors, lightModeColors } from '../../themeConfig';

import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  const { search, theme, searchSubmitHandler, onChangeHandler } = useSearch(); 

  return (
    <Box
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
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={searchSubmitHandler}
    >
      <InputBase
        sx={{
          p: '5px 25px',
        }}
        type="text"
        fullWidth
        placeholder="Search ..."
        value={search}
        onChange={onChangeHandler}
      />
      <IconButton type="submit">
        <SearchIcon sx={{ mr: '5px', fontSize: '26px' }} />
      </IconButton>
    </Box>
  );
};
