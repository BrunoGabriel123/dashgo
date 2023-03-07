import { useSidebarDrawer } from "@/contexts/SidebarDrawerContext";
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { Search } from "./Search";


export function Header() {
    const {onOpen} = useSidebarDrawer()


    const isWideProfile = useBreakpointValue({
        base: false,
        lg: true,
    })
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,

    })

    return (
        <Flex
          w="100%"
          as="header"
          maxWidth={1400}
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align="center">
            {!isWideVersion && (
                <IconButton 
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />} 
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >
                    
                </IconButton>
            )}
            <Logo/>

            { isWideProfile && <Search/>}
           <Flex
            align="center"
            ml="auto">
                <Notifications/>
               <Profile showProfileData={isWideProfile}/>
           </Flex>
        </Flex>
    )
}