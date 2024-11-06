export const TitleSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="my-5 text-center text-2xl font-bold uppercase text-text dark:text-darkText lg:hidden">
      {children}
    </h1>
  );
};
