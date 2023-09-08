import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectControls, selectSearch, setSearch } from './controls-slice';
import { loadBooks } from '../books/books-slice';

export const Search = () => {
  const { search, category, sort } = useSelector(selectControls);
  const dispatch = useDispatch();

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(loadBooks({ search, category, sort }));
    // dispatch(setSearch(''));
  };

  const onChangeHandler = (event) => dispatch(setSearch(event.target.value));

  return (
    <Box
      component="form"
      sx={{ m: '20px 0 20px' }}
      noValidate
      autoComplete="off"
      onSubmit={searchSubmitHandler}
    >
      <TextField
        size="small"
        fullWidth
        type="text"
        label="Search"
        variant="outlined"
        value={search}
        onChange={onChangeHandler}
      />
    </Box>
  );
};
