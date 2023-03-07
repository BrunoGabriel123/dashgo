import { Header } from "@/components/Header/Index"; 
import { SideBar } from "@/components/Sidebar/Index";
import { Box, Flex, Heading ,Divider, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react";
import Link from "next/link";
import {Input} from '../../components/Form/input'


import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
    email :string;
    password: string;
    name:string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    email: yup.string().required('Email obirgatório').email('E-mail inválido'),
    password: yup.string().required('Senha Obrigatória').min(6, 'No minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        '', yup.ref('password')
    ], 'As Senhas precisam ser iguais!')
})


export default function UserCreate() {
    const {register, handleSubmit, formState, setError} = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData>= async(values) => {
        await new Promise(resolve => setTimeout(resolve, 2008));

        console.log(values)
    }
     return (
        <Box>
            <Header />
            <Flex w="100%" mt="6" maxWidth={1400} mx="auto" px={["6", "8"]}>
                <SideBar/>
                <Box as="form"flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} >
                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input  isRequired label="Nome Completo" {...register('Nome')}/>
                            <Input  isRequired label="Email" type="email" {...register('Email')}/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input  isRequired  {...register('Senha')} type="password" label="Senha"/>
                            <Input  isRequired {...register('Confirmação da Senha')} type="password" label="Confirmação da Senha"/>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                        <Link href="/users" passHref>
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                            <Button colorScheme="pink">Salvar</Button>
                        
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
                
        </Box>
    )
}