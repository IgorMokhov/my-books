import { createAsyncThunk } from '@reduxjs/toolkit';
import { Extra, RequestParams, ResponseObject } from '../../types';

export const loadBooks = createAsyncThunk<
  ResponseObject,
  RequestParams,
  {
    // Types for ThunkApiConfig
    extra: Extra;
  }
>(
  '@@books/loadBooks',
  async ({ search, category, sort }, { extra: { api } }) => {
    const response = await api.loadData({ search, category, sort });
    return response;
  }
);

export const loadMoreBooks = createAsyncThunk<
  ResponseObject,
  RequestParams,
  {
    extra: Extra;
  }
>(
  '@@books/loadMoreBooks',
  async ({ search, category, sort, page }, { extra: { api } }) => {
    const response = await api.loadData({ search, category, sort, page });
    return response;
  }
);
