import { Providers } from "./Providers";
import "./globals.css";
import { Raleway } from "next/font/google";

export const metadata = {
  title: "Medical App",
  description: "Medical App",
};

const raleway = Raleway({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
