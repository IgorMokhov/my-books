export type Book = {
  id: string;
  image: string | React.ReactElement;
  title: string;
  authors: string[] | string;
  categories: string[] | string;
};
