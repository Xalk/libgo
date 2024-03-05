import { CreateBookForm } from "@/features/book";


export function CreateBookPage() {
  return (
    <section className="my-10 container mx-auto max-w-5xl">
        <h1 className="text-2xl mb-6">Create</h1>
       <CreateBookForm/>
    </section>
  );
}

