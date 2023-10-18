import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack
      bg="green"
      as="footer"
      color="white"
      fontSize="16px"
      lineHeight="33px"
      minH="73"
      alignItems="center"
      justify="center"
    >
      <Text
        fontSize="18px"
        fontWeight="medium"
        p="4"
        maxW={{
          base: "260px",
          md: "1135px",
        }}
      >
        Copyright Reserves 2023 | Terms & Policy | Disclamer
      </Text>
    </Stack>
  );
};

export default Footer;
