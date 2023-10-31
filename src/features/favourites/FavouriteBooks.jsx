import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FavouriteBook } from './FavouriteBook';
import notFoundImg from '../../accets/not-found-img.jpg';
import {
  closeFavourites,
  selectFavourites,
  selectIsOpenFavourites,
} from './favourites-slice';

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

export const FavouriteBooks = () => {
  const FavouriteBooks = useSelector(selectFavourites);
  const isOpenFavourites = useSelector(selectIsOpenFavourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="right"
      open={isOpenFavourites}
      onClose={() => dispatch(closeFavourites())}
    >
      <List disablePadding sx={{ width: '350px' }}>
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
            primary={
              <Typography sx={{ ml: '15px' }} variant="h6">
                My Favourite Books
              </Typography>
            }
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
          FavouriteBooks.map((book) => (
            <FavouriteBook
              key={book.id}
              id={book.id}
              title={book.title}
              image={book.image || notFoundImg}
              navigate={navigate}
              dispatch={dispatch}
            />
          ))
        )}
      </List>
    </Drawer>
  );
};
