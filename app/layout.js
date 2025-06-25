import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";



export const metadata = {
  title: "Fabrizones",
  description:
    "Experience the best in custom drapes, upholstery, and home automation—where every detail enhances your home with elegance and every design creates a seamless blend of comfort and style.",
  openGraph: {
    title: "Fabrizones",
    description:
      "Experience the best in custom drapes, upholstery, and home automation—where every detail enhances your home with elegance and every design creates a seamless blend of comfort and style.",
    url: "https://fabrizones.vercel.app",
    siteName: "Fabrizones",
    images: [
      {
        url: "https://fabrizones.vercel.app/assets/images/graph-img.png",
        width: 1200,
        height: 630,
        alt: "Fabrizones - Custom Drapes, Upholstery, and Home Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Navbar/>
        {children}
        <Contact/>
      </body>
    </html>
  );
}