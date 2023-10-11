import { Search } from './Search';
import { Category } from './Category';
import { Sort } from './Sort';

import backgroundImg from '../../accets/background-img.jpg';

import { Box, Container, Paper, Typography } from '@mui/material';

export const Controls = () => {
  return (
    <Paper
      sx={{
        height: '350px',
        pt: '100px',
        mb: '15px',
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      component="div"
    >
      <Container maxWidth="sm">
        <Typography
          sx={{ fontWeight: '400', mb: '30px' }}
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
          }}
        >
          <Category />
          <Sort />
        </Box>
      </Container>
    </Paper>
  );
};
