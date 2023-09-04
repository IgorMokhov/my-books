import { Close, CollectionsBookmark } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const FavouriteBooks = ({ openFavourites, setOpenFavourites }) => {
  return (
    <Drawer
      anchor="right"
      open={openFavourites}
      onClose={() => setOpenFavourites(false)}
    >
      <List sx={{ width: '350px' }}>
        <ListItem>
          <ListItemIcon>
            <CollectionsBookmark />
          </ListItemIcon>
          <ListItemText primary="Collection books" />
          <ListItemIcon>
            <Close
              sx={{ ml: 'auto', cursor: 'pointer' }}
              onClick={() => setOpenFavourites(false)}
            />
          </ListItemIcon>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="List is empty!" />
        </ListItem>
      </List>
    </Drawer>
  );
};
