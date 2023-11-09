import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { clearDetails, loadBookById, selectDetails } from './details-slice';

import { FavouriteButton } from '../../UI/FavouriteButton';
import notFoundImg from '../../accets/not-found-img.jpg';

import parse from 'html-react-parser';
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

  const parseText = (html) => {
    if (!html) return 'No description ...';

    return parse(html);
  };

  const image = currentBook?.volumeInfo.imageLinks?.thumbnail;
  const categories = currentBook?.volumeInfo.categories?.[0];
  const title = currentBook?.volumeInfo.title;
  const authors = currentBook?.volumeInfo.authors?.join(', ');
  const parsedDescription = parseText(currentBook?.volumeInfo.description); // used library html-react-parser

  useEffect(() => {
    dispatch(loadBookById(id));

    return () => {
      dispatch(clearDetails());
    };
  }, [id, dispatch]);

  return (
    <Container
      sx={{
        '@media (max-width: 720px)': {
          p: '10px',
        },
      }}
    >
      {loading === 'pending' && (
        <CircularProgress sx={{ textAlign: 'center' }} color="secondary" />
      )}

      {/* заменить на снек бар?? */}
      {loading === 'failed' && (
        <Typography variant="h5" component="h5">
          {`Error: ${error}`}
        </Typography>
      )}

      {loading === 'succeeded' && (
        <Paper
          sx={{
            display: 'flex',
            textAlign: 'left',
            mb: '15px',
            position: 'relative',
            '@media (max-width: 960px)': {
              flexDirection: 'column',
              textAlign: 'center',
            },
            '@media (max-width: 720px)': {
              margin: 0,
            },
          }}
        >
          <Box
            sx={{
              p: '0 50px 50px 50px',
              '@media (max-width: 960px)': {
                p: 0,
              },
            }}
          >
            <Link
              sx={{
                m: '27px 0',
                color: 'inherit',
                display: 'flex',
                minWidth: 130,
                '&:hover': {
                  '& svg': {
                    transform: 'translateX(-5px)',
                  },
                },
                '@media (max-width: 960px)': {
                  ml: '20px',
                },
              }}
              component={RouterLink}
              to="/"
              relative="path" // ????
              underline="none"
            >
              <ArrowBackIcon
                sx={{ pr: '3px', transition: 'transform 0.3s' }}
                fontSize="large"
              />
              <Typography variant="h6" component="span">
                Go Back
              </Typography>
            </Link>
            <StyledImage sx={{ mb: '20px' }} src={image || notFoundImg} />
            <Box
              sx={{
                position: 'absolute',
                right: '15px',
                top: '15px',
              }}
            >
              <FavouriteButton
                size="large"
                id={id}
                title={title}
                image={image}
              />
            </Box>
          </Box>

          <Box
            sx={{
              p: '30px 40px 20px 0',
              '@media (max-width: 960px)': {
                p: '10px',
              },
            }}
          >
            <Typography>{categories}</Typography>
            <Typography
              sx={{
                m: '30px 0 5px',
                fontWeight: 500,
                '@media (max-width: 720px)': {
                  fontSize: '27px',
                  m: '15px 0 5px',
                },
              }}
              variant="h4"
              component="h4"
            >
              {title}
            </Typography>
            <Typography
              sx={{
                mb: '30px',
                '@media (max-width: 720px)': {
                  mb: '10px',
                  lineHeight: '1.3',
                  fontSize: '18px',
                },
              }}
              variant="h6"
              component="h6"
            >
              {authors}
            </Typography>
            <Box>{parsedDescription}</Box>
          </Box>
        </Paper>
      )}
    </Container>
  );
};
