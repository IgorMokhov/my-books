import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadBooks } from '../books/books-slice';
import { selectControls, setSearch } from './controls-slice';
import { selectTheme } from '../theme/theme-slice';
import { useCustomSnackbar } from '../../utils/useCustomSnackbar';

export const useSearch = () => {
  const { search, category, sort } = useSelector(selectControls);
  const theme = useSelector(selectTheme);
  const showSnackbar = useCustomSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchSubmitHandler = (event) => {
    event.preventDefault();

    if (!search.trim()) {
      showSnackbar('Search is empty!', 'error');
      return;
    }

    dispatch(loadBooks({ search, category, sort }));
    navigate('/');
  };

  const onChangeHandler = (event) => dispatch(setSearch(event.target.value));

  return {
    search,
    category,
    sort,
    theme,
    showSnackbar,
    dispatch,
    navigate,
    searchSubmitHandler,
    onChangeHandler,
  };
};
