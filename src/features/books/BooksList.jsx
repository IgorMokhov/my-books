import { useSelector } from 'react-redux';
import { selectBooksAllInfo } from './books-slice';
import { BookCard } from './BookCard';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';

export const BooksList = () => {
  const { loading, entities, total, error } = useSelector(selectBooksAllInfo);

  return (
    <Container>
      {total > 0 && (
        <Typography
          sx={{ mb: '20px', fontWeight: '400' }}
          variant="h6"
          component="p"
        >
          {`Found ${total} ${total > 1 ? 'books' : 'book'}`}
        </Typography>
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
      {loading === 'pending' && <CircularProgress />}
      {loading === 'failed' && (
        <Typography variant="h5" component="h5">
          {`Error: ${error}`}
        </Typography>
      )}

      <Grid container spacing={2}>
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
    </Container>
  );
};
