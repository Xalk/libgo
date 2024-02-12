import { MainSection } from "./main-section";
import { Banner } from "./banner";

export function ProfilePage() {
  return (
    <section className="bg-gray-100 pb-10 dark:bg-dark-mode">
      <Banner />
      <MainSection />
    </section>
  );
}
