import { Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectBooksAllInfo } from './books-slice';
import { BookCard } from '../../components/BookCard';

export const BooksList = () => {
  const { loading, entities, total, error } = useSelector(selectBooksAllInfo);

  return (
    <Container>
      {!!total && (
        <Typography sx={{ mb: '10px' }} variant="span" component="p">
          Founded {total} results
        </Typography>
      )}
      {loading === 'pending' && (
        <Typography variant="h5" component="h5">
          Loading...
        </Typography>
      )}
      {loading === 'failed' && (
        <Typography variant="h5" component="h5">
          {`Error: ${error}`}
        </Typography>
      )}

      <Grid container spacing={2}>
        {loading === 'succeeded' &&
          entities.map((book) => (
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
