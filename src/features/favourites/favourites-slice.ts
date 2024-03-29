import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppBook, FavouriteAppBook } from '../../types';

type FavouritesSlice = {
  isOpen: boolean;
  list: FavouriteAppBook[];
};

const initialState: FavouritesSlice = {
  isOpen: false,
  list: [],
};

const favouritesSlice = createSlice({
  name: '@@favourites',
  initialState,
  reducers: {
    addBook: (
      state,
      action: PayloadAction<Omit<AppBook, 'authors' | 'categories'>>
    ) => {
      state.list.push(action.payload); // add {id, title, image}
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
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
export const { addBook, deleteBook, openFavourites, closeFavourites } =
  favouritesSlice.actions;
