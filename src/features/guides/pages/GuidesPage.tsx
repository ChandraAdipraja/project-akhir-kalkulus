import Image from "next/image";
import Link from "next/link";
import { FaBook, FaDownload } from "react-icons/fa6";
import { IoDocumentSharp } from "react-icons/io5";
import { Button } from "~/components/ui/Button";
import { Card, CardContent } from "~/components/ui/CardProfile";
import { TitleSection } from "~/components/ui/TitleSection";

export const GuidesPage = () => {
  return (
    <div className="flex flex-col justify-center border-y-4 border-black bg-bg px-4">
      <TitleSection>Manual Book & Cara Membuat Website</TitleSection>
      <h1 className="my-5 hidden text-center text-2xl font-bold uppercase text-text dark:text-darkText lg:block">
        Manual Book & Cara Membuat Website
      </h1>
      <div className="flex flex-col justify-center gap-y-8 py-10 lg:flex-row lg:justify-center lg:gap-x-40 lg:px-20">
        <div className="flex w-full flex-col items-center rounded-lg border-b-4 border-r-4 border-black bg-white p-4 outline outline-2 lg:py-10">
          <div className="pb-5">
            <Image
              src="/images/guide.png"
              alt="cover.png"
              width={200}
              height={200}
            />
          </div>
          <div className="pb-5">
            <h1 className="text-center text-2xl font-bold uppercase tracking-widest">
              Manual Book
            </h1>
          </div>
          <div className="flex w-full justify-center">
            {/* download pdf */}
            <Link href="/Assets/manualBook.pdf" download={true}>
              <Button variant={"neutral"}>
                Download
                <FaDownload className="ml-2 text-xl" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center rounded-lg border-b-4 border-r-4 border-black bg-white p-4 outline outline-2 lg:py-10">
          <div className="pb-5">
            <Image
              src="/images/zip.png"
              alt="cover.png"
              width={200}
              height={200}
            />
          </div>
          <div className="pb-5">
            <h1 className="text-center text-2xl font-bold uppercase tracking-widest">
              Cara Membuat Website
            </h1>
          </div>
          <div className="flex w-full justify-center">
            {/* download pdf */}
            <Link href="/Assets/manualBook.pdf" download={true}>
              <Button variant={"neutral"}>
                Download
                <FaDownload className="ml-2 text-xl" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
