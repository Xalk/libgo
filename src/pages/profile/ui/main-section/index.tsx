import { Bio } from "./bio";
import { EmptyBlock } from "./empty-block";
import { MainButtons } from "./main-buttons";

export function MainSection() {
  return (
    <section className="relative">
      <MainButtons />
      <Bio />
      <EmptyBlock />
    </section>
  );
}
