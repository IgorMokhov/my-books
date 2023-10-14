import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadBooks = createAsyncThunk(
  '@@books/loadBooks',
  async (
    { search = '', category = '', sort = 'relevance' },
    { extra: api }
  ) => {
    const response = await api.loadData({ search, category, sort });
    return response;
  }
);

export const loadMoreBooks = createAsyncThunk(
  '@@books/loadMoreBooks',
  async (
    { search = '', category = '', sort = 'relevance', page = 0 },
    { extra: api }
  ) => {
    const response = await api.loadData({ search, category, sort, page });
    return response;
  }
);

const initialState = {
  loading: 'idle', // pending / succeeded  / failed
  loadingButton: false,
  entities: [],
  total: null,
  page: 0,
  error: null,
};

export const booksSlice = createSlice({
  name: '@@books',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
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
        state.page = state.page + 1;
        state.error = null;
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(loadMoreBooks.pending, (state) => {
        state.loadingButton = true;
      })
      .addCase(loadMoreBooks.fulfilled, (state, action) => {
        state.entities = state.entities.concat(action.payload.items);
        state.page = state.page + 1;
        state.loadingButton = false;
      })
      .addCase(loadMoreBooks.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingButton = false;
      });
  },
});

export const { setError } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

// selectors
export const selectBooksAllInfo = (state) => state.books;
export const selectBooks = (state) => state.books.entities;
export const selectError = (state) => state.books.error;
