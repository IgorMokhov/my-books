import { useSnackbar } from 'notistack';
import { Slide } from '@mui/material';

export type VariantMessage =
  | 'info'
  | 'default'
  | 'error'
  | 'success'
  | 'warning';

// Custom snackbar using the notistack library.
export const useCustomSnackbar = (): ((
  message: string,
  variant?: VariantMessage
) => void) => {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = (message: string, variant: VariantMessage = 'info') => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 3000,
      TransitionComponent: Slide,
    });
  };

  return showSnackbar;
};
