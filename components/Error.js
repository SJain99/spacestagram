import { Flex, Text } from "@chakra-ui/react"
import Header from "./Header"

const Error = () => {
    return (
        <Flex flexDirection="column">
            <Header />
            <Flex maxWidth="1000px" mx="auto" mt="40vh" px={2}>
                <Text fontWeight="bold" textAlign="center" fontSize="4xl" pb={4}>Aw shucks! Looks like something went wrong trying to complete this request 😞... Please come back at a later time to see if your request will go through then! 😊</Text>
            </Flex>
        </Flex>
    )
}

export default Error