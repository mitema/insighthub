import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
//import { Providers } from '@/Store/Provider'
//import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";

const poppin = Poppins({
  weight: ["100", "400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        {/* <Providers> */}
        <Providers>{children}</Providers>
        {/* </Providers> */}
      </body>
    </html>
  );
}
