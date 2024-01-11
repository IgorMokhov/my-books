import { useSelector } from 'react-redux';

import { clearBooks } from './books-slice';
import { selectBooksAllInfo } from './books-selectors';
import {
  VariantMessage,
  useCustomSnackbar,
} from '../../utils/useCustomSnackbar';

import { loadMoreBooks } from './books-async-actions';
import { useAppDispatch } from '../../redux-hooks';
import { GoogleBook, Status, Theme } from '../../types';
import { selectTheme } from '../theme/theme-selectors';
import { selectControls } from '../controls/controls-selectors';

export const useBooks = (): {
  loading: Status;
  loadingButton: boolean;
  entities: GoogleBook[];
  total: number | null;
  error: string | null;
  isRemainingItems: boolean;
  theme: Theme;
  clearHandler: () => void;
  showSnackbar: (message: string, variant: VariantMessage) => void;
  loadMoreHandler: () => void;
} => {
  const {
    loading,
    loadingButton,
    entities,
    total,
    page,
    error,
    isRemainingItems,
  } = useSelector(selectBooksAllInfo);
  const { search, category, sort } = useSelector(selectControls);
  const theme = useSelector(selectTheme);
  const showSnackbar = useCustomSnackbar();
  const dispatch = useAppDispatch();

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
    clearHandler,
    showSnackbar,
    loadMoreHandler,
  };
};
