import { GeistSans } from "geist/font/sans";
import { Montserrat } from "@next/font/google";
import { type AppType } from "next/app";

import "~/styles/globals.css";
import { useEffect, useState } from "react";
import SplashScreen from "~/components/ui/SplashScreen";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hilangkan splash screen setelah 3 detik
    }, 3000);
    return () => clearTimeout(timer); // Bersihkan timer
  }, []);
  return (
    <div className={montserrat.className}>
      {isLoading ? <SplashScreen /> : <Component {...pageProps} />}
    </div>
  );
};

export default MyApp;
