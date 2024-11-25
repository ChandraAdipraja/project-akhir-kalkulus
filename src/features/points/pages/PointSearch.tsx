import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/Accordion";
import { TitleSection } from "~/components/ui/TitleSection";
import { pointSearch, Props } from ".";

export const PointSearch = () => {
  return (
    <div className="flex flex-col justify-center gap-4 border-b-4 border-black bg-bg px-4">
      <TitleSection>Rumus Cari Titik Potong</TitleSection>
      <h1 className="my-5 hidden text-center text-2xl font-bold uppercase text-text dark:text-darkText lg:block">
        Rumus Cari Titik Potong
      </h1>
      <div className="flex flex-col gap-y-3 lg:flex lg:flex-row lg:justify-center lg:gap-x-10">
        {pointSearch.map((pointSearch: Props) => (
          <div key={pointSearch.id}>
            <Accordion
              className="w-full lg:w-[unset]"
              type="single"
              collapsible
            >
              <AccordionItem
                className="mb-7 max-w-full lg:w-[500px]"
                value="item-1"
              >
                <AccordionTrigger>{pointSearch.question}</AccordionTrigger>
                <AccordionContent>
                  <div
                    dangerouslySetInnerHTML={{ __html: pointSearch.answer }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};
