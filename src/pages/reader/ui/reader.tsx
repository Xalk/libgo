import { useEffect, useRef } from "react";
import A4Sheet from "@/pages/reader/ui/a4-sheet";

interface ReaderProps {
  chapters: { title: string; pages: string[] }[];
  currentChapter: number;
  setCurrentChapter: (index: number) => void;
}

function Reader({ chapters, currentChapter, setCurrentChapter }: ReaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (
        container &&
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 100
      ) {
        if (currentChapter < chapters.length - 1) {
          setCurrentChapter(currentChapter + 1);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [currentChapter, chapters.length, setCurrentChapter]);

  return (
    <div
      className="pt-16"
      ref={containerRef}
      style={{ height: "100%", overflowY: "auto" }}
    >
      {chapters.slice(0, currentChapter + 1).map((chapter, chapterIndex) => (
        <div className="mb-12" key={chapterIndex}>
          {chapter.pages.map((page, pageIndex) => (
              <A4Sheet content={page} title={chapter.title} key={pageIndex}/>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Reader;
