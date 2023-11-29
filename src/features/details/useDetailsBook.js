import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { clearDetails, loadBookById, selectDetails } from './details-slice';
import { useCustomSnackbar } from '../../utils/useCustomSnackbar';

import parse from 'html-react-parser';

export const useDetailsBooks = () => {
  const { id } = useParams();
  const { loading, currentBook, error } = useSelector(selectDetails);
  const showSnackbar = useCustomSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const parseText = (html) => {
    if (!html) return 'No description ...';

    return parse(html); // The html-react-parser library is used for parsing HTML into a component.
  };

  const image = currentBook?.volumeInfo.imageLinks?.thumbnail;
  const categories = currentBook?.volumeInfo.categories?.[0];
  const title = currentBook?.volumeInfo.title;
  const authors = currentBook?.volumeInfo.authors?.join(', ');
  const parsedDescription = parseText(currentBook?.volumeInfo.description);

  useEffect(() => {
    dispatch(loadBookById(id));

    return () => {
      dispatch(clearDetails());
    };
  }, [id, dispatch]);

  return {
    id,
    loading,
    error,
    showSnackbar,
    navigate,
    image,
    categories,
    title,
    authors,
    parsedDescription,
  };
};
