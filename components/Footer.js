import { Flex, Text, Link } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex 
            justify="center"
            alignItems="center"
            pb={4}
            px={2}
            width="100%"
          >
              <Text textAlign="center">Website by {""}<Link isExternal fontWeight="bold" textDecoration="underline" href="https://www.epta.ca/profiles/saransh-jain">Saransh Jain</Link>, powered by {""}<Link isExternal fontWeight="bold" textDecoration="underline" href="https://api.nasa.gov/">NASA APIs</Link> 🚀</Text>
          </Flex>
    )
}

export default Footer;