/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * Chapter API
 * OpenAPI spec version: v1
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export interface UpdateChapterRequest {
  bookId: number;
  /** @minLength 1 */
  content: string;
  id: number;
  isFree: boolean;
  /** @minLength 1 */
  title: string;
}

export interface CreateChapterRequest {
  bookId: number;
  /** @minLength 1 */
  content: string;
  isFree: boolean;
  /** @minLength 1 */
  title: string;
}

export interface ChapterDto {
  id: number
  title: string
  content: string
  isFree: boolean
  createdAt: string
  updatedAt: Date | null
  bookId: number
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const postApiChapters = (
  version: string,
  createChapterRequest: BodyType<CreateChapterRequest>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ChapterDto>(
    {
      url: `http://localhost:5012/api/v${version}/Chapters`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createChapterRequest,
    },
    options,
  );
};

export const putApiChapters = (
  version: string,
  updateChapterRequest: BodyType<UpdateChapterRequest>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ChapterDto>(
    {
      url: `http://localhost:5012/api/v${version}/Chapters`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: updateChapterRequest,
    },
    options,
  );
};

export const getApiChaptersId = (version: string, id: number, options?: SecondParameter<typeof createInstance>) => {
  return createInstance<ChapterDto>({ url: `http://localhost:5012/api/v${version}/Chapters/${id}`, method: "GET" }, options);
};

export const deleteApiChaptersId = (
  version: string,
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ChapterDto>({ url: `/api/v${version}/Chapters/${id}`, method: "DELETE" }, options);
};

export const getApiChaptersBookBookId = (
  version: string,
  bookId: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ChapterDto[]>({ url: `http://localhost:5012/api/v${version}/Chapters/book/${bookId}`, method: "GET" }, options);
};

export const deleteApiChaptersBookBookId = (
  version: string,
  bookId: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<ChapterDto>({ url: `/api/v${version}/Chapters/book/${bookId}`, method: "DELETE" }, options);
};

export type PostApiChaptersResult = NonNullable<Awaited<ReturnType<typeof postApiChapters>>>;
export type PutApiChaptersResult = NonNullable<Awaited<ReturnType<typeof putApiChapters>>>;
export type GetApiChaptersIdResult = NonNullable<Awaited<ReturnType<typeof getApiChaptersId>>>;
export type DeleteApiChaptersIdResult = NonNullable<Awaited<ReturnType<typeof deleteApiChaptersId>>>;
export type GetApiChaptersBookBookIdResult = NonNullable<
  Awaited<ReturnType<typeof getApiChaptersBookBookId>>
>;
export type DeleteApiChaptersBookBookIdResult = NonNullable<
  Awaited<ReturnType<typeof deleteApiChaptersBookBookId>>
>;
