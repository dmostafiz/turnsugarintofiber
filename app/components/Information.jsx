import {
  Box,
  Container,
  HStack,
  Img,
  Stack,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { HOME } from "../constant";

export default function Information() {
  return (
    <Container maxW="1135px" my="20">
      <HStack
        justifyContent="space-between"
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Flex
          mt="8"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <Img
            w="full"
            maxW="550px"
            src={HOME.INFORMATION.FIGURE}
            alt="figure"
          />
        </Flex>
        <Flex
          mt="8"
          display={{
            base: "flex",
            md: "none",
          }}
          alignSelf="end"
          mr="-4"
        >
          <Img w="full" src={HOME.INFORMATION.INGREDIENTS} alt="figure" />
        </Flex>
        <Flex
          mt="8"
          display={{
            base: "flex",
            md: "none",
          }}
          alignSelf="start"
          ml="-4"
        >
          <Img w="full" src={HOME.INFORMATION.BENIFITS} alt="figure" />
        </Flex>
        <Stack
          flex="1"
          maxW="500px"
          mt={{
            md: "-4",
          }}
          align={{
            base: "center",
          }}
          textAlign={{
            base: "center",
            md: "start",
          }}
        >
          <Box>
            <Text
              fontSize={{
                base: "20px",
              }}
              fontWeight="semibold"
              borderBottom="1px solid"
              maxW="170px"
              lineHeight="1.1"
              mb="4"
              mx={{
                base: "auto",
                md: "0",
              }}
            >
              {HOME.INFORMATION.ITEMS[0].TITLE}
            </Text>
            <Text textStyle="body" fontWeight="medium" color="gray">
              {HOME.INFORMATION.ITEMS[0].TEXT}
            </Text>
          </Box>
          <Box mt="8">
            <Text textStyle="body" fontWeight="medium" color="gray">
              <Text
                fontSize="20px"
                textTransform="uppercase"
                fontWeight="semibold"
                borderBottom="1px solid"
                lineHeight="1.1"
                as="span"
                color="black"
              >
                {HOME.INFORMATION.ITEMS[1].TITLE}
              </Text>{" "}
              {HOME.INFORMATION.ITEMS[1].TEXT}
            </Text>
          </Box>
          <Flex mt="4" w="full">
            <Button
              w={{
                base: "full",
                md: "auto",
              }}
            >
              SHOP NOW
            </Button>
          </Flex>
        </Stack>
      </HStack>
    </Container>
  );
}
