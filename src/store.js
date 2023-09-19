import { configureStore } from '@reduxjs/toolkit';
import { controlsReducer } from './features/controls/controls-slice';
import { booksReducer } from './features/books/books-slice';
import * as api from './config';
import { detailsReducer } from './features/details/details-slice';

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
    books: booksReducer,
    details: detailsReducer,
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
