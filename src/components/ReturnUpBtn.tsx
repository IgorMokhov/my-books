import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { selectTheme } from '../features/theme/theme-selectors';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export const ReturnUpBtn = () => {
  const [isVisibility, setIsVisibility] = useState(false);
  const theme = useSelector(selectTheme);

  const handleScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -30);
      setTimeout(handleScrollUp, 10);
    }
    setIsVisibility(false);
  };

  const scroling = () => {
    window.scrollY > 400 ? setIsVisibility(true) : setIsVisibility(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', scroling);

    return () => {
      document.removeEventListener('scroll', scroling);
    };
  }, []);

  return (
    <>
      {isVisibility && (
        <IconButton
          sx={{
            position: 'fixed',
            bottom: 150,
            right: 20,
          }}
          onClick={handleScrollUp}
        >
          <ArrowCircleUpIcon
            sx={{ color: theme === 'light' ? 'black' : 'white' }}
            fontSize="large"
          />
        </IconButton>
      )}
    </>
  );
};
