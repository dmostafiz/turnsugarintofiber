import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HOME } from "../constant";

const AgingSection = () => {
  return (
    <Box
      bg="green"
      mt={{
        base: "200px",
        md: "400px",
      }}
      color="white"
      pb="20"
    >
      <Container maxW="1135px">
        <Box
          pos="relative"
          top={{
            base: "-100px",
            md: "-300px",
          }}
          mb={{
            base: "-100px",
            md: "-300px",
          }}
        >
          <>
            <iframe className="" id="video" width={'100%'} height={620} src='https://www.youtube.com/embed/TU-C_oVO0FI?si=6kn33jA9BGlGvoy4' allowTransparency="true" autoPlay={true} allowFullScreen muted="true" />
          </>
        </Box>

        <Text
          textStyle="h2"
          textAlign={{
            base: "center",
            md: "start",
          }}
          fontWeight="bold"
          mt="10"
        >
          {HOME.FIGHT.TITLE}
        </Text>

        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={{
            base: 12,
            md: "8",
          }}
          mt="16"
        >
          {HOME.FIGHT.ITEMS.map((item, index) => (
            <GridItem key={index}>
              <Flex
                gap="5"
                flexDir={{
                  base: "column",
                  md: "row",
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
                <Box
                  width={{
                    base: "64px",
                    md: "110px",
                  }}
                >
                  <Image src={item.ICON} />
                </Box>
                <Stack>
                  <Text textStyle="h3" fontWeight="bold">
                    {item.TITLE}
                  </Text>
                  <Text textStyle="body" fontWeight="medium" color="light_gray">
                    {item.SUB_TITLE}
                  </Text>
                </Stack>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AgingSection;
