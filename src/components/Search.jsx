import { Box, TextField } from '@mui/material';
import { useState } from 'react';

export const Search = () => {
  const [search, setSearch] = useState('');

  const searchHandler = (event) => {
    event.preventDefault();
    setSearch('');
  };

  return (
    <Box
      component="form"
      sx={{ m: '20px 0 20px' }}
      noValidate
      autoComplete="off"
      onSubmit={searchHandler}
    >
      <TextField
        size="small"
        fullWidth
        type="text"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </Box>
  );
};
