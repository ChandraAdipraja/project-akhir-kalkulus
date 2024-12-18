// pages/quiz/[id]/index.tsx
import { useRouter } from "next/router";
import { quiz } from "~/features/detailQuiz/pages/index";
import QuizQuestion from "~/features/detailQuiz/pages/DetailQuiz";
import GridPattern from "~/components/ui/grid-pattern";
import { useEffect, useState } from "react";
import { Progress } from "~/components/ui/Progress";
import Head from "next/head";
import Swal from "sweetalert2";

const DetailQuizPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string | null>
  >({});

  const [timeLeft, setTimeLeft] = useState(300);

  const calculateScore = () => {
    return quiz.reduce((score, question) => {
      const selectedAnswer = selectedAnswers[question.id];
      return selectedAnswer === question.answer ? score + 1 : score;
    }, 0);
  };

  const timeOut = async () => {
    localStorage.removeItem("quizTimeLeft");

    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Waktu Habis!",
    });

    void router.push({
      pathname: "/quiz/score",
      query: { score: calculateScore() },
    });
  };

  useEffect(() => {
    const audio = new Audio("/kalkulus-sound.mp3");

    void audio.play();
    audio.loop = true;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const storedTime = localStorage.getItem("quizTimeLeft");
    if (storedTime) {
      setTimeLeft(parseInt(storedTime, 10));
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        localStorage.setItem("quizTimeLeft", newTime.toString()); // Simpan waktu sisa di localStorage
        if (newTime <= 0) {
          clearInterval(timer);
          void timeOut(); // Timer habis
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const questionData = quiz.find((question) => question.id === id);

  if (!questionData) {
    return <div>Question not found!</div>;
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleNext = async () => {
    const nextId = Number(id) + 1;
    if (nextId <= quiz.length) {
      await router.push(`/quiz/${nextId}`);
    } else {
      const result = await Swal.fire({
        title: "Apakah Kamu Yakin Ingin Menyelesaikan Quiz ?",
        text: "Anda tidak bisa mengubah jawaban setelah menyelesaikan quiz ini !",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Selesaikan Quiz !",
      });
      if (result.isConfirmed) {
        await Swal.fire({
          title: "Terima Kasih",
          text: "Anda Telah Menyelesaikan Quiz Ini !",
          icon: "success",
        });

        localStorage.removeItem("quizTimeLeft");

        void router.push({
          pathname: "/quiz/score",
          query: { score: calculateScore() },
        });
      }
    }
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = async () => {
    const prevId = Number(id) - 1;
    if (prevId >= 1) {
      await router.push(`/quiz/${prevId}`);
    } else {
      // Mungkin tampilkan pesan atau kembalikan ke halaman pertama
      await router.push(`/quiz/1`);
    }
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [id as string]: answer,
    }));
  };
  if (!id || Array.isArray(id)) {
    return <div>Loading...</div>; // Tetap tampilkan hooks sebelum render
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <title>Quiz Question</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/kalkuluslogo.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-grow p-4 dark:bg-darkBg dark:text-white">
        <GridPattern className="-z-10" width={100} height={100} opacity={0.6} />
        <div className="mx-auto flex min-h-screen flex-col items-center justify-center">
          <div className="my-5 flex items-center justify-between gap-x-10">
            <div>
              <h1 className="text-xl tracking-widest lg:text-2xl">
                SEMANGAT YA
              </h1>
            </div>
            <div className="rounded-lg border border-black p-2">
              <h1 className="text-xl tracking-widest lg:text-2xl">
                Waktu : {formatTime(timeLeft)}
              </h1>
            </div>
          </div>
          <QuizQuestion
            questionData={questionData}
            onNext={handleNext}
            onBack={handleBack}
            selectedOption={selectedAnswers[String(id)] ?? null}
            onSelectOption={handleSelectAnswer}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        </div>
      </main>
    </>
  );
};

export default DetailQuizPage;
