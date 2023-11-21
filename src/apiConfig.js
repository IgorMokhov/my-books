import axios from 'axios';

export const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
export const MAX_RESULTS = 30;

export const loadData = async ({
  search = '',
  category = '',
  sort = 'relevance',
  page = 0,
}) => {
  const selectedCategory = category === 'all' ? '' : category;
  const startIndex = page * MAX_RESULTS;

  try {
    const response = await axios.get(
      `${BASE_URL}?q=${search}+subject:${selectedCategory}&orderBy=${sort}&startIndex=${startIndex}&maxResults=${MAX_RESULTS}&key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loadDetailsData = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${id}?key=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
