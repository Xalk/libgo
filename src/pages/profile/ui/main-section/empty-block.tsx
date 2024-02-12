import Image from "next/image";
import { Button } from "flowbite-react";

export function EmptyBlock() {
  return (
    <section className="bg-white dark:bg-dark-mode">
      <div className="mx-auto max-w-5xl flex flex-col gap-5 items-center py-16">
        <Image src="/images/emptyNothing.svg" alt="empty" width={128} height={128} />
        <p className="text-gray-500 text-center">Your time is limited, so don’t waste it <br />
          living someone else’s life.</p>
        <Button pill gradientDuoTone="purpleToBlue">EXPLORE</Button>
      </div>
    </section>
  )
}
