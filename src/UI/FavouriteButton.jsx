import { useDispatch, useSelector } from 'react-redux';
import {
  addBook,
  deleteBook,
  selectFavourites,
} from '../features/favourites/favourites-slice';

import { IconButton, Tooltip } from '@mui/material';
import { BookmarkAdd, BookmarkAdded } from '@mui/icons-material';
import { useCustomSnackbar } from '../utils/useCustomSnackbar';

export const FavouriteButton = ({ id, title, image, size }) => {
  const favourites = useSelector(selectFavourites);
  const showSnackbar = useCustomSnackbar();
  const dispatch = useDispatch();

  const isFavourite = favourites.find((book) => book.id === id);

  const handleButtonClick = (event) => {
    event.preventDefault();

    if (isFavourite) {
      dispatch(deleteBook(id));
      showSnackbar('Removed from favourites!', 'info');
    } else {
      dispatch(addBook({ id, title, image }));
      showSnackbar('Added to favourites!', 'success');
    }
  };

  return (
    <Tooltip
      title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
      placement="right"
    >
      <IconButton onClick={handleButtonClick}>
        {isFavourite ? (
          <BookmarkAdded fontSize={size} color="secondary" />
        ) : (
          <BookmarkAdd fontSize={size} />
        )}
      </IconButton>
    </Tooltip>
  );
};
