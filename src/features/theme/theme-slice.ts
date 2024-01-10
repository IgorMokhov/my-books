import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Theme } from '../../types';

const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'light' as Theme,
  reducers: {
    setTheme: (_, action: PayloadAction<Theme>) => action.payload,
  },
});

export const themeReducer = themeSlice.reducer;
export const { setTheme } = themeSlice.actions;