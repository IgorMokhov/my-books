import { RootState } from "../../store";

export const selectBooksAllInfo = (state: RootState) => state.books;
export const selectBooks = (state: RootState) => state.books.entities;
export const selectError = (state: RootState) => state.books.error;