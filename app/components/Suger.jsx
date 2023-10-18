import {
  HStack,
  ListItem,
  UnorderedList,
  Text,
  VStack,
  Img,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { HOME } from "../constant";

export default function Suger() {
  return (
    <VStack>
      <Container
        maxW="1135px"
        my="20"
        mb={{
          base: 16,
          md: "32",
        }}
      >
        <VStack spacing={6} textAlign="center">
          <Text textStyle="h2" fontWeight="bold" lineHeight="1.1">
            {HOME.SUGER.TITLE}
          </Text>
          <Text textStyle="body" fontWeight="medium" color="gray" maxW="900px">
            {HOME.SUGER.SUB_TITLE}
          </Text>
          <Text textStyle="qoute" fontWeight="bold" color="green">
            {HOME.SUGER.QOUTE}
          </Text>
        </VStack>
        <HStack
          justifyContent="space-between"
          mt={{
            base: 4,
            lg: "12",
          }}
          justify="space-between"
          flexDir={{
            base: "column-reverse",
            md: "row",
          }}
          gap="8"
        >
          <UnorderedList maxW="500px" flex="1">
            {HOME.SUGER.ITEMS.map((item, index) => (
              <ListItem key={index} mt="2">
                <Text textStyle="h3" fontWeight="semibold" color="gray">
                  {item}
                </Text>
              </ListItem>
            ))}
          </UnorderedList>
          <Img
            maxW={{
              base: "full",
              lg: "500px",
            }}
            flex="1"
            src={HOME.SUGER.SUGAR_IMAGE}
            alt="Sugar Image"
          />
        </HStack>
      </Container>
    </VStack>
  );
}
