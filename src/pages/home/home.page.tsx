import {Carousel} from 'flowbite-react';
import {HomeLayout} from "@/pages/home/home.layout";


export function HomePage() {

    return (
        <>
            <HomeLayout>
                <div className="flex justify-between gap-4 mt-10">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">Weekly
                            Book</h3>
                        <Carousel slideInterval={3000} leftControl={<></>} rightControl={<></>} className="h-5/6">

                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..."/>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..."/>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..."/>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..."/>
                            <div>
                                text1
                            </div>
                        </Carousel>
                    </div>
                    <div className="">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Meet
                            Webnovel</h3>
                        <ul className="border-b">
                            <li className="flex items-center gap-4 border-t mt-5 p-3">
                                <p className="text-gray-500 dark:text-gray-400">
                                    <strong>Lorem ipsum</strong> <br></br> dolor sit amet, consectetur adipisicing elit.
                                    Accusamus animi consequuntur
                                </p>
                                <img width={64} src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                                     alt="..."/>
                            </li>
                            <li className="flex items-center gap-4 border-t mt-5 p-3">
                                <p className="text-gray-500 dark:text-gray-400">
                                    <strong>Lorem ipsum</strong> <br></br> dolor sit amet, consectetur adipisicing elit.
                                    Accusamus animi consequuntur
                                </p>
                                <img width={64} src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                                     alt="..."/>
                            </li>
                            <li className="flex items-center gap-4 border-t mt-5 p-3">
                                <p className="text-gray-500 dark:text-gray-400">
                                    <strong>Lorem ipsum</strong> <br></br> dolor sit amet, consectetur adipisicing elit.
                                    Accusamus animi consequuntur
                                </p>
                                <img width={64} src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                                     alt="..."/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10">

                    <h3
                        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white py-5 mb-7 border-b">Weekly
                        Featured
                    </h3>
                    <div className="flex gap-[20px]">
                        <div className="rounded-lg flex flex-col gap-4 bg-gray-100">
                            <div className="rounded-t-lg">
                                <div
                                    className="rounded-t-lg w-full h-72 bg-[url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220')] bg-cover bg-center">
                                    <div
                                        className="w-full h-full flex flex-col justify-center items-center backdrop-blur-lg">
                                        <img
                                            width={105}
                                            className="rounded-lg"
                                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                                            alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <p className="p-5">
                                Lu Wu, an aimless video game developer, had been feeling perturbed ever since he found
                                out
                                he
                                was the direct descendant of a king from the underworld. Other than the title, His
                                Excellency,
                                his ancestor hadn't passed down anything else to him. On top of that, all of his
                                ancestor’s
                                subordinates had rebelled against hi
                            </p>
                        </div>
                        <ul className="flex flex-wrap">
                            {
                                [...Array(7)].map(b => {
                                    return (
                                        <div className="w-1/5">
                                            <li className="px-2">
                                                <img
                                                    className="rounded-lg"
                                                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                                                    alt="..."/>
                                                <p className="line-clamp-2 font-bold text-gray-500 dark:text-gray-400">
                                                    Online In Another World
                                                </p>
                                                <p className="text-gray-500 dark:text-gray-400">Fantasy</p>
                                            </li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-10 mb-10">
                    <h3
                        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white py-5 mb-7 border-b">Top
                        Books
                    </h3>
                    <div className="grid grid-cols-3">

                        <div className="">
                            <h4 className="text-xl font-bold tracking-tight text-blue-500 dark:text-white mb-5">Power
                                Ranking</h4>
                            {
                                [...Array(5)].map(b => {
                                    return (
                                        <div className="gap-4 flex mb-3">
                                            <img
                                                width={48}
                                                className="rounded-lg"
                                                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                                                alt="..."/>
                                            <div>
                                                <p className="line-clamp-1 font-bold text-gray-500 dark:text-gray-400">
                                                    Shadow Slave
                                                </p>
                                                <p>
                                                    Fantasy
                                                </p>
                                                <p>
                                                    &#9733; 5.26
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="">
                            <h4 className="text-xl font-bold tracking-tight text-blue-500 dark:text-white mb-5">New</h4>
                            {
                                [...Array(5)].map(b => {
                                    return (
                                        <div className="gap-4 flex mb-3">
                                            <img
                                                width={48}
                                                className="rounded-lg"
                                                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                                                alt="..."/>
                                            <div>
                                                <p className="line-clamp-1 font-bold text-gray-500 dark:text-gray-400">
                                                    Shadow Slave
                                                </p>
                                                <p>
                                                    Fantasy
                                                </p>
                                                <p>
                                                    &#9733; 5.26
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="">
                            <h4 className="text-xl font-bold tracking-tight text-blue-500 dark:text-white mb-5">Collection
                                Ranking</h4>
                            {
                                [...Array(5)].map(b => {
                                    return (
                                        <div className="gap-4 flex mb-3">
                                            <img
                                                width={48}
                                                className="rounded-lg"
                                                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
                                                alt="..."/>
                                            <div>
                                                <p className="line-clamp-1 font-bold text-gray-500 dark:text-gray-400">
                                                    Devouring Monarch: Rebirth of the Profane Phoenix
                                                </p>
                                                <p>
                                                    Fantasy
                                                </p>
                                                <p>
                                                    &#9733; 5.26
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </HomeLayout>
            <div
                className="relative bg-cover bg-center bg-fixed bg-[url('https://static.vecteezy.com/system/resources/previews/022/276/247/original/bookshelves-background-generative-ai-free-photo.jpeg')]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="relative z-10 text-center text-white py-16 max-w-3xl mx-auto">
                    <h2 className=" text-4xl mb-6">This is a Parallax Homepage Widget</h2>
                    <p className="text-xl leading-7">
                        This is one of the included Homepage Widgets. Go to the Customizer, click on Widgets and
                        then
                        Homepage Content. Add the Homepage - Parallax block. There are lots of text color and size
                        options included, and you can even include basic HTML like clickable links, bold and italic
                        text.
                    </p>
                </div>
            </div>
        </>
    );
}
