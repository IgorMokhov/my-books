import { Search } from './Search';
import { Category } from './Category';
import { Sort } from './Sort';
import { Box, Container } from '@mui/material';

export const Controls = () => {
  return (
    <Container sx={{ width: '600px' }}>
      <Search />
      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
      >
        <Category />
        <Sort />
      </Box>
    </Container>
  );
};
