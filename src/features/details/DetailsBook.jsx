import { CircularProgress, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearDetails, loadDetailsBook, selectDetails } from './details-slice';

export const DetailsBook = () => {
  const { id } = useParams();
  const { loading, currentBook, error } = useSelector(selectDetails);
  const dispatch = useDispatch();

  // const deleteHtmlTags = (html) => {};

  useEffect(() => {
    dispatch(loadDetailsBook(id));

    return () => {
      dispatch(clearDetails());
    };
  }, [id, dispatch]);

  return (
    <Container>
      {loading === 'pending' && <CircularProgress />}
      {loading === 'failed' && (
        <Typography variant="h5" component="h5">
          {`Error: ${error}`}
        </Typography>
      )}

      <Typography variant="h4" component="h4">
        {currentBook?.volumeInfo.title}
      </Typography>
      <Typography variant="p" component="p">
        {currentBook?.volumeInfo.description}
      </Typography>
      <img src={currentBook?.volumeInfo.imageLinks?.thumbnail} />
    </Container>
  );
};
