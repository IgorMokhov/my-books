import { Container, Typography } from '@mui/material';
import { GoBackBtn } from '../UI/GoBackBtn';

export const NotFound = () => {
  return (
    <Container>
      <GoBackBtn />
      <Typography
        sx={{
          m: '50px 0 100px',
        }}
        variant="h4"
        component="h4"
      >
        Page not found.
      </Typography>
    </Container>
  );
};
