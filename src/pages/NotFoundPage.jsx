import { Container, Typography } from '@mui/material';
import { GoBackBtn } from '../UI/GoBackBtn';

export const NotFoundPage = () => {
  return (
    <Container>
      <GoBackBtn />
      <Typography
        sx={{
          m: '50px 0 100px',
          '@media (max-width: 480px)': {
            fontSize: '35px',
          },
        }}
        variant="h3"
        component="h3"
      >
        Not Found Page
      </Typography>
    </Container>
  );
};
