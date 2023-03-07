import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true} : ProfileProps) {
    return(
        <Flex align="center">
        { showProfileData && (
        <Box>
            <Text>Diego Fernandes</Text>
            <Text color="gray.300" fontSize="small">diegp.schelli.f@gmail.com</Text>
        </Box>
        )
            
        }


        <Avatar size="md" name="Bruno Gabriel" src="https://github.com/diego3g.png"/>
    </Flex>
    )
}