import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { SpeedInsights } from "@vercel/speed-insights/next";
import LayoutComp from "../../components/shared/LayoutComp";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComp>
      <SpeedInsights />
      <Component {...pageProps} />
    </LayoutComp>
  );
}
