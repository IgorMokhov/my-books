import { useDispatch, useSelector } from 'react-redux';

import { Navbar } from './Navbar';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';

import {
  openFavourites,
  selectQtyFavourites,
} from '../features/favourites/favourites-slice';

import { MenuBook } from '@mui/icons-material';
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
      <Container>
        <Toolbar>
          <Typography variant="h4" component="span">
            My Books
          </Typography>

          <Navbar />

          <IconButton
            onClick={() => dispatch(openFavourites())}
            sx={{ ml: '10px' }}
          >
            <Badge badgeContent={favouritesQty} color="secondary">
              <MenuBook />
            </Badge>
          </IconButton>
          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
