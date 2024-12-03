// pages/quiz/selesai.tsx
import { useRouter } from "next/router";
import GridPattern from "~/components/ui/grid-pattern";
import { quiz } from "~/features/detailQuiz/pages/index";
import { BiSolidStar } from "react-icons/bi";
import { Button } from "~/components/ui/Button";
import Head from "next/head";

const QuizResult = () => {
  const router = useRouter();
  const { score } = router.query; // mendapatkan skor dari query parameter

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <title>Quiz Scores</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/kalkuluslogo.ico" />
      </Head>
      <main className="container relative mx-auto flex min-h-screen items-center justify-center px-10">
        <GridPattern className="-z-10" width={100} height={100} opacity={0.6} />
        <div className="flex flex-col items-center space-y-9 text-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold tracking-widest">
              TERIMAKASIH TELAH BERPATISIPASI DALAM QUIZ INI
            </h1>
            <div className="my-12 flex justify-center">
              <BiSolidStar
                className={
                  score === "1" ||
                  score === "2" ||
                  score === "3" ||
                  score === "4" ||
                  score === "5" ||
                  score === "6" ||
                  score === "7" ||
                  score === "8" ||
                  score === "9" ||
                  score === "10"
                    ? "mt-10 text-8xl text-yellow-300 lg:text-9xl"
                    : "mt-10 text-8xl text-yellow-50 lg:text-9xl"
                }
              />
              <BiSolidStar
                className={
                  score === "10"
                    ? "text-8xl text-yellow-300 lg:text-9xl"
                    : "text-8xl text-yellow-50 lg:text-9xl"
                }
              />
              <BiSolidStar
                className={
                  score === "6" ||
                  score === "7" ||
                  score === "8" ||
                  score === "9" ||
                  score === "10"
                    ? "mt-10 text-8xl text-yellow-300 lg:text-9xl"
                    : "mt-10 text-8xl text-yellow-50 lg:text-9xl"
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
    </>
  );
};

export default QuizResult;
