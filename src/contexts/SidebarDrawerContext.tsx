
import { useDisclosure, UseDisclosureProps, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect} from "react";


interface SiderBarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDeawerContextData = UseDisclosureReturn

const SidebarDeawerContext = createContext({} as SidebarDeawerContextData) ;


export function SidebarDrawerprovider({children} : SiderBarDrawerProviderProps) {
    const disclosure = useDisclosure();
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath]
    )

    return(
        <SidebarDeawerContext.Provider value={disclosure}>
            {children}
        </SidebarDeawerContext.Provider>
    )
}


export const useSidebarDrawer = () => useContext(SidebarDeawerContext)