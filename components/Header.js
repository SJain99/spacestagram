import { Flex, Link, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex 
            justifyContent="space-between" 
            alignItems="center"
            backgroundColor={colorMode === "light" ? "white" : "gray.800"}
            width="100%"
            position="fixed"
            zIndex={1}
            opacity="90%"
          >
              <Link href="/" fontSize="3xl" fontWeight="bold" fontFamily="Lobster" p={3}>
              Spacestagram
              </Link>
              <motion.div whileHover={{scale: 1.1}}>
                <IconButton
                    aria-label="Toggle Dark Mode"
                    icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    fontSize="28px"
                    variant="subtle"
                    onClick={toggleColorMode}
                    mr={2}
                />
            </motion.div>
          </Flex>
    )
}

export default Header;