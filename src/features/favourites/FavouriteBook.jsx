import { closeFavourites, deleteBook } from './favourites-slice';
import { useCustomSnackbar } from '../../utils/useCustomSnackbar';

import { Close } from '@mui/icons-material';
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const FavouriteBook = ({ id, title, image, navigate, dispatch }) => {
  const showSnackbar = useCustomSnackbar();

  const clickHandler = () => {
    dispatch(closeFavourites());
    navigate(`/books/${id}`);
  };

  const deleteHandler = (event) => {
    event.stopPropagation();
    dispatch(deleteBook(id));
    showSnackbar('Removed from favourites!', 'info')
  };

  return (
    <>
      <ListItem sx={{ p: '0' }}>
        <ListItemButton onClick={clickHandler}>
          <ListItemAvatar>
            <Avatar alt={title} src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={title.length > 40 ? `${title.slice(0, 40)}...` : title}
          />
          <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
            <IconButton onClick={deleteHandler}>
              <Close />
            </IconButton>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
};
