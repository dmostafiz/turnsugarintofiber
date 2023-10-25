import {
  Box,
  Divider,
  HStack,
  Img,
  Stack,
  Text,
  VStack,
  Image,
  Container,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { HOME } from "../constant";

export default function Hero() {
  return (
    <>
      <Stack
        bgImage="url('/assets/hero_bg.png')"
        minH={{
          base: "750px",
          md: "900px",
        }}
        bgPos="center"
        justify="space-between"
        bgRepeat="no-repeat"
        textAlign={{
          base: "center",
          md: "auto",
        }}
      >
        <VStack
          spacing={4}
          pt={{
            base: 8,
            md: 16,
            lg: "24",
          }}
        >
          <Text
            textStyle="body"
            maxW="80%"
            fontWeight="semibold"
            color="yellow"
          >
            {HOME.HERO.HEADING}
          </Text>
          <Text
            textStyle="h1"
            fontWeight="extrabold"
            sx={{
              span: {
                color: "white",
                bg: "blue",
                px: 2,
              },
            }}
          >
            {HOME.HERO.TITLE}
          </Text>
          <Divider
            maxW="500px"
            color="yellow"
            display={{
              base: "none",
              md: "block",
            }}
          />
          <Text
            textStyle="body"
            maxW="730px"
            textAlign="center"
            fontWeight="semibold"
            color="gray"
          >
            {HOME.HERO.SUB_TITLE}
          </Text>
          <Box
            display={{
              base: "block",
              md: "none",
            }}
            top="0"
            pos="relative"
            w="full"
            px="4"
          >
            {/* <Button w="full">SHOP NOW</Button> */}
          </Box>
        </VStack>
        <VStack>
          <Box
            display={{
              base: "none",
              md: "block",
            }}
            top="-9"
            pos="relative"
          >
            {/* <Button>SHOP NOW</Button> */}
          </Box>
          <Image mb="-8" src={HOME.HERO.PRODUCT} alt="Product" />
        </VStack>
      </Stack>

      <Container maxW="1135px" my="16">
        <HStack
          justify="space-between"
          w="full"
          flexDirection={{
            base: "column",
            lg: "row",
          }}
          gap={{
            base: "6",
            lg: "0",
          }}
        >
          {HOME.HERO.ITEMS.map((item, index) => (
            <HStack
              key={index}
              spacing="4"
              p={4}
              boxShadow={{ base: "md", lg: index === 0 ? "md" : "none" }}
              border="1px solid"
              w={{ base: "full", lg: "auto" }}
              flexDir={{
                base: "column",
                lg: "row",
              }}
              borderColor={{
                base: "light_gray",
                lg: index === 0 ? "light_gray" : "transparent",
              }}
            >
              <Img src={item.ICON} alt={item.TITLE} w="60px" h="52px" />
              <Text textStyle="h3" fontWeight="bold" color="dark_gray">
                {item.TITLE}
              </Text>
            </HStack>
          ))}
        </HStack>
      </Container>
    </>
  );
}
