import { RootState } from "../../store";

export const selectControls = (state: RootState) => state.controls;
export const selectSearch = (state: RootState) => state.controls.search;
export const selectCategory = (state: RootState) => state.controls.category;
export const selectSort = (state: RootState) => state.controls.sort;