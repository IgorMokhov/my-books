import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Category, Sort } from '../../types';

type ControlsSlice = {
  search: string;
  category: Category;
  sort: Sort;
};

const initialState: ControlsSlice = {
  search: '',
  category: 'all',
  sort: 'relevance',
};

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
