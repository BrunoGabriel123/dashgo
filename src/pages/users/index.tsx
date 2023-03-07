import { Header } from "@/components/Header/Index";
import { Pagination } from "@/components/Pagination";
import { SideBar } from "@/components/Sidebar/Index";
import { Box, Button, Checkbox, Flex, Heading , Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue} from "@chakra-ui/react";
import {useQuery} from 'react-query'
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";


export default function UserList() {

    const query = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()

        return data
    })
    
    console.log(query)
    const isWideVersion = useBreakpointValue({
        base: false, 
        lg: true,
    })

    
    return (
        <Box>
            <Header />
            <Flex w="100%" mt="6" maxWidth={1400} mx="auto" px="6">
                <SideBar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify={"space-between"} align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sn" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="26" cursor="pointer"/>}>
                                Criar novo
                            </Button>
                        </Link>

                    </Flex>
                    <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                        <Checkbox colorScheme="pink" />
                                    </Th>

                                    <Th>Usuário</Th>
                                    {isWideVersion &&<Th>Data de Cadastro</Th>}
                                    <Th width="8"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="pink"/>
                                    </Td>
                                    <Td> 
                                        <Box>
                                            <Text fontWeight="bold">Bruno Gabriel</Text>
                                            <Text fontSize="sm" color="gray.300">bg1821097@gmail.com</Text>
                                        </Box>
                                    </Td>
                                    {isWideVersion &&<Td>84 de Abril , 2023</Td>}
                        <Td>
                    
                        </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Pagination/>
                </Box>
            </Flex>
                
        </Box>
    )
}