import { UiTypography } from "@/shared/ui/ui-typography";
import { Tabs } from "flowbite-react";

export function AboutContentTabs() {
  return (
    <div className="mt-10">
      <Tabs aria-label="Tabs with underline bg-white" style="underline"
            theme={{
              tablist: {
                tabitem: {
                  base: "flex items-center justify-center py-4 mr-4 text-xl font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-0  focus:outline-none rounded-t-lg border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600"
                }
              }
            }}
      >
        <Tabs.Item active title="About">
          <UiTypography as="p" variant="primary" className="text-xl font-bold">Synopsis</UiTypography>
          <UiTypography as="p" variant="body" className="mt-2">
            In a world of constant competition, one man aims for the top. In this new genre
            VRMMORPG, he plans on
            becoming the strongest at all costs.
            The classes, the races, the starting zones, everything is a mystery in 'New Eden'. This game is
            coming out without a shred of details. The only thing that was promoted was the freedom of skill
            choosing.
          </UiTypography>
        </Tabs.Item>
        <Tabs.Item active title="Table of Contents">
          <div className="flex justify-between min-w-full">
            <table className="text-left text-lg font-light">
              <thead
                className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
              <tr>
                <th scope="col" className="py-4 px-10">№</th>
                <th scope="col" className="px-6 py-4">Chapter</th>
              </tr>
              </thead>
              <tbody>
              {
                [...Array(9)].map((b, i) => {
                  return (
                    <tr
                      className={`border-b ${i % 2 === 0 ? "bg-white" : "bg-neutral-100"} dark:border-neutral-500 dark:bg-neutral-700`}>
                      <td className="whitespace-nowrap px-10 py-4">
                        1
                      </td>
                      <td className="whitespace-nowrap px-10 py-4">
                        The Distinguished and Aristocrats Only
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
            <table className="text-left text-lg font-light">
              <thead
                className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
              <tr>
                <th scope="col" className="px-10 py-4">№</th>
                <th scope="col" className="px-6 py-4">Chapter</th>
              </tr>
              </thead>
              <tbody>
              {
                [...Array(9)].map((b, i) => {
                  return (
                    <tr
                      className={`border-b ${i % 2 === 0 ? "bg-white" : "bg-neutral-100"} dark:border-neutral-500 dark:bg-neutral-700`}>
                      <td className="whitespace-nowrap px-10 py-4">1</td>
                      <td className="whitespace-nowrap px-10 py-4">The Distinguished and Aristocrats Only</td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
