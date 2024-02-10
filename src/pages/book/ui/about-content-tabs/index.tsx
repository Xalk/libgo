import { UiTypography } from "@/shared/ui/ui-typography";

export function AboutContentTabs() {
  return (
    <div className="mt-10">
      <UiTypography as="p" variant="primary" className="text-2xl font-bold">
        About | Table of Contents
      </UiTypography>
      <UiTypography as="p" variant="primary" className="text-xl font-bold">Synopsis</UiTypography>
      <UiTypography as="p" variant="body" className="mt-2">
        In a world of constant competition, one man aims for the top. In this new genre
        VRMMORPG, he plans on
        becoming the strongest at all costs.
        The classes, the races, the starting zones, everything is a mystery in 'New Eden'. This game is
        coming out without a shred of details. The only thing that was promoted was the freedom of skill
        choosing.
      </UiTypography>
    </div>
  )
}
