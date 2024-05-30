import { Book } from "@/entities/book";
import { Chapter } from "@/entities/chapter";
import { createStoreContext } from "@/shared/lib/zustand";
import { create } from "zustand";
import { chaptersApi, booksApi } from "@/shared/api";
import { CURRENT_API_VERSION } from "@/shared/constants";
import { CreateBooksRequest, UpdateBooksRequest } from "@/shared/api/books-generated";
import { CreateChapterRequest, UpdateChapterRequest } from "@/shared/api/chapters-generated";


export type BooksStore = {
  myBooks: Book[];
  selectedBook?: Book | null;
  selectedBookChapters?: Chapter[] | [];
  selectedChapter?: Chapter | null;

  getBookById: (id: string) => Book | undefined;
  loadMyBooks: (userId: number) => Promise<void>;
  updateBook: (data: UpdateBooksRequest, userId: number) => Promise<Book>;
  createBook: (data: CreateBooksRequest, userId: number) => Promise<Book>;
  removeBook: (id: string, userId: number) => Promise<void>;

  loadSelectedBookChapters: (bookId: number) => Promise<void>;
  resetSelectedBookChapters: () => void;
  createChapter: (data: CreateChapterRequest) => Promise<Chapter>;
  removeChapter: (id: string, bookId: number) => Promise<void>;
  updateChapter: (data: UpdateChapterRequest) => Promise<Chapter>;
  getChapterById: (id: string) => Chapter | undefined;
};

export const { useStore: useWorkroom, Provider: WorkroomProvider } = createStoreContext((
  { myBooks, selectedBook, selectedBookChapters, selectedChapter }: {
    myBooks: Book[],
    selectedBook?: Book | null,
    selectedBookChapters?: Chapter[] | [],
    selectedChapter?: Chapter | null
  }) => create<BooksStore>((set, get) => ({
  myBooks,
  selectedBook,
  selectedBookChapters,
  selectedChapter,
  getBookById: (id: string) => get().myBooks.find((book) => book.id === Number(id)),
  loadMyBooks: async (userId) => {
    set({
      myBooks: await booksApi.getApiBooksUserUserId(CURRENT_API_VERSION, userId)
    });
  },
  createBook: async (data, userId) => {
    const newTask = await booksApi.postApiBooks(CURRENT_API_VERSION, data);

    set({
      myBooks: await booksApi.getApiBooksUserUserId(CURRENT_API_VERSION, userId)
    });

    return newTask;
  },
  updateBook: async (data, userId) => {
    const book = await booksApi.getApiBooksId(CURRENT_API_VERSION, Number(data.id));
    if (!book) {
      throw new Error();
    }
    const newBook = { ...book, ...data };

    await booksApi.putApiBooks(CURRENT_API_VERSION, newBook as UpdateBooksRequest);

    set({
      myBooks: await booksApi.getApiBooksUserUserId(CURRENT_API_VERSION, userId)
    });

    return newBook as Book;
  },
  removeBook: async (id, userId) => {
    await booksApi.deleteApiBooksId(CURRENT_API_VERSION, Number(id));
    set({
      myBooks: await booksApi.getApiBooksUserUserId(CURRENT_API_VERSION, userId)
    });
  },
  loadSelectedBookChapters: async (bookId) => {
    chaptersApi.getApiChaptersBookBookId(CURRENT_API_VERSION, bookId).then(c => {
      set({
        selectedBookChapters: c
      });
    }).catch(() => {

      set({
        selectedBookChapters: []
      });
    });
  },
  resetSelectedBookChapters: () => {
    set({
      selectedBookChapters: []
    });
  },
  createChapter: async (data) => {
    const newTask = await chaptersApi.postApiChapters(CURRENT_API_VERSION, data);

    set({
      selectedBookChapters: await chaptersApi.getApiChaptersBookBookId(CURRENT_API_VERSION, data.bookId)
    });

    return newTask;
  },
  removeChapter: async (id, bookId) => {
    await chaptersApi.deleteApiChaptersId(CURRENT_API_VERSION, Number(id));
    set({
      selectedBookChapters: await chaptersApi.getApiChaptersBookBookId(CURRENT_API_VERSION, bookId)
    });
  },
  getChapterById: (id: string) => get().selectedBookChapters?.find((c) => c.id === Number(id)),
  updateChapter: async (data) => {
    const chapter = await chaptersApi.getApiChaptersId(CURRENT_API_VERSION, Number(data.id));
    if (!chapter) {
      throw new Error();
    }
    const newChapter = { ...chapter, ...data };

    await chaptersApi.putApiChapters(CURRENT_API_VERSION, newChapter as UpdateChapterRequest);

    set({
      selectedBookChapters: await chaptersApi.getApiChaptersBookBookId(CURRENT_API_VERSION, data.bookId)
    });

    return newChapter as Chapter;
  },
})));
