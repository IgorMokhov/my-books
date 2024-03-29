import { useEffect } from 'react';
import { GoogleBook } from '../../types';
import { BookCard } from './BookCard';
import { useBooks } from './useBooks';
import { darkModeColors, lightModeColors } from '../../themeConfig';

import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { clearError } from './books-slice';

export const BooksList = () => {
  const {
    loading,
    loadingButton,
    entities,
    total,
    error,
    isRemainingItems,
    theme,
    dispatch,
    clearHandler,
    showSnackbar,
    loadMoreHandler,
  } = useBooks();

  // show error message
  useEffect(() => {
    if (loading === 'failed' && error !== null) {
      showSnackbar(error, 'error');
      dispatch(clearError());
    }
  }, [error, loading, dispatch, showSnackbar]);

  return (
    <Container maxWidth="lg">
      {total !== null && total > 0 && (
        <Box
          sx={{
            mb: '20px',
            '@media (max-width: 720px)': {
              m: '10px 0',
            },
          }}
        >
          <Typography
            sx={{ fontWeight: '400', mr: '5px' }}
            variant="h6"
            component="span"
          >
            {`Found ${total} ${total > 1 ? 'books' : 'book'}`}
          </Typography>
          <Tooltip title="Clear all books" placement="right">
            <IconButton sx={{ mb: '5px' }} onClick={clearHandler}>
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

      {loading === 'pending' && (
        <CircularProgress sx={{ m: '20px 0' }} color="secondary" />
      )}

      <Grid sx={{ mb: '40px' }} container rowSpacing={3} columnSpacing={2}>
        {loading === 'succeeded' &&
          entities?.map((book: GoogleBook) => (
            <BookCard
              key={book.id}
              id={book.id}
              image={book.volumeInfo.imageLinks?.thumbnail || ''}
              title={book.volumeInfo?.title || ''}
              authors={book.volumeInfo?.authors || ''}
              categories={book.volumeInfo?.categories || ''}
            />
          ))}
      </Grid>

      {entities.length > 0 && isRemainingItems && (
        <Button
          sx={{
            mb: '40px',
            backgroundColor:
              theme === 'light'
                ? lightModeColors.backgroundPaper
                : darkModeColors.backgroundPaper,
          }}
          variant="contained"
          onClick={loadMoreHandler}
        >
          {loadingButton ? 'Loading ...' : 'Load more'}
        </Button>
      )}
    </Container>
  );
};
