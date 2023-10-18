import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HOME } from "../constant";

export default function Challange() {
  return (
    <Container bg="white" maxW="1135px" color="black">
      <HStack
        w="full"
        justify="space-between"
        my="20"
        alignItems={{
          base: "center",
        }}
        flexDir={{
          base: "column-reverse",
          md: "row",
        }}
        textAlign={{
          base: "center",
          md: "start",
        }}
        gap={{
          base: "20",
          md: "0",
        }}
      >
        <Img
          h={{ base: "auto", md: "520px" }}
          src={HOME.CHALLANGE.PRODUCT}
          alt="Challenge Product"
        />
        <Stack spacing={4}>
          <Text textStyle="h2" fontWeight="bold" color="black">
            {HOME.CHALLANGE.TITLE}
          </Text>
          <Divider
            color="yellow"
            opacity="1"
            maxW="350px"
            border="1.5px solid"
            display={{
              base: "none",
              md: "block",
            }}
          />
          <Text maxW="600px" textStyle="body" color="gray" fontWeight="medium">
            {HOME.CHALLANGE.SUB_TITLE}
          </Text>
          <Text textStyle="h3" fontWeight="bold" color="light_blue">
            {HOME.CHALLANGE.SUB_TITLE2}
          </Text>
          <Box mt="4">
            <Button
              w="full"
              maxW={{
                base: "full",
                md: "200px",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Stack>
      </HStack>
    </Container>
  );
}
