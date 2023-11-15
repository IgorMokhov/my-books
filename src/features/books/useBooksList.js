import { useDispatch, useSelector } from 'react-redux';

import { clearBooks, loadMoreBooks, selectBooksAllInfo } from './books-slice';
import { selectControls } from '../controls/controls-slice';
import { useCustomSnackbar } from '../../utils/useCustomSnackbar';

import { useTheme } from '@emotion/react';

export const useBooksList = () => {
  const {
    loading,
    loadingButton,
    entities,
    total,
    error,
    page,
    isRemainingItems,
  } = useSelector(selectBooksAllInfo);
  const { search, category, sort } = useSelector(selectControls);
  const theme = useTheme();
  const showSnackbar = useCustomSnackbar();
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearBooks());
    showSnackbar('All books have been deleted!', 'info');
  };

  const loadMoreHandler = () => {
    dispatch(loadMoreBooks({ search, category, sort, page }));
  };

  return {
    loading,
    loadingButton,
    entities,
    total,
    error,
    isRemainingItems,
    theme,
    showSnackbar,
    clearHandler,
    loadMoreHandler,
  };
};
