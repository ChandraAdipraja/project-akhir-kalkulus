import { GeistSans } from "geist/font/sans";
import { Montserrat } from "@next/font/google";
import { type AppType } from "next/app";

import "~/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
