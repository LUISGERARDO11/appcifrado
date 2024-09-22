// _app.tsx
import "@/styles/globals.css";
import { Providers } from "./providers";
import { AppProps } from "next/app";


function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;