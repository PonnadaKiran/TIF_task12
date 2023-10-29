import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const MyContext = createContext<{
  state: typeof Number;
  setState: React.Dispatch<React.SetStateAction<typeof Number>>;
} | null>(null);


function MyApp({ Component, pageProps }: AppProps) {
  const [pageState, setPageState] = useState<number>(0);
  const [valState, setValState] = useState<object>("");
  const [pState, setPState] = useState<number>(0);

  return (
    <ChakraProvider>
      <MyContext.Provider value={{ pageState, setPageState, valState, setValState, pState }}>
        <Component {...pageProps} />
      </MyContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
