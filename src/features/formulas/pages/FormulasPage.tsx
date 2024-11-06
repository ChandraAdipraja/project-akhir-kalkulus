import { CardContent, Card } from "~/components/ui/CardProfile";
import { TitleSection } from "~/components/ui/TitleSection";

export const FormulaPages = () => {
  return (
    <div className="flex flex-col justify-center border-t-4 border-black bg-bg px-4">
      <TitleSection>Rumus Fungsi Linear</TitleSection>
      <h1 className="my-5 hidden text-center text-2xl font-bold uppercase text-text dark:text-darkText lg:block">
        Rumus Fungsi Linear
      </h1>
      <Card>
        <CardContent className="text-center text-xl font-semibold">
          Y = MX + C
        </CardContent>
      </Card>
    </div>
  );
};
