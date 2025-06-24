import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";



export const metadata = {
  title: "Fabrizones",
  description: "Experience the best in custom drapes, upholstery, and home automation—where every detail enhances your home with elegance and every design creates a seamless blend of comfort and style.",
  openGraph: {
    images: [
      {
        url: "/assets/images/graph-img.png", // Update the path to your image
        width: 1200,
        height: 630,
        alt: "Fabrizones - Custom Drapes, Upholstery, and Home Automation",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Contact/>
      </body>
    </html>
  );
}