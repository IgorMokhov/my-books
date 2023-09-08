import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  category: 'all',
  sort: 'relevance',
};

export const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setSearch, setCategory, setSort } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

// selectors
export const selectControls = (state) => state.controls;
export const selectSearch = (state) => state.controls.search;
export const selectCategory = (state) => state.controls.category;
export const selectSort = (state) => state.controls.sort;
