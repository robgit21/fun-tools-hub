import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayoutComp from "../../components/LayoutComp";

import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComp>
      <Component {...pageProps} />
    </LayoutComp>
  );
}
