import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react"
import AuthForm from "../../src/compenents/AuthForm/AuthForm"


const AuthPage = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={40}>
      <Container maxW={'container.md'} padding={0} >
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          {/* left side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone img" />
          </Box>
          {/* right hand side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={'center'}>Get the app</Box>
            <Flex gap={5} justifyContent={'center'}>
              <Image src="/playstore.png" h={10} alt="Playstore logo" />
              <Image src="/microsoft.png" h={10} alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  )
}

export default AuthPage