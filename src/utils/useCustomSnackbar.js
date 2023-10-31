import { useSnackbar } from 'notistack';
import { Slide } from '@mui/material';

export const useCustomSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = (message, variant = 'info') => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 3000,
      TransitionComponent: Slide,
    });
  };

  return showSnackbar;
};
