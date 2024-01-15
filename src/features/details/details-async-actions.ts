import { createAsyncThunk } from '@reduxjs/toolkit';
import { Extra, GoogleBook } from '../../types';

export const loadBookById = createAsyncThunk<
  GoogleBook,
  string,
  {
    extra: Extra;
  }
>('@@details/loadBookById', async (id, { extra: { api } }) => {
  const response = api.loadDetailsData(id);
  return response;
});
