import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Category, Sort } from '../../types';

type controlsSlice = {
  search: string;
  category: Category;
  sort: Sort;
};

const initialState: controlsSlice = {
  search: '',
  category: 'all',
  sort: 'relevance',
};

// eslint-disable-next-line
export const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<Category>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSearch, setCategory, setSort } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
