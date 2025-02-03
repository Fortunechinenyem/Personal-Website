import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fortune",
  description: "The Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Fortune Chinenyem-Aribido</title>
        <meta
          name="description"
          content="Fortune is a Software Developer, Tutor, Coach"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
