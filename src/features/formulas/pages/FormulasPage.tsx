import {
  CardContent,
  Card,
  CardHeader,
  CardDescription,
} from "~/components/ui/CardProfile";
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
      <div className="mx-auto my-10 flex flex-col justify-between gap-10 lg:w-1/2 lg:flex-row">
        <Card>
          <CardHeader className="pt-4 text-center font-semibold">
            Contoh Soal
          </CardHeader>
          <CardContent className="text-justify font-semibold">
            Terdapat suatu fungsi linear adalah f(x) = 6x + b. Tentukanlah
            bentuk fungsi tersebut jika diketahui f(4) = 8.
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pt-4 text-center font-semibold">
            Jawaban
          </CardHeader>
          <CardContent className="text-justify font-semibold">
            <pre>
              {`f(x) = 6x + b
f(4) = 6 x 4 + b = 8
   8 = 6 x 4 + b
   b = 8 – 24
   b = -16
f(x) = 4x – 16`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
