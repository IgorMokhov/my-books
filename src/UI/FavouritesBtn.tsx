import { useSelector } from 'react-redux';

import { useCustomSnackbar } from '../utils/useCustomSnackbar';
import { addBook, deleteBook } from '../features/favourites/favourites-slice';
import { selectFavourites } from '../features/favourites/favourites-selectors';
import { FavouriteAppBook } from '../types';

import { IconButton, Tooltip } from '@mui/material';
import {
  BookmarkAddOutlined,
  BookmarkAddedOutlined,
} from '@mui/icons-material';
import { useAppDispatch } from '../redux-hooks';

type FavouritesBtnSize = 'small' | 'medium' | 'large';

interface FavouritesBtnProps extends FavouriteAppBook {
  size: FavouritesBtnSize;
}

export const FavouritesBtn = ({
  id,
  title,
  image,
  size,
}: FavouritesBtnProps) => {
  const favourites = useSelector(selectFavourites);
  const showSnackbar = useCustomSnackbar();
  const dispatch = useAppDispatch();

  const isFavourite = favourites.find((book) => book.id === id);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
      <IconButton onClick={handleClick}>
        {isFavourite ? (
          <BookmarkAddedOutlined fontSize={size} color="secondary" />
        ) : (
          <BookmarkAddOutlined fontSize={size} />
        )}
      </IconButton>
    </Tooltip>
  );
};
