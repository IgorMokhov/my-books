import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  list: [],
};

const favouritesSlice = createSlice({
  name: '@@favourites',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload); // {id, title, image}
    },
    deleteBook: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload); // id
    },
    openFavourites: (state) => {
      state.isOpen = true;
    },
    closeFavourites: (state) => {
      state.isOpen = false;
    },
  },
});

export const FavouritesReducer = favouritesSlice.reducer;
export const {
  addBook,
  deleteBook,
  openFavourites,
  closeFavourites,
  clearFavourites,
} = favouritesSlice.actions;

// selectors
export const selectFavourites = (state) => state.favourites.list;
export const selectQtyFavourites = (state) => state.favourites.list.length;
export const selectIsOpenFavourites = (state) => state.favourites.isOpen;
