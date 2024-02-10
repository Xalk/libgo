import { MainSection } from "./main-section";
import { AboutContentTabs } from "./about-content-tabs";
import { SimilarBooks } from "./similar-books";
import { Reviews } from "./reviews";


export function BookPage() {
  return (
    <div className="mt-10 container mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <MainSection />
      <AboutContentTabs />
      <SimilarBooks />
      <Reviews />
    </div>
  );
}
