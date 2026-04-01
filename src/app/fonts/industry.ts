// src/app/fonts/industry.ts
import localFont from "next/font/local";

export const industry = localFont({
  src: [
    {
      path: "./Industry/IndustryTest-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Industry/IndustryTest-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./Industry/IndustryTest-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Industry/IndustryTest-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Industry/IndustryTest-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Industry/IndustryTest-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Industry/IndustryTest-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Industry/IndustryTest-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Industry/IndustryTest-Demi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Industry/IndustryTest-DemiItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Industry/IndustryTest-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Industry/IndustryTest-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Industry/IndustryTest-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Industry/IndustryTest-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-industry", // optional but recommended
  display: "swap",
});
