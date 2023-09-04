import { CollectionsBookmark } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';

export const Header = ({ openFavourites, setOpenFavourites }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span">
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
    </AppBar>
  );
};
