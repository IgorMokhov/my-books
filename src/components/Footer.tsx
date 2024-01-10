import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectTheme } from '../features/theme/theme-selectors';
import { lightModeColors, darkModeColors } from '../themeConfig';
import githubIcon from '../accets/icons/github-icon.svg';
import githubIconWhite from '../accets/icons/github-icon-white.svg';

import { Container, Divider, Paper, Typography } from '@mui/material';

export const Footer = () => {
  const theme = useSelector(selectTheme);

  return (
    <footer
      style={{
        marginTop: 'auto', // + styles in App.css => pushes the footer down
      }}
    >
      <Paper
        sx={{
          backgroundColor:
            theme === 'light'
              ? lightModeColors.backgroundPaper
              : darkModeColors.backgroundPaper,
        }}
      >
        <Divider />

        <Container
          sx={{
            height: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ textAlign: 'right', fontSize: '15px' }}
            component="span"
          >
            © {new Date().getFullYear()} My books
          </Typography>
          <Link
            to="https://github.com/IgorMokhov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ height: '28px', display: 'block' }}
              src={theme === 'light' ? githubIcon : githubIconWhite}
              alt="github-icon"
            />
          </Link>
        </Container>
      </Paper>
    </footer>
  );
};
