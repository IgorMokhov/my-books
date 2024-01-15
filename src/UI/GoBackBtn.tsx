import { Link as RouterLink } from 'react-router-dom';

import { Link, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const GoBackBtn = () => {
  return (
    <Link
      sx={{
        m: '27px 0',
        color: 'inherit',
        display: 'flex',
        minWidth: 130,
        '&:hover': {
          '& svg': {
            transform: 'translateX(-5px)',
          },
        },
        '@media (max-width: 960px)': {
          ml: '20px',
        },
      }}
      component={RouterLink}
      to="/"
      underline="none"
    >
      <ArrowBackIcon
        sx={{ pr: '3px', transition: 'transform 0.3s' }}
        fontSize="large"
      />
      <Typography variant="h6" component="span">
        Go Back
      </Typography>
    </Link>
  );
};
