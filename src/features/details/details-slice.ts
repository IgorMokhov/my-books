import { createSlice } from '@reduxjs/toolkit';
import { GoogleBook, Status } from '../../types';
import { loadBookById } from './details-async-actions';

type DetailsSlice = {
  loading: Status;
  currentBook: GoogleBook | null;
  error: string | null;
};

const initialState: DetailsSlice = {
  loading: 'idle',
  currentBook: null,
  error: null,
};

export const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBookById.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(loadBookById.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.currentBook = action.payload;
      })
      .addCase(loadBookById.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const detailsReducer = detailsSlice.reducer;
export const { clearDetails } = detailsSlice.actions;
