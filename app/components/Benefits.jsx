import {
  Flex,
  Stack,
  Img,
  Text,
  Container,
  HStack,
  Grid,
  Box,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { HOME } from "../constant";

const Essential = () => {
  return (
    <Flex bg="green" color="white">
      <Container
        maxW="1135px"
        my={{
          base: 16,
          md: "24",
        }}
      >
        <HStack
          spacing={8}
          mb={{
            base: 16,
            md: "24",
          }}
        >
          <Box
            w="full"
            maxW="150px"
            display={{
              base: "none",
              md: "block",
            }}
          >
            <Divider borderWidth="2px" color="yellow" opacity="1" />
          </Box>
          <Text
            textAlign="center"
            w="full"
            textStyle="h2"
            fontWeight="extrabold"
            sx={{
              span: {
                color: "yellow",
              },
            }}
          >
            {HOME.AGE.TITLE}
          </Text>
          <Box
            w="full"
            maxW="150px"
            display={{
              base: "none",
              md: "block",
            }}
          >
            <Divider borderWidth="2px" color="yellow" opacity="1" />
          </Box>
        </HStack>
        <Flex
          mx="auto"
          justify="center"
          align="center"
          gap={{
            base: 10,
            md: "20",
          }}
          w="full"
        >
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={{
              base: 16,
              md: "4",
            }}
          >
            {HOME.AGE.ITEMS.map((item, index) => (
              <Stack
                minH={{
                  base: "auto",
                  md: "260px",
                }}
                align={{
                  base: "center",
                  md: "start",
                }}
                textAlign={{
                  base: "center",
                  md: "start",
                }}
              >
                <Box>
                  <Img h="60px" src={item.ICON} alt={item.TITLE} />
                </Box>
                <Text mt="4" textStyle="h3" fontWeight="bold">
                  {item.TITLE}
                </Text>
                <Text textStyle="body">{item.SUB_TITLE}</Text>
              </Stack>
            ))}
          </Grid>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Essential;
