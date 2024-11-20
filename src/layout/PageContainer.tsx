import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/Button";
import DarkModeToggle from "~/components/ui/DarkModeToogle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/Dialog";
import GridPattern from "~/components/ui/grid-pattern";
import { cn } from "~/lib/utils";

// Layout PageContainer component
const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col">
      {/* Navbar */}
      <header className="border-b-4 border-black bg-white p-4 text-white dark:bg-darkBg">
        <nav className="container mx-auto flex items-center justify-between">
          {/* Website Title */}
          <h1 className="text-lg font-bold text-secondaryBlack dark:text-white">
            Linear<span className="text-blue-500">KU</span>
          </h1>

          {/* Dark Mode Toggle Button */}
          <Link href={"/quiz"}>
            <Button variant={"neutral"}>Tantang Quiz</Button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container relative mx-auto flex-grow dark:bg-darkBg dark:text-white">
        <GridPattern className="-z-10" width={100} height={100} opacity={0.6} />
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white-800 border-t-4 border-black p-4 text-center text-secondaryBlack dark:border-darkBorder dark:bg-darkBg dark:text-white">
        © 2024 My Website - Created by Blablabla
      </footer>
    </div>
  );
};

export default PageContainer;
