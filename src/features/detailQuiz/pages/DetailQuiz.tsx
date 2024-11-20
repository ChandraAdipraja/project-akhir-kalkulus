// src/components/QuizQuestion.tsx
import React from "react";
import { PropsQuestion } from "./index";
import { Button } from "~/components/ui/Button";
import { useRouter } from "next/router";
import { Progress } from "~/components/ui/Progress";

interface QuizQuestionProps {
  questionData: PropsQuestion;
  onNext: () => void;
  onBack: () => void;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  currentStep: number;
  totalSteps: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  questionData,
  onNext,
  onBack,
  selectedOption,
  onSelectOption,
  currentStep,
  totalSteps,
}) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className="borde flex min-w-[20rem] flex-col items-center justify-center gap-y-8 lg:w-[60rem]">
      <Progress value={progress} />
      <div className="flex items-center justify-center">
        <h2 className="mt-5 text-center text-3xl">{questionData.question}</h2>
      </div>
      <div className="flex w-[20rem] flex-col items-center justify-center border lg:w-1/2">
        <ul className="flex w-full flex-col gap-4">
          {["a", "b", "c", "d"].map((option) => (
            <Button
              key={option}
              variant={"neutral"}
              className={
                selectedOption === option
                  ? "lg:text-md bg-red-500 text-xs"
                  : "lg:text-md text-xs"
              }
              onClick={() => onSelectOption(option)}
            >
              {questionData[option as keyof PropsQuestion]}
            </Button>
          ))}
        </ul>
      </div>
      <div className="flex w-full items-center justify-center gap-x-10">
        {currentPath !== "/quiz/1" && (
          <Button onClick={onBack} variant={"neutral"} className="w-full">
            Back
          </Button>
        )}
        <Button onClick={onNext} variant={"neutral"} className="w-full">
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestion;
