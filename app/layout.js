import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-my-custom",
  subsets: ["latin"],
  weight: ['400','500','600','700']
})

export const metadata = {
  title: "AI Premium landing page",
  description: "Landing page for AI Premium software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` font-sans antialiased `}
      >
         <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
