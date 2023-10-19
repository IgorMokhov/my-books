import { useDispatch, useSelector } from 'react-redux';

import { loadMoreBooks, selectBooksAllInfo } from './books-slice';
import { selectControls } from '../controls/controls-slice';
import { selectTheme } from '../theme/theme-slice';
import { BookCard } from './BookCard';
import { darkModeColors, lightModeColors } from '../../themeConfig';

import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { openSnack } from '../snack/snack-slice';
import { useEffect } from 'react';

export const BooksList = () => {
  const { loading, loadingButton, entities, total, error, page } =
    useSelector(selectBooksAllInfo);
  const { search, category, sort } = useSelector(selectControls);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === 'failed') {
      dispatch(openSnack({ message: error, variant: 'error' }));
    }
  }, [loading, error, dispatch]);

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
