import { createTheme, MantineColorsTuple } from "@mantine/core";

const brandGreen: MantineColorsTuple = [
  "#f0fdf4",
  "#dcfce7",
  "#bbf7d0",
  "#86efac",
  "#4ade80",
  "#1db954",
  "#16a34a",
  "#15803d",
  "#166534",
  "#14532d",
];

export const theme = createTheme({
  colors: {
    brand: brandGreen,
  },
  primaryColor: "brand",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  headings: {
    fontFamily: 'Georgia, "Times New Roman", serif',
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
