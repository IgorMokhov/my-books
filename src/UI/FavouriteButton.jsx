import { useDispatch, useSelector } from 'react-redux';
import {
  addBook,
  deleteBook,
  selectFavourites,
} from '../features/favourites/favourites-slice';
import { openSnack } from '../features/snack/snack-slice';

import { IconButton, Tooltip } from '@mui/material';
import { BookmarkAdd, BookmarkAdded } from '@mui/icons-material';

export const FavouriteButton = ({ id, title, image, size }) => {
  const favourites = useSelector(selectFavourites);
  const dispatch = useDispatch();

  const isFavourite = favourites.find((book) => book.id === id);

  const handleButtonClick = (event) => {
    event.preventDefault();

    if (isFavourite) {
      dispatch(
        openSnack({ message: 'Remove from favourites!', variant: 'info' })
      );
      dispatch(deleteBook(id));
    } else {
      dispatch(
        openSnack({ message: 'Added to favourites!', variant: 'success' })
      );
      dispatch(addBook({ id, title, image }));
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
