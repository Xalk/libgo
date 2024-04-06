import { Book } from "./types";
import { CreateBooksRequest, UpdateBooksRequest } from "@/shared/api/books-generated";
import { createStoreContext } from "@/shared/lib/zustand";
import { create } from "zustand";
import { booksApi } from "@/shared/api";
import { CURRENT_API_VERSION } from "@/shared/constants";

export type BooksStore = {
  books: Book[];
  getBookById: (id: string) => Book | undefined;
  loadAllBooks: () => Promise<void>;
  createBook: (data: CreateBooksRequest) => Promise<Book>;
  updateBook: (id: string, data: UpdateBooksRequest) => Promise<Book>;
  removeBook: (id: string) => Promise<void>;
};

export const { useStore: useBooks, Provider: BooksProvider } = createStoreContext(({ books }: {
  books: Book[]
}) => create<BooksStore>((set, get) => ({
  books,
  getBookById: (id: string) => get().books.find((book) => book.id === Number(id)),
  loadAllBooks: async () => {
    set({
      books: await booksApi.getApiBooks(CURRENT_API_VERSION)
    });
  },
  createBook: async (data) => {
    const newTask = await booksApi.postApiBooks(CURRENT_API_VERSION, data);

    set({
      books: await booksApi.getApiBooks(CURRENT_API_VERSION)
    });

    return newTask;
  },
  updateBook: async (id, data) => {
    const book = await booksApi.getApiBooksId(CURRENT_API_VERSION, Number(id));
    if (!book) {
      throw new Error();
    }
    const newBook = { ...book, ...data };

    await booksApi.putApiBooks(CURRENT_API_VERSION, newBook as UpdateBooksRequest);

    set({
      books: await booksApi.getApiBooks(CURRENT_API_VERSION)
    });

    return newBook as Book;
  },
  removeBook: async (id: string) => {
    await booksApi.deleteApiBooksId(CURRENT_API_VERSION, Number(id));
    set({
      books: await booksApi.getApiBooks(CURRENT_API_VERSION),
    });
  },
})));
