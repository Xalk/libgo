import { BookCard } from "@/entities/book";

export function LibraryPage() {
  return (
    <>
      <section className="bg-gray-100 mt-2 dark:bg-dark-mode">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-3xl font-bold py-3">Library</h3>

          <div className="grid grid-cols-6 gap-8 py-4">
            {
              [...Array(9)].map(b => {
                return (
                  <BookCard
                    className=""
                    details={
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2/640
                        Progress</p>
                    }
                  />
                );
              })
            }
          </div>

        </div>
      </section>
    </>
  );
}
