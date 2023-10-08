import { MenuBook } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Navbar } from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {
  openFavourites,
  selectQtyFavourites,
} from '../features/favourites/favourites-slice';

export const Header = () => {
  const favouritesQty = useSelector(selectQtyFavourites);
  const dispatch = useDispatch();

  return (
    <AppBar
      sx={{ backgroundColor: 'white', color: 'inherit' }}
      position="static"
    >
      <Container>
        <Toolbar>
          <Typography sx={{}} variant="h4" component="span">
            My Books
          </Typography>

          <Navbar />

          <IconButton
            color="inherit"
            onClick={() => dispatch(openFavourites())}
            sx={{ ml: '10px' }}
          >
            <Badge badgeContent={favouritesQty} color="secondary">
              <MenuBook />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
