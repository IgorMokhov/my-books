import { RootState } from "../../store";

export const selectFavourites = (state: RootState) => state.favourites.list;
export const selectQtyFavourites = (state: RootState) => state.favourites.list.length;
export const selectIsOpenFavourites = (state: RootState) => state.favourites.isOpen;