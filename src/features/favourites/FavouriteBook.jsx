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
  Typography,
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
    showSnackbar('Removed from favourites!', 'info');
  };

  return (
    <>
      <ListItem sx={{ p: '0' }}>
        <ListItemButton onClick={clickHandler}>
          <ListItemAvatar>
            <Avatar alt={title} src={image} />
          </ListItemAvatar>
          <ListItemText
            sx={{
              lineHeight: '10px',
            }}
            primary={
              <Typography sx={{ fontSize: '15px', lineHeight: 1.2 }}>
                {title.length > 35 ? `${title.slice(0, 35)}...` : title}
              </Typography>
            }
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
