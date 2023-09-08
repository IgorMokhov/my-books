import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectBooks } from './books-slice';

export const BooksList = () => {
  const { loading, booksList, total, error } = useSelector(selectBooks);

  return (
    <Container>
      {!!total && <span>Founded {total} results </span>}
      {loading === 'pending' && <h2>Loading...</h2>}
    </Container>
  );
};
