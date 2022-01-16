import { 
    Flex, 
    useColorMode, 
    Text, 
    Avatar, 
    IconButton, 
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useToast,
    Input,
    InputGroup,
    InputRightElement,
    Button
} from "@chakra-ui/react"
import { SiNasa } from "react-icons/si"
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {FiSend } from "react-icons/fi"
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const ImageCard = ({image}) => {
    const { colorMode } = useColorMode();
    const [ liked, setLiked ] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    return (
        <Flex borderRadius="lg" boxShadow="xl" backgroundColor={colorMode === "light" ? "white" : "gray.800"}>
            <Flex flexDirection="column">
                <Flex px={2} pt={3} pb={2}>
                    <Avatar mr={2} bg="white" border="1px solid grey" icon={<SiNasa fontSize="2em" color="red" />} />
                    <Flex flexDirection="column">
                        <Text fontWeight="bold">NASA</Text>
                        <Text>{image.date}</Text>
                    </Flex>
                </Flex>
                <Text pb={2} pl={3} fontWeight="bold">{image.title}</Text>
                <Image src={image.thumbnail_url ? image.thumbnail_url : image.url} width={600} height={600} alt={image.title} />
                <Flex pl={3} py={1}>
                    <motion.div whileHover={{scale: 1.1}}>
                        <IconButton aria-label="Like Image" variant="unstyled" icon={localStorage.getItem(image.title) ? <FaHeart fontSize="28px" color="#E31C79" onClick={() => (localStorage.removeItem(image.title), setLiked(false))} /> : <FaRegHeart fontSize="28px" onClick={() => (localStorage.setItem(image.title, image.date), setLiked(true))} />} />
                    </motion.div>
                    <motion.div whileHover={{scale: 1.1}}>
                        <IconButton aria-label="Share Image" variant="unstyled" icon={<FiSend fontSize="28px" onClick={onOpen} />} />
                    </motion.div>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent backgroundColor={colorMode === "light" ? "white" : "gray.800"} borderRadius="lg">
                            <ModalHeader fontSize="3xl" px={5} pb={0}>Share Image</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text pb={4}>Use the link below if you wish to share this post 🚀</Text>
                                <InputGroup pb={2}>
                                    <Input id="modal-link" fontSize="sm" fontWeight="bold" px={2} value={window.location.href.includes(image.date) ? window.location.href : window.location.href + "image/" + image.date} isReadOnly />
                                    <InputRightElement width='4.5rem'>
                                        <motion.div whileHover={{scale: 1.1}}>
                                            <Button zIndex={1} h='1.75rem' size='sm' onClick={() => {
                                                const copyText = document.getElementById("modal-link");
                                                copyText.select();
                                                navigator.clipboard.writeText(copyText.value);
                                                toast({
                                                    title: "Link copied to clipboard!",
                                                    status: "success",
                                                    isClosable: true
                                                })
                                            }}>Copy</Button>
                                        </motion.div>
                                    </InputRightElement>
                                </InputGroup>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Flex>
                <Text px={3} pb={3}>{image.explanation}</Text>
            </Flex>
        </Flex>
    )
}

export default ImageCard