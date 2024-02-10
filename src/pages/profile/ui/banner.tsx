import { Avatar } from "flowbite-react";
import Image from "next/image";

export function Banner() {
  return (
    <div className="mx-auto max-w-5xl  relative">
      <div className="relative">
        <img src="/images/banner.svg" alt="banner" className=" w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3c3c3c5c]"></div>
      </div>

      <div className="absolute left-2/4 bottom-4 text-white">
        <p className=" text-center"><span className="font-bold text-2xl">101</span><br />Read&nbsp;books
        </p>
      </div>
      <Avatar rounded color="white"
              className="absolute left-5 bottom-[-75px] rounded-full border-[6px] border-white"
              img={(props) => (
                <Image
                  style={{ width: 160, height: 160 }}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="avatar"
                  src="/images/avatar.jpg"
                  {...props}
                />
              )}
      />
    </div>
  );
}
