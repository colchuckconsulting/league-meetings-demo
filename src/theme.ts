import { createTheme, MantineColorsTuple } from "@mantine/core";

const brandBlue: MantineColorsTuple = [
  "#e6f0ff",
  "#cce0ff",
  "#99c2ff",
  "#66a3ff",
  "#3385ff",
  "#0064F0",
  "#0055cc",
  "#0047a8",
  "#003985",
  "#002b61",
];

const brandGold: MantineColorsTuple = [
  "#fffdf0",
  "#fff9d6",
  "#fff3ad",
  "#ffed85",
  "#ffe75c",
  "#FCD43D",
  "#e6bf2a",
  "#ccaa1f",
  "#b39516",
  "#99800d",
];

export const theme = createTheme({
  colors: {
    brand: brandBlue,
    gold: brandGold,
  },
  primaryColor: "brand",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  headings: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    fontWeight: "700",
  },
  defaultRadius: "md",
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "2rem",
  },
  components: {
    Button: {
      defaultProps: {
        size: "md",
      },
    },
    Container: {
      defaultProps: {
        size: "lg",
      },
    },
  },
});
