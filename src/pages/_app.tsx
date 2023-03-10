
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerprovider } from "@/contexts/SidebarDrawerContext";
import { makeServer } from "@/services/mirage";
import {QueryClientProvider} from 'react-query'
import { QueryClient } from "react-query";


if (process.env.NODE_ENV == 'development') {
    makeServer()
}

const queryClient = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
        <ChakraProvider  theme={theme} >
            <SidebarDrawerprovider>
                <Component {...pageProps} />
            </SidebarDrawerprovider>
        </ChakraProvider>
        </QueryClientProvider>
    )
}

export default MyApp