import { UpdateBookForm } from "@/features/book";

export function EditPage() {
  return (
    <section className="my-10 container mx-auto max-w-5xl">
      <h1 className="text-2xl mb-6">Edit</h1>
      <UpdateBookForm />
    </section>
  );
}
