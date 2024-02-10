import { LibraryHistoryTabs } from "./LibraryHistoryTabs";

export function LibraryPage() {
  return (
    <>
      <section className="bg-gray-100 mt-2">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-3xl font-bold py-3">Library</h3>
          <LibraryHistoryTabs />
        </div>
      </section>
    </>
  );
}
