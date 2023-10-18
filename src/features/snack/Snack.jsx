import { useDispatch, useSelector } from 'react-redux';
import { closeSnack, SelectSnackAllInfo } from './snack-slice';

import { Alert, Slide, Snackbar } from '@mui/material';

export const Snack = () => {
  const { isOpen, message, variant } = useSelector(SelectSnackAllInfo);
  const dispatch = useDispatch();

  return (
    <Snackbar
      open={isOpen}
      onClose={() => dispatch(closeSnack())}
      autoHideDuration={2000}
      TransitionComponent={Slide}
    >
      <Alert sx={{ minWidth: '250px' }} severity={variant}>
        {message}
      </Alert>
    </Snackbar>
  );
};
