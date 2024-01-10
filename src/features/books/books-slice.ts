import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loadBooks, loadMoreBooks } from './books-async-actions';
import { checkRemainingItems, checkUniqueItems } from './books-utils';
import { GoogleBook, Status } from '../../types/index';


export type booksSlice = {
  loading: Status;
  loadingButton: boolean;
  entities: GoogleBook[];
  total: number | null;
  page: number;
  error: string | null;
  isRemainingItems: boolean;
};


const initialState: booksSlice = {
  loading: 'idle',
  loadingButton: false,
  entities: [],
  total: null,
  page: 0,
  error: null,
  isRemainingItems: false,
};

// eslint-disable-next-line
export const booksSlice = createSlice({
  name: '@@books',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearBooks: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBooks.pending, (state) => {
        state.loading = 'pending';
        state.entities = [];
        state.total = null;
        state.page = 0;
        state.error = null;
      })
      .addCase(loadBooks.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload.items;
        state.total = action.payload.totalItems;
        state.page = 1;
        state.error = null;
        state.isRemainingItems = checkRemainingItems(action.payload.items);
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(loadMoreBooks.pending, (state) => {
        state.loadingButton = true;
      })
      .addCase(loadMoreBooks.fulfilled, (state, action) => {
        state.entities = checkUniqueItems(state, action.payload.items || []); // Passing an empty array in case "items" is absent.
        state.page = state.page + 1;
        state.loadingButton = false;
        state.isRemainingItems = checkRemainingItems(action.payload.items);
      })
      .addCase(loadMoreBooks.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
        state.loadingButton = false;
      });
  },
});

export const { setError, clearBooks } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
