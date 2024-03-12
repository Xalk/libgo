import { UiTypography } from "@/shared/ui/ui-typography";
import { Button } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { useRouter } from "next/router";

export function ContentPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-8">
      <div className="flex justify-between pr-9">
        <UiTypography as="h2" variant="heading">
          New Eden: Live to Play, Play to Live
        </UiTypography>
        <Button size="sm" pill color="gray" onClick={() => router.push(`/workroom/${123}/edit`)}>
          <IoMdSettings className="w-4 h-4" />
        </Button>
      </div>
      <Button pill gradientDuoTone="purpleToBlue" size="sm" className="mt-5" onClick={() => router.push(`/workroom/${123}/chapter`)}>+ ADD CHAPTER</Button>
      <table className="text-left text-lg font-light w-full mt-5">
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
                <td className="whitespace-nowrap px-10 py-4 flex justify-between">
                  <p>The Distinguished and Aristocrats Only</p>
                  <div className="flex gap-3">
                    <Button size="sm" pill color="yellow" onClick={() => router.push(`/workroom/${123}/chapter/${123}`)}>
                      <MdEdit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" pill color="red">
                      <MdDelete className="w-4 h-4" />
                    </Button>

                  </div>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
}
