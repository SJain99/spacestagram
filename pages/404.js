import { Heading, Flex, Text, Link, Box } from "@chakra-ui/react"
import Header from "../components/Header"
import Head from "next/head"
import Footer from "../components/Footer"

const NotFound = () => {
    return (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
            <Head>
                <title>404 | Spacestagram</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <Flex maxWidth="1000px" justifyContent="center" alignItems="center" mx="auto" mt="40vh" px={4} flexDirection="column">
                <Heading mb={4} textAlign="center">Oops! That page could not be found.</Heading>
                <Text textAlign="center">Somehow, you stumbled upon a page that has no content on it! Let&apos;s correct that, shall we? {""}<Link href="/" fontWeight="bold">Go back to homepage</Link></Text>
            </Flex>
            <Box mt="45vh">
                <Footer />
            </Box>
        </Flex>
    )
}

export default NotFound