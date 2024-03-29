import { Theme } from './types';

type ModeColors = {
  primary: string;
  primaryBackground: string;
  secondary: string;
  backgroundPaper: string;
};

export const lightModeColors: ModeColors = {
  primary: '#FFFFFF',
  primaryBackground: '#FFFFFF',
  secondary: '#A52A2A',
  backgroundPaper: '#FAFAFA',
};

export const darkModeColors: ModeColors = {
  primary: '#000000',
  primaryBackground: '#333333',
  secondary: '#FF5733',
  backgroundPaper: '#1E1E1E',
};

export const getDesignTokens = (mode: Theme) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: lightModeColors.primary,
          },
          secondary: {
            main: lightModeColors.secondary,
          },
          background: {
            default: lightModeColors.primaryBackground,
            paper: lightModeColors.backgroundPaper,
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: darkModeColors.primary,
          },
          secondary: {
            main: darkModeColors.secondary,
          },
          background: {
            default: darkModeColors.primaryBackground,
            paper: darkModeColors.backgroundPaper,
          },
        }),
  },
  // other styles
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor:
            mode === 'light'
              ? lightModeColors.primary
              : darkModeColors.primaryBackground,
          color:
            mode === 'light' ? darkModeColors.primary : lightModeColors.primary,
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
