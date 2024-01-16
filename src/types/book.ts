export type GoogleBook = {
  id: string;
  volumeInfo: {
    title?: string;
    authors?: string[];
    categories?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
    description?: string;
  };
};

export type AppBook = {
  id: string;
  image: string;
  title: string;
  authors: string[] | string;
  categories: string[] | string;
};

export type FavouriteAppBook = {
  id: string;
  image: string;
  title: string;
};