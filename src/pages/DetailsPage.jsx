import { Box, Typography } from '@mui/material';
import { DetailsBook } from '../features/details/DetailsBook';

export const DetailsPage = () => {
  return (
    <>
      <Typography variant="h4" component="h3">
        Details Page
      </Typography>
      <DetailsBook />
    </>
  );
};
