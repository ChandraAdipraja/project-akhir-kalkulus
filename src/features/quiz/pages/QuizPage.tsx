import Link from "next/link";
import { useRouter } from "next/router";
import { title } from "process";
import { text } from "stream/consumers";
import Swal from "sweetalert2";
import { Button } from "~/components/ui/Button";

export const QuizPage = () => {
  const router = useRouter();
  const startQuiz = async () => {
    const result = await Swal.fire({
      title: "Mulai Quiz ?",
      text: "Waktu : 5 Menit",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Batal",
      confirmButtonText: "Mulai",
    });

    if (result.isConfirmed) {
      await Swal.fire({
        title: "Quiz Dimulai",
        text: "Selamat Mengerjakan Quiz",
      });

      void router.push({
        pathname: "/quiz/1",
      });
    }
  };

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
          <Button className="mt-5" variant={"neutral"} onClick={startQuiz}>
            Mulai Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};
