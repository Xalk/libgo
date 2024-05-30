import { useState } from "react";
import { Comment } from "@/entities/comment";

export function CommentItem({ comment }: { comment: Comment }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen)

  return (
    <article className="relative p-6 text-base bg-white rounded-lg dark:bg-dark-mode">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough" />Michael Gough</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime="2022-02-08"
                  title="February 8th, 2022">Feb. 8, 2022
            </time>
          </p>
        </div>
        <button id="dropdownComment1Button"
                onClick={handleMenuClick}
                data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-dark-mode dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
               fill="currentColor" viewBox="0 0 16 3">
            <path
              d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
        {
          isMenuOpen && <div id="dropdownComment1"
                             className="absolute top-8 right-16 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton">
              <li>
                <a href="#"
                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
              </li>
              <li>
                <a href="#"
                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
              </li>
              <li>
                <a href="#"
                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
              </li>
            </ul>
          </div>
        }
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment.content}</p>
    </article>
  )
}
