import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  height: "50px",
  px: 8,
  py: 5,
  borderRadius: "full",
  border: "1px solid white",
  bg: "yellow",
  fontSize: "18px",
  color: "black",
  cursor: "pointer",
  _hover: {
    bg: "light_gray",
    color: "black",
  },
});

export const Button = defineStyleConfig({
  variants: { solid },
});
