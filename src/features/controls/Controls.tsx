import { Search } from './Search';
import { Category } from './Category';
import { Sort } from './Sort';

import backgroundImg from '../../accets/background-img.jpg';

import { Box, Container, Paper, Typography } from '@mui/material';

export const Controls = () => {
  return (
    <Paper
      sx={{
        height: '450px',
        pt: '90px',
        mb: '15px',
        boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.75)',
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '@media (max-width: 720px)': { margin: 0, pt: '20px' },
        '@media (max-width: 420px)': {
          height: '400px',
          pt: '10px',
        },
      }}
      component="div"
    >
      <Container
        sx={{
          width: '700px',
          '@media (max-width: 720px)': {
            width: '400px',
            p: 0,
            '@media (max-width: 420px)': {
              width: '300px',
            },
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 88,
            fontWeight: 500,
            mb: '60px',
            color: 'white',
            textShadow: '2px 2px 3px rgba(0, 0, 0, 0.6)',
            '@media (max-width: 720px)': {
              fontSize: '75px',
              mb: '20px',
            },
            '@media (max-width: 420px)': {
              fontSize: '60px',
              mb: '30px',
            },
          }}
          variant="h2"
          component="h2"
        >
          Find Your Book
        </Typography>

        <Search />

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            '@media (max-width: 720px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Category />
          <Sort />
        </Box>
      </Container>
    </Paper>
  );
};
