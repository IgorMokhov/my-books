import { TechList } from './TechList';

import { Container, Typography } from '@mui/material';

export const About = () => {
  return (
    <Container sx={{ pt: '5px' }}>
      <Typography variant="h4" component="h4">
        About
      </Typography>
      <Typography sx={{ pt: '10px' }}>
        Hello! My name is Igor Mokhov. I am Frontend Developer.
      </Typography>
      <Typography sx={{ pt: '10px' }}>
        Welcome to my book search application powered by the Google Books API.
      </Typography>
      <Typography sx={{ pt: '10px' }}>
        Technologies used in the development:
      </Typography>

      <TechList />
    </Container>
  );
};
