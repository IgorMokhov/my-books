import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BookCard } from './BookCard';
import { clearBooks, loadMoreBooks, selectBooksAllInfo } from './books-slice';
import { selectControls } from '../controls/controls-slice';
import { selectTheme } from '../theme/theme-slice';
import { darkModeColors, lightModeColors } from '../../themeConfig';

import {
  Box,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import { useCustomSnackbar } from '../../utils/useCustomSnackbar';

export const BooksList = () => {
  const { loading, loadingButton, entities, total, error, page } =
    useSelector(selectBooksAllInfo);
  const { search, category, sort } = useSelector(selectControls);
  const theme = useSelector(selectTheme);
  const showSnackbar = useCustomSnackbar();
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearBooks());
    showSnackbar('All books have been deleted!', 'info');
  };

  useEffect(() => {
    if (loading === 'failed') {
      showSnackbar(error, 'error');
    }
  }, [loading, error, dispatch, showSnackbar]);

  return (
    <Container>
      {total > 0 && (
        <Box sx={{ mb: '20px' }}>
          <Typography
            sx={{ fontWeight: '400', mr: '10px' }}
            variant="h6"
            component="span"
          >
            {`Found ${total} ${total > 1 ? 'books' : 'book'}`}
          </Typography>
          <Tooltip title="Clear all books" placement="right">
            <IconButton onClick={clearHandler}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}

      {total === 0 && (
        <Typography
          sx={{ mb: '20px', fontWeight: '400' }}
          variant="h6"
          component="p"
        >
          Nothing found
        </Typography>
      )}

      {loading === 'pending' && <CircularProgress color="secondary" />}

      <Grid sx={{ mb: '40px' }} container spacing={2}>
        {loading === 'succeeded' &&
          entities?.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              image={book.volumeInfo.imageLinks?.thumbnail}
              title={book.volumeInfo?.title}
              authors={book.volumeInfo?.authors}
              categories={book.volumeInfo?.categories}
            />
          ))}
      </Grid>

      {!!total && (
        <LoadingButton
          sx={{
            mb: '40px',
            // color: 'black',
            backgroundColor:
              theme === 'light'
                ? lightModeColors.backgroundPaper
                : darkModeColors.backgroundPaper,
            // '&:hover': {
            //   backgroundColor: 'lightgray',
            // },
          }}
          variant="contained"
          loading={loadingButton}
          onClick={() =>
            dispatch(loadMoreBooks({ search, category, sort, page }))
          }
        >
          More books
        </LoadingButton>
      )}
    </Container>
  );
};
