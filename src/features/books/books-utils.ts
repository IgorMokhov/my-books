import { Book } from '../../types';
import { booksSlice } from './books-slice';

// Checking for remaining books on the server. Google Books API doesn't always return all books (fewer than indicated in the totalItems field).
export const checkRemainingItems = (loadedItems: Book[]) => {
  if (loadedItems?.length < 30 || !loadedItems) {
    return false;
  } else {
    return true;
  }
};

// Checking for duplicate books during "load more." Google Books API returns duplicates in some cases.
export const checkUniqueItems = (
  state: booksSlice,
  loadedItems: Book[]
): Book[] => {
  const uniqueIds = new Set(state.entities.map((item: Book) => item.id));
  const filteredItems = loadedItems.filter(
    (item: Book) => !uniqueIds.has(item.id)
  );
  return state.entities.concat(filteredItems);
};
