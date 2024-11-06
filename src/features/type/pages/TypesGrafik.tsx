import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/Card";
import { typeGrafik, typeProps } from ".";
import Link from "next/link";
import { TitleSection } from "~/components/ui/TitleSection";

export const TypesGrafikPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <TitleSection>Macam Macam Grafik Fungsi</TitleSection>
      {typeGrafik.map((typeGrafik: typeProps) => (
        <Link key={typeGrafik.id} href={`/type/${typeGrafik.title}`}>
          <div key={typeGrafik.id}>
            <div className="mt-4 flex flex-col items-center justify-center">
              <Card
                className={`w-[350px] ${
                  typeGrafik.id > 3
                    ? "bg-pink-400" // Background khusus untuk id > 2
                    : "bg-white" // Background default
                }`}
              >
                <CardHeader>
                  <CardTitle>{typeGrafik.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {typeGrafik.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
