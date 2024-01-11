import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FavouriteBook } from './FavouriteBook';
import { closeFavourites } from './favourites-slice';
import {
  selectFavourites,
  selectIsOpenFavourites,
} from './favourites-selectors';

import { ArrowBack } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useAppDispatch } from '../../redux-hooks';
import { FavouriteAppBook } from '../../types';

export const FavouriteBooks = () => {
  const FavouriteBooks = useSelector(selectFavourites);
  const isOpenFavourites = useSelector(selectIsOpenFavourites);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="right"
      open={isOpenFavourites}
      onClose={() => dispatch(closeFavourites())}
    >
      <List disablePadding sx={{ width: '320px' }}>
        <ListItem>
          <ListItemIcon>
            <IconButton
              sx={{ ml: '-6px  ' }}
              onClick={() => dispatch(closeFavourites())}
            >
              <ArrowBack sx={{ cursor: 'pointer' }} fontSize="large" />
            </IconButton>
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="h6">My Favourite Books</Typography>}
          />
        </ListItem>

        <Divider />

        {!FavouriteBooks.length ? (
          <ListItem>
            <ListItemText
              sx={{ textAlign: 'center' }}
              primary="List is empty!"
            />
          </ListItem>
        ) : (
          FavouriteBooks.map((book: FavouriteAppBook) => (
            <FavouriteBook
              key={book.id}
              id={book.id}
              title={book.title}
              image={book.image}
              navigate={navigate}
              dispatch={dispatch}
            />
          ))
        )}
      </List>
    </Drawer>
  );
};
