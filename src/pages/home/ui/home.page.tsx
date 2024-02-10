import { UiParallaxBlock } from "@/shared/ui/ui-parallax-block";
import { UiTypography } from "@/shared/ui/ui-typography";
import { HomeLayout } from "./home.layout";
import { WeeklyBook } from "./weekly-book";
import { WeeklyFeatured } from "./weekly-featured";
import { TopBooks } from "./top-books";


export function HomePage() {

  return (
    <>
      <HomeLayout>
        <WeeklyBook />
        <WeeklyFeatured />
        <TopBooks />
      </HomeLayout>
      <UiParallaxBlock title="This is a Parallax Homepage Widget">
        <UiTypography as="p" variant="body" className="text-white text-xl leading-7">
          This is one of the included Homepage Widgets. Go to the Customizer, click on Widgets and
          then
          Homepage Content. Add the Homepage - Parallax block. There are lots of text color and size
          options included, and you can even include basic HTML like clickable links, bold and italic
          text.
        </UiTypography>
      </UiParallaxBlock>
    </>
  );
}
