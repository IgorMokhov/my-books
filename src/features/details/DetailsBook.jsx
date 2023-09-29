import {
  Box,
  CircularProgress,
  Container,
  Link,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { clearDetails, loadBookById, selectDetails } from './details-slice';
import parse from 'html-react-parser';
import notFoundImg from '../../accets/not-found-img.jpg';

const StyledImage = styled('img')({
  boxShadow: '10px 10px 13px 0px rgba(0,0,0,0.75)',
  borderRadius: '5px',
  height: 200,
  '&:hover': { transform: 'scale(1.2)' },
  transition: 'transform 0.3s',
});

export const DetailsBook = () => {
  const { id } = useParams();
  const { loading, currentBook, error } = useSelector(selectDetails);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const parseText = (text) => {
    if (!text) return 'No description ...';
    return parse(text);
  };

  const parsedDescription = parseText(currentBook?.volumeInfo.description);

  useEffect(() => {
    dispatch(loadBookById(id));

    return () => {
      dispatch(clearDetails());
    };
  }, [id, dispatch]);

  return (
    <Container>
      {loading === 'pending' && (
        <CircularProgress sx={{ textAlign: 'center' }} />
      )}

      {loading === 'failed' && (
        <Typography variant="h5" component="h5">
          {`Error: ${error}`}
        </Typography>
      )}

      {loading === 'succeeded' && (
        <Paper
          sx={{
            display: 'flex',
            backgroundColor: 'rgb(250, 250, 250)',
            textAlign: 'left',
            mb: '15px',
          }}
        >
          <Box
            sx={{
              p: '0 50px 50px 50px',
            }}
          >
            <Link
              sx={{
                m: '30px 0',
                color: 'inherit',
                display: 'flex',
                minWidth: 130,
                '&:hover': {
                  '& svg': {
                    transform: 'translateX(-5px)',
                  },
                },
              }}
              component={RouterLink}
              to="/"
              relative="path"
              underline="none"
            >
              <ArrowBackIcon
                sx={{ pr: '3px', transition: 'transform 0.3s' }}
                fontSize="large"
              />
              <Typography variant="h6">Go Back</Typography>
            </Link>
            <StyledImage
              src={currentBook?.volumeInfo.imageLinks?.thumbnail || notFoundImg}
            />
          </Box>

          <Box sx={{ p: '30px 40px 20px 0' }}>
            <Typography>{currentBook?.volumeInfo.categories?.[0]}</Typography>
            <Typography
              sx={{
                m: '30px 0 5px',
                fontWeight: 500,
              }}
              variant="h4"
              component="h4"
            >
              {currentBook?.volumeInfo.title}
            </Typography>
            <Typography sx={{ mb: '30px' }} variant="h6" component="h6">
              {currentBook?.volumeInfo.authors?.join(', ')}
            </Typography>
            <Typography variant="body1" component="p">
              {parsedDescription}
            </Typography>
          </Box>
        </Paper>
      )}
    </Container>
  );
};
