import Link from "next/link";
import { Button } from "~/components/ui/Button";

export const QuizPage = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center text-center align-middle">
        <div className="flex flex-col items-center">
          <h1 className="font-semibolds text-7xl uppercase tracking-widest">
            Quiz Page
          </h1>
        </div>
        <div className="mt-5 flex flex-col items-center">
          <p className="text-md">Sudah Siapkah Anda Untuk Mengerjakan Quiz??</p>
        </div>
        <div className="flex justify-between gap-x-5">
          <Link href={"/"}>
            <Button className="mt-5" variant={"default"}>
              Kembali
            </Button>
          </Link>
          <Link href={"/quiz/1"}>
            <Button className="mt-5" variant={"neutral"}>
              Mulai Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
