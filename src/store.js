import { configureStore } from '@reduxjs/toolkit';
import { controlsReducer } from './features/controls/controls-slice';
import { booksReducer } from './features/books/books-slice';
import { detailsReducer } from './features/details/details-slice';
import { FavouritesReducer } from './features/favourites/favourites-slice';
import * as api from './config';

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
    books: booksReducer,
    details: detailsReducer,
    favourites: FavouritesReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }),
});
