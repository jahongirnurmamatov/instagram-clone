import { Box, Flex, Image, Text, VStack, useStatStyles } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
    const [isLogin, setIsLogin]=useState(true);
    
    
    return (
        <>
            <Box border={'1px solid gray'} borderRadius={4} padding={5}>
                <VStack spacing={4} >
                    <Image src="logo.png" h={24} cursor={'pointer'} alt="Instagram" />
                    
                    {isLogin? <Login/> : <Signup/>}

                   
                    <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
                        <Box flex={2} height={'1px'} bg={'gray.400'} />
                        <Text mx={1} color={'white'}>OR</Text>
                        <Box flex={2} height={'1px'} bg={'gray.400'} />
                    </Flex>
                    <GoogleAuth prefix={isLogin? 'Login' : "Sign up"}/>

                </VStack>
            </Box>
            <Box border={'1px solid gray'} borderRadius={4} padding={5}>  
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Box fontSize={14} mx={2}>
                        {isLogin ? "Don't have an account?":" Already have an account?"}
                    </Box>
                    <Box onClick={()=>setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
                        {isLogin ? "Sign Up":"Log in"}
                    </Box>

                </Flex>
            </Box>
        </>
    )
}

export default AuthForm