import { Search } from './Search';
import { Category } from './Category';
import { Sort } from './Sort';
import { Box, Container } from '@mui/material';
import backgroundImg from '../../accets/backgroundImg.jpg';

export const Controls = () => {
  return (
    <Box
      sx={{
        height: '300px',
        pt: '100px',
        mb: '20px',
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      component="div"
    >
      <Container maxWidth="sm">
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
    </Box>
  );
};
