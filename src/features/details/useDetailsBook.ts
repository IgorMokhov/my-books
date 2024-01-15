import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux-hooks';
import { selectDetails } from './details-selectors';
import { useCustomSnackbar } from '../../utils/useCustomSnackbar';
import { loadBookById } from './details-async-actions';
import { clearDetails } from './details-slice';
import parse from 'html-react-parser';

export const useDetailsBooks = () => {
  const { id } = useParams() as { id: string };
  const { loading, currentBook, error } = useSelector(selectDetails);
  const showSnackbar = useCustomSnackbar();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const parseText = (html: string | undefined) => {
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
