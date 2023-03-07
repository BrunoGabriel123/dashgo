import { Input } from '@/components/Form/input'
import { Flex,  Button, Stack, InputProps,} from '@chakra-ui/react'
import {SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

interface SignInFormData {
    email: string;
    password: string;
}

const SignInFormSchema = yup.object().shape({
    email: yup.string().required().email(),
    senha: yup.string().required(),
})

export default function Home()  {
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(SignInFormSchema)
    })


    const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
        console.log(values)
    }

    return (
        <Flex
          w="100vw"
          h="100vh"
          align="center"
          justify="center">
            <Flex
              as="form"
              width="100%"
              maxWidth={360}
              bg="gray.800"
              p="8"
              borderRadius={8}
              flexDir="column"
              >

            <Stack spacing="4">
                <Input type="email" isRequired label="E-mail" {...register('email')} />
                <Input type="password" isRequired label="Senha" {...register('password')} />            
            </Stack>


                
                <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
            </Flex>
        </Flex>
    )
}


