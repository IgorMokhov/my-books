import { BookCard } from './BookCard';
import { useBooksList } from './useBooksList';

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

export const BooksList = () => {
  const {
    loading,
    loadingButton,
    entities,
    total,
    error,
    isRemainingItems,
    theme,
    clearHandler,
    showSnackbar,
    loadMoreHandler,
  } = useBooksList(); // All the logic is moved into a custom hook.

  if (loading === 'failed') {
    showSnackbar(error, 'error');
  }

  return (
    <Container maxWidth="lg">
      {total > 0 && (
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

      {total && isRemainingItems && (
        <Button
          sx={{
            mb: '40px',
            backgroundColor: theme.palette.background.paper,
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
