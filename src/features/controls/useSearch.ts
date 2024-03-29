import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { loadBooks } from '../books/books-async-actions';
import { setSearch } from './controls-slice';
import { selectTheme } from '../theme/theme-selectors';
import { useCustomSnackbar } from '../../utils/useCustomSnackbar';
import { useAppDispatch } from '../../redux-hooks';
import { selectControls } from './controls-selectors';
import { SyntheticEvent } from 'react';

export const useSearch = () => {
  const { search, category, sort } = useSelector(selectControls);
  const theme = useSelector(selectTheme);
  const showSnackbar = useCustomSnackbar();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const searchSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!search.trim()) {
      showSnackbar('Search is empty!', 'error');
      return;
    }

    dispatch(loadBooks({ search, category, sort }));
    navigate('/');
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearch(event.target.value));

  return {
    search,
    theme,
    searchSubmitHandler,
    onChangeHandler,
  };
};
