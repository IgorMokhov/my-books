import { FavouritesBtn } from '../../UI/FavouritesBtn';
import { GoBackBtn } from '../../UI/GoBackBtn';
import { useDetailsBooks } from './useDetailsBook';
import notFoundImg from '../../accets/not-found-img.jpg';

import {
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
  styled,
} from '@mui/material';

const StyledImage = styled('img')({
  boxShadow: '10px 10px 13px 0px rgba(0,0,0,0.75)',
  borderRadius: '5px',
  height: 200,
  '&:hover': { transform: 'scale(1.2)' },
  transition: 'transform 0.3s',
});

export const DetailsBook = () => {
  const {
    id,
    loading,
    error,
    showSnackbar,
    navigate,
    image,
    categories,
    title,
    authors,
    parsedDescription,
  } = useDetailsBooks();

  if (loading === 'failed') {
    navigate('/');
    showSnackbar(error, 'error');
  }

  return (
    <Container
      sx={{
        '@media (max-width: 720px)': {
          p: '10px',
        },
      }}
    >
      {loading === 'pending' && (
        <CircularProgress
          sx={{ textAlign: 'center', m: '20px 0' }}
          color="secondary"
        />
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
            <GoBackBtn />
            <StyledImage sx={{ mb: '20px' }} src={image || notFoundImg} />
            <Box
              sx={{
                position: 'absolute',
                right: '15px',
                top: '15px',
              }}
            >
              <FavouritesBtn size="large" id={id} title={title} image={image} /> 
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
