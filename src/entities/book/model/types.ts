export type Book = {
  id: number,
  name: string,
  description: string,
  price: number,
  publishDate: Date,
  userId: number,
  coAuthorIds: null | number[],
};
