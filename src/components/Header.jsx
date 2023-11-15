import { useDispatch, useSelector } from 'react-redux';

import { Navbar } from './Navbar';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';

import {
  openFavourites,
  selectQtyFavourites,
} from '../features/favourites/favourites-slice';

import { CollectionsBookmark } from '@mui/icons-material';
import { AppBar, Badge, Container, IconButton, Toolbar } from '@mui/material';

export const Header = () => {
  const favouritesQty = useSelector(selectQtyFavourites);
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            '@media (max-width: 420px)': {
              p: 0,
            },
          }}
        >
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
