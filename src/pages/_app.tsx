import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayoutComp from "../../components/LayoutComp";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComp>
      <Component {...pageProps} />
    </LayoutComp>
  );
}
