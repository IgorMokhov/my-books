import { Box, Container, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <footer>
      <Box>
        <Container>
          <Typography sx={{ textAlign: 'right' }}>
            App by Igor Mokhov
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};
