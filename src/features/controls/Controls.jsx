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
        pt: '100px',
        mb: '15px',
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '@media (max-width: 720px)': { margin: 0 },
        '@media (max-width: 420px)': {
          height: '400px',
          pt: '70px',
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
            fontWeight: '400',
            mb: '60px',
            color: 'white',
            '@media (max-width: 720px)': {
              fontSize: '50px',
              mb: '20px',
            },
            '@media (max-width: 425px)': {
              fontSize: '40px',
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
