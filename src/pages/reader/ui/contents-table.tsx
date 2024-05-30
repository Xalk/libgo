

interface TableOfContentsProps {
  chapters: { title: string; pages: string[] }[];
  currentChapter: number;
  setCurrentChapter: (index: number) => void;
}

function TableOfContents({ chapters, currentChapter, setCurrentChapter }: TableOfContentsProps) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800">
      <h2>Table of Contents</h2>
      {chapters.map((chapter, index) => (
        <div
          className="py-2 cursor-pointer hover:underline"
          key={index}
          onClick={() => setCurrentChapter(index)}
          style={{ fontWeight: currentChapter === index ? 'bold' : 'normal' }}
        >
          {chapter.title}
        </div>
      ))}
    </div>
  );
}

export default TableOfContents;
