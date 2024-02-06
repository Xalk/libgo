import {Avatar, Button} from "flowbite-react";
import {FaRegHeart} from "react-icons/fa";
import Image from 'next/image';

export function ProfilePage() {
    return (
        <>
            <section className="bg-gray-100 pb-10">
                <div className="mx-auto max-w-5xl relative">
                    <div className="relative">
                        <img src="/images/banner.svg" alt="banner" className=" w-full"/>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3c3c3c5c]"></div>
                    </div>

                    <div className="absolute left-2/4 bottom-4 text-white">
                        <p className=" text-center"><span className="font-bold text-2xl">101</span><br/>Read&nbsp;books
                        </p>
                    </div>
                </div>
                <section className="mx-auto max-w-5xl relative">
                    <Avatar rounded color="white"
                            className="absolute left-5 top-[-125px] rounded-full border-[6px] border-white"
                            img={(props) => (
                                <Image
                                    style={{width: 160, height: 160}}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt="avatar"
                                    src="/images/avatar.jpg"
                                    {...props}
                                />
                            )}
                    />
                    <div className="flex justify-end gap-4 mt-10">
                        <Button pill>
                            <FaRegHeart className="mr-2 h-4 w-4"/>
                            12
                        </Button>
                        <Button pill color="gray">
                            EDIT PROFILE
                        </Button>
                    </div>
                    <div className="mt-10 flex flex-col gap-3">
                        <h3 className="text-3xl font-bold">Belac1013</h3>
                        <p className="text-gray-500">Not much to say other than liking to read.</p>
                        <ul className="flex gap-4">
                            <li>2020-05-07 Joined</li>
                            <li>United States</li>
                        </ul>
                    </div>
                </section>
            </section>
            <section className="mx-auto max-w-5xl flex flex-col gap-5 items-center py-16">
                <Image src="/images/emptyNothing.svg" alt="empty" width={128} height={128}/>
                <p className="text-gray-500 text-center">Your time is limited, so don’t waste it <br/>
                    living someone else’s life.</p>
                <Button pill gradientDuoTone="purpleToBlue">EXPLORE</Button>
            </section>

        </>
    )
}
