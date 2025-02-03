import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Fortune Chinenyem-Aribido</title>
        <meta
          name="description"
          content="Fortune is a Software Developer, Tutor, Coach"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
