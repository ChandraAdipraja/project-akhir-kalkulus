// pages/quiz/[id]/index.tsx
import { useRouter } from "next/router";
import { quiz } from "~/features/detailQuiz/pages/index";
import QuizQuestion from "~/features/detailQuiz/pages/DetailQuiz";
import GridPattern from "~/components/ui/grid-pattern";
import { useState } from "react";
import { Progress } from "~/components/ui/Progress";

const DetailQuizPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string | null>
  >({});

  if (!id || Array.isArray(id)) {
    return <div>Loading...</div>;
  }

  const questionData = quiz.find((question) => question.id === id);

  if (!questionData) {
    return <div>Question not found!</div>;
  }

  const calculateScore = () => {
    return quiz.reduce((score, question) => {
      const selectedAnswer = selectedAnswers[question.id];
      return selectedAnswer === question.answer ? score + 1 : score;
    }, 0);
  };
  const handleNext = async () => {
    const nextId = Number(id) + 1;
    if (nextId <= quiz.length) {
      await router.push(`/quiz/${nextId}`);
    } else {
      await router.push({
        pathname: "/quiz/score",
        query: { score: calculateScore() }, // menambahkan skor pada query
      });
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
      [id]: answer,
    }));
  };

  return (
    <main className="container mx-auto flex min-h-screen flex-grow p-4 dark:bg-darkBg dark:text-white">
      <GridPattern className="-z-10" width={100} height={100} opacity={0.6} />
      <div className="mx-auto flex min-h-screen flex-col items-center justify-center">
        <div className="my-5 flex flex-col justify-center">
          <h1 className="text-3xl tracking-widest">Selamat Mengerjakan</h1>
        </div>
        <QuizQuestion
          questionData={questionData}
          onNext={handleNext}
          onBack={handleBack}
          selectedOption={selectedAnswers[id] ?? null}
          onSelectOption={handleSelectAnswer}
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      </div>
    </main>
  );
};

export default DetailQuizPage;
