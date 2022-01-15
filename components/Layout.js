import Header from "./Header";
import ImageCard from "./ImageCard"
import { Flex, Box } from "@chakra-ui/react";

const Layout = ({images}) => {
    return (
        <Box>
            <Header />
            <Flex flexDirection="column" maxWidth="600px" justify="center" mx="auto" pt={20} pb={4}>
            {images.map(image => (
                <Box key={image.title} pb={2} px={2}>
                    <ImageCard image={image} />
                </Box>
            ))}
            </Flex>
        </Box>
    )
}

export default Layout;