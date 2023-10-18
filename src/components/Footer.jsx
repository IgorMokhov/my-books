import { useSelector } from 'react-redux';
import { selectTheme } from '../features/theme/theme-slice';
import { lightModeColors, darkModeColors } from '../themeConfig';
import { Box, Container, Divider, Typography } from '@mui/material';

export const Footer = () => {
  const theme = useSelector(selectTheme);

  return (
    <footer
      style={{
        marginTop: 'auto',
        backgroundColor:
          theme === 'light'
            ? lightModeColors.backgroundPaper
            : darkModeColors.primaryBackground,
      }}
    >
      <Box>
        <Divider />
        <Container>
          <Typography sx={{ m: '5px 0 5px', textAlign: 'right' }}>
            by Igor Mokhov
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};
