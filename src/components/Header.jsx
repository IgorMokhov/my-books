import { CollectionsBookmark } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

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

          <IconButton
            color="inherit"
            onClick={() => setOpenFavourites(!openFavourites)}
            sx={{ ml: 'auto' }}
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
