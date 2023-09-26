import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { selectControls, setSearch } from './controls-slice';
import { loadBooks, selectError, setError } from '../books/books-slice';

export const Search = () => {
  const { search, category, sort } = useSelector(selectControls);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const searchSubmitHandler = (event) => {
    event.preventDefault();

    if (!search.trim()) {
      dispatch(setError('search is empty'));
      return;
    }

    dispatch(loadBooks({ search, category, sort }));
  };

  const onChangeHandler = (event) => dispatch(setSearch(event.target.value));

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: 'white',
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
        placeholder={
          error === 'search is empty'
            ? 'Please enter something ...'
            : 'Search ...'
        }
        value={search}
        onChange={onChangeHandler}
      />
      <IconButton type="submit">
        <SearchIcon sx={{ mr: '5px', fontSize: '1.7rem' }} />
      </IconButton>
    </Box>
  );
};
