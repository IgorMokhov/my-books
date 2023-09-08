import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadBooks = createAsyncThunk(
  '@@books/loadBooks',
  async (
    { search = '', category = '', sort = 'relevance' },
    { extra: api }
  ) => {
    const selectedCategory = category === 'all' ? '' : category; // ????????

    try {
      const response = await axios.get(
        `${api.BASE_URL}?q=${search}+subject:${selectedCategory}&orderBy=${sort}&maxResults=${api.MAX_RESULTS}&key=${api.API_KEY}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  loading: 'idle', // pending / succeeded / failed
  booksList: [],
  total: 0,
  error: null,
};

export const booksSlice = createSlice({
  name: '@@books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBooks.pending, (state) => {
        state.loading = 'pending';
        state.total = 0;
        state.error = null;
      })
      .addCase(loadBooks.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.booksList = action.payload.items;
        state.total = action.payload.totalItems;
        state.error = null;
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const booksReducer = booksSlice.reducer;

// selectors
export const selectBooks = (state) => state.books;
