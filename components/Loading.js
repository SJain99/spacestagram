import { Skeleton, SkeletonCircle, SkeletonText, Flex, Box, useColorMode } from "@chakra-ui/react"
import Header from "./Header"
const Loading = () => {
    const { colorMode } = useColorMode();
    return (
        <Box>
            <Flex flexDirection="column" maxWidth="600px" width="100%" justify="center" mx="auto" pt={20} pb={4}>
                <Box pb={2} px={2}>
                    <Flex borderRadius="lg" boxShadow="xl" backgroundColor={colorMode === "light" ? "white" : "gray.800"}>
                        <Flex flexDirection="column" maxWidth="600px" width="100%">
                            <Flex px={2} pt={3} pb={3}>
                                <SkeletonCircle size="12" />
                                <SkeletonText noOfLines={2} spacing={4} width="100px" ml={2} mt={2} />
                            </Flex>
                            <Flex flexDirection="column" maxWidth="600px" width="100%">
                                <SkeletonText noOfLines={1} mb={3} ml={3} width="50%" />
                                <Skeleton height="600px" width="100%" pb={4} />
                                <Skeleton ml={3} my={3} width="15%" height="30px" />
                                <SkeletonText noOfLines={3} my={3} ml={3} spacing={4} width="95%" />
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default Loading