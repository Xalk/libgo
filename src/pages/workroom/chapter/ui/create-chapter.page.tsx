import { CreateChapterForm } from "@/features/workroom";


export function CreateChapterPage() {
  return (
    <section className="my-10 container mx-auto max-w-5xl">
      <h1 className="text-2xl mb-6">Create</h1>
      <CreateChapterForm/>
    </section>
  );
}

