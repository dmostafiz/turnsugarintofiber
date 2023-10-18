import React from "react";
import { HOME } from "../constant";
import { VStack, Grid, HStack, Stack, Img, Text } from "@chakra-ui/react";

export default function Fight() {
  return (
    <VStack>
      <Text>{HOME.FIGHT.TITLE}</Text>
      <Grid templateColumns="repeat(2,1fr)">
        {HOME.FIGHT.ITEMS.map((item, index) => (
          <HStack alignItems="start">
            <Stack>
              <Img src={item.ICON} alt={item.TITLE} />
            </Stack>
            <Stack>
              <Text>{item.TITLE}</Text>
              <Text>{item.SUB_TITLE}</Text>
            </Stack>
          </HStack>
        ))}
      </Grid>
    </VStack>
  );
}
