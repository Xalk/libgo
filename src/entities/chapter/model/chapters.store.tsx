import { createStoreContext } from "@/shared/lib/zustand";
import { create } from "zustand";
import { CURRENT_API_VERSION } from "@/shared/constants";
import { Chapter } from "./types";
import { CreateChapterRequest, UpdateChapterRequest } from "@/shared/api/chapters-generated";
import { chaptersApi } from "@/shared/api";

export type ChaptersStore = {
  chapters: Chapter[];
  getChapterById: (id: string) => Chapter | undefined;
  loadAllChapters: (bookId: number) => Promise<void>;
  createChapter: (data: CreateChapterRequest) => Promise<Chapter>;
  updateChapter: (id: string, data: UpdateChapterRequest) => Promise<Chapter>;
  removeChapter: (id: string) => Promise<void>;
};

export const { useStore: useChapters, Provider: ChaptersProvider } = createStoreContext(({ chapters }: {
  chapters: Chapter[]
}) => create<ChaptersStore>((set, get) => ({
  chapters,
  getChapterById: (id: string) => get().chapters.find((Chapter) => Chapter.id === Number(id)),
  loadAllChapters: async (bookId: number) => {
    set({
      chapters: await chaptersApi.getApiChaptersBookBookId(CURRENT_API_VERSION, bookId)
    });
  },
  createChapter: async (data) => {
    const newTask = await chaptersApi.postApiChapters(CURRENT_API_VERSION, data);

    set({
      chapters: await chaptersApi.getApiChapters(CURRENT_API_VERSION)
    });

    return newTask;
  },
  updateChapter: async (id, data) => {
    const Chapter = await chaptersApi.getApiChaptersId(CURRENT_API_VERSION, Number(id));
    if (!Chapter) {
      throw new Error();
    }
    const newChapter = { ...Chapter, ...data };

    await chaptersApi.putApiChapters(CURRENT_API_VERSION, newChapter as UpdateChapterRequest);

    set({
      chapters: await chaptersApi.getApiChapters(CURRENT_API_VERSION)
    });

    return newChapter as Chapter;
  },
  removeChapter: async (id: string) => {
    await chaptersApi.deleteApiChaptersId(CURRENT_API_VERSION, Number(id));
    set({
      chapters: await chaptersApi.d(CURRENT_API_VERSION)
    });
  }
})));
