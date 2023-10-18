import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./chakra-components/input";
import { Button } from "./chakra-components/button";
import { textStyles } from "./textStyles";
const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
    default: "Raleway",
  },
  colors: {
    yellow: "#edc406",
    black: "#222222",
    gray: "#616161",
    dark_gray: "#3d3d3d",
    light_gray: "#e5e5e5",
    blue: "#027691",
    light_blue: "#2683a1",
    green: "#0d9c4d",
  },
  textStyles,
  components: { Input: inputTheme, Button },
});

export default theme;
