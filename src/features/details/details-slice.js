import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadDetailsBook = createAsyncThunk(
  '@@details/loadDetailsBook',
  async (id, { extra: api }) => {
    try {
      const response = await axios.get(
        `${api.BASE_URL}/${id}?key=${api.API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  loading: 'idle', // pending / succeeded  / failed
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
      .addCase(loadDetailsBook.pending, (state, action) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(loadDetailsBook.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.currentBook = action.payload;
      })
      .addCase(loadDetailsBook.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const detailsReducer = detailsSlice.reducer;
export const { clearDetails } = detailsSlice.actions;

// selectors
export const selectDetails = (state) => state.details;
