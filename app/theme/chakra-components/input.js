import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    height: "54px",
    borderRadius: "5px",
    color: "gray",
    borderColor: "gray",
    fontSize: "15px",
    _placeholder: {
      color: "gray",
      fontWeight: "medium",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
