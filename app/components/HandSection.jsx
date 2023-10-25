import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { HOME } from "../constant";
const HandSection = () => {
  return (
    <Box
    mt={20}
      bgImage="url(/assets/hand_bg.png)"
      h={{
        base: "auto",
        md: "180px",
        lg: "160px",
      }}
      bgPos="center"
      bgSize="cover"
    >
      <Container maxW="1135px" pos="relative">
        <Flex
          gap={{
            base: "0",
            md: "16",
          }}
          flexDir={{
            base: "column-reverse",
            md: "row",
          }}
          justify="space-between"
        >
          <Image
            pos="relative"
            top={{
              md: "-75px",
              lg: "-95px",
            }}
            src={HOME.SUGER.HAND_IMAGE}
          />
          <Text
            fontSize="30px"
            color="white"
            fontWeight="bold"
            sx={{
              span: {
                color: "yellow",
              },
            }}
            mt="8"
          >
            {HOME.SUGER.QOUTE2}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default HandSection;
