import { Flex, Link, IconButton, useColorMode, Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaRegHeart } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();
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
                    aria-label="icon"
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