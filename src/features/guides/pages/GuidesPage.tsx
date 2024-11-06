import Link from "next/link";
import { FaBook, FaDownload } from "react-icons/fa6";
import { IoDocumentSharp } from "react-icons/io5";
import { Button } from "~/components/ui/Button";
import { TitleSection } from "~/components/ui/TitleSection";

export const GuidesPage = () => {
  return (
    <div className="flex flex-col justify-center border-y-4 border-black bg-bg px-4">
      <TitleSection>Manual Book & Cara Membuat Website</TitleSection>
      <h1 className="my-5 hidden text-center text-2xl font-bold uppercase text-text dark:text-darkText lg:block">
        Manual Book & Cara Membuat Website
      </h1>
      <div className="flex justify-evenly py-10 lg:justify-center lg:gap-x-20">
        <div className="flex flex-col items-center justify-center gap-5">
          <FaBook className="text-black-500 text-6xl" />
          <div className="flex items-center justify-center gap-x-2">
            <h1 className="text-xl font-semibold">Guides</h1>
            <Link href={"/Assets/manualBook.pdf"} download={true}>
              <FaDownload className="text-xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <IoDocumentSharp className="text-black-500 text-6xl" />
          <div className="flex items-center justify-center gap-x-2">
            <h1 className="text-xl font-semibold">Tutorial</h1>
            <Link href="/Assets/manualBook.pdf" download={true}>
              <FaDownload className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
