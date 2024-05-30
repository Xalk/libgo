export type Chapter = {
  id: number
  title: string
  content: string
  isFree: boolean
  createdAt: string
  updatedAt: Date | null
  bookId: number
};
