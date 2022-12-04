import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      color: mode("#575279", "#e0def4")(props),
      bg: mode("#faf4ed", "#232136")(props),
      transitionProperty: "background-color",
      transitionDuration: "500ms",
    },
  }),
};

const config = {
  disableTransitionOnChange: false,
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props: any) => ({
      dialog: {
        bg: mode("white", "#141214")(props),
      },
    }),
  },
  Modal: {
    baseStyle: (props: any) => ({
      dialog: {
        bg: mode("#faf4ed", "#232136")(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
  config,
});

export default theme;
