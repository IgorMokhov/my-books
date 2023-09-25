import { CollectionsBookmark } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Navbar } from './Navbar';

export const Header = ({ openFavourites, setOpenFavourites }) => {
  return (
    <AppBar
      sx={{ backgroundColor: 'white', color: 'inherit' }}
      position="static"
    >
      <Container>
        <Toolbar>
          <Typography sx={{ fontWeight: 'bold' }} variant="h4" component="span">
            My Books
          </Typography>

          <Navbar />

          <IconButton
            color="inherit"
            onClick={() => setOpenFavourites(!openFavourites)}
            sx={{ ml: '10px' }}
          >
            <Badge badgeContent={4} color="secondary">
              <CollectionsBookmark />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
