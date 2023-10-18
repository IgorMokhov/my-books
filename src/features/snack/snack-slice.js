import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  message: '',
  variant: '',
};

const snackSlice = createSlice({
  name: '@@snack',
  initialState,
  reducers: {
    openSnack: (state, action) => {
      state.isOpen = true;
      state.message = action.payload.message;
      state.variant = action.payload.variant;
    },
    closeSnack: () => initialState,
  },
});

export const snackReducer = snackSlice.reducer;
export const { openSnack, closeSnack } = snackSlice.actions;

// selectors
export const SelectSnackAllInfo = (state) => state.snack;
