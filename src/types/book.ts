export type GoogleBook = {
  id: string;
  volumeInfo: {
    title?: string | undefined;
    authors?: string[] | undefined;
    categories?: string[] | undefined;
    imageLinks?: {
      thumbnail?: string | undefined;
    };
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
