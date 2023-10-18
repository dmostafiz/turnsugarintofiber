import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { HOME } from "../constant";
import React from "react";

export default function QuoteSection() {
  return (
    <VStack bg="green" color="white">
      <Container maxW="1135px" my="10" textAlign="center">
        <Text textStyle="qoute" fontWeight="bold">
          {HOME.INFORMATION.QOUTE}
        </Text>
      </Container>
    </VStack>
  );
}
