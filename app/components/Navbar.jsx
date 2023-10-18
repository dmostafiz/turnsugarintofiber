import {
  Flex,
  HStack,
  Stack,
  Text,
  Container,
  Img,
  Link,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HOME } from "../constant";
import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      bg="white"
      color="black"
      boxShadow="xl"
      pos="sticky"
      zIndex="100"
      top="0"
    >
      <Container maxW="1135px" px="0">
        <HStack
          p="5"
          h={{
            md: "88px",
          }}
          justify={{ md: "space-between" }}
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <Flex maxW="275px" maxH="20px">
            <Img src={HOME.NAVIGATION.LOGO} alt="Logo" />
          </Flex>
          <IconButton
            bg="light_gray"
            mt="2"
            onClick={onToggle}
            w="8"
            h="8"
            borderRadius="md"
            py="4"
            display={{
              base: "flex",
              md: "none",
            }}
          >
            <Icon as={!isOpen ? FaBars : AiOutlineClose} boxSize="5" />
          </IconButton>
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {HOME.NAVIGATION.LINKS.map((link, index) => (
              <Link color="gray" fontWeight="semibold" href={link.LINK}>
                {link.TITLE}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Stack
          display={{
            base: isOpen ? "flex" : "none",
            md: "none",
          }}
          p="4"
        >
          {HOME.NAVIGATION.LINKS.map((link, index) => (
            <Link color="gray" fontWeight="semibold" href={link.LINK}>
              {link.TITLE}
            </Link>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

export default Navbar;
