import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar } from './Navbar';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';
import { openFavourites } from '../features/favourites/favourites-slice';
import { selectQtyFavourites } from '../features/favourites/favourites-selectors';

import { CollectionsBookmark } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

export const Header = () => {
  const favouritesQty = useSelector(selectQtyFavourites);
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            '@media (max-width: 720px)': {
              p: 0,
            },
          }}
        >
          <Link
            underline="none"
            style={{
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            to="/"
          >
            <Typography
              sx={{
                '@media (max-width: 720px)': {
                  fontSize: '25px',
                },
                '@media (max-width: 420px)': {
                  display: 'none',
                },
              }}
              variant="h4"
              component="span"
            >
              My Books
            </Typography>
          </Link>

          <Navbar />

          <IconButton
            onClick={() => dispatch(openFavourites())}
            sx={{
              ml: '10px',
            }}
          >
            <Badge badgeContent={favouritesQty} color="secondary">
              <CollectionsBookmark />
            </Badge>
          </IconButton>

          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
