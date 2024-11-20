// pages/quiz/selesai.tsx
import { useRouter } from "next/router";
import GridPattern from "~/components/ui/grid-pattern";
import { quiz } from "~/features/detailQuiz/pages/index";
import { BiSolidStar } from "react-icons/bi";
import { Button } from "~/components/ui/Button";

const QuizResult = () => {
  const router = useRouter();
  const { score } = router.query; // mendapatkan skor dari query parameter

  return (
    <main className="container mx-auto flex min-h-screen max-w-md items-center justify-center p-4">
      <GridPattern className="-z-10" width={100} height={100} opacity={0.6} />
      <div className="flex flex-col items-center space-y-9 text-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-widest">
            TERIMAKASIH TELAH BERPATISIPASI DALAM QUIZ INI
          </h1>
          <div className="my-12 flex justify-center">
            <BiSolidStar
              className={
                score === "1" ||
                score === "2" ||
                score === "3" ||
                score === "4" ||
                score === "5"
                  ? "mt-10 text-9xl text-yellow-300"
                  : "mt-10 border text-9xl text-yellow-50"
              }
            />
            <BiSolidStar
              className={
                score === "5"
                  ? "text-9xl text-yellow-300"
                  : "text-9xl text-yellow-50"
              }
            />
            <BiSolidStar
              className={
                score === "3" || score === "4" || score === "5"
                  ? "mt-10 text-9xl text-yellow-300"
                  : "mt-10 text-9xl text-yellow-50"
              }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5">
            <h1 className="text-center text-3xl">
              Anda Berhasil Menjawab {score} Dari {quiz.length} Pertanyaan
            </h1>
          </div>
          <Button onClick={() => router.push("/")} variant={"neutral"}>
            Home
          </Button>
        </div>
      </div>
    </main>
  );
};

export default QuizResult;
