import { useState } from "react";
import Reader from "@/pages/reader/ui/reader";
import TableOfContents from "@/pages/reader/ui/contents-table";
import BurgerButton from "@/pages/reader/ui/burger-button";
const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
export function ReaderPage() {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapters = [
    {
      title: 'Chapter 1',
      pages: [`${text}${text}${text}`],
    },
    {
      title: 'Chapter 2',
      pages: [`${text}`],
    },
    // Add more chapters here
  ];

  return (
    <div className="flex flex-col h-screen bg-[#f3f3f2] dark:bg-dark-mode">
      <BurgerButton className="" onClick={() => setIsTocOpen(!isTocOpen)}>☰</BurgerButton>
      <div className={`w-full mt-12 p-4 bg-gray-200 dark:bg-gray-800 ${isTocOpen ? 'block' : 'hidden'}`}>
        <TableOfContents
          chapters={chapters}
          currentChapter={currentChapter}
          setCurrentChapter={setCurrentChapter}
        />
      </div>
      <div className="flex-1 lg:p-4 p-2 overflow-y-auto">
        <Reader
          chapters={chapters}
          currentChapter={currentChapter}
          setCurrentChapter={setCurrentChapter}
        />
      </div>
    </div>
  );
}

