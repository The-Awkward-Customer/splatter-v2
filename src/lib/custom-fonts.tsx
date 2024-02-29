import localFonts from "next/font/local";

const civilFont = localFonts({
  src: [
    {
      path: "../app/static-fonts/CivilPremium-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/static-fonts/CivilPremium-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/static-fonts/CivilPremium-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/static-fonts/CivilPremium-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-civil-premium",
});

export default civilFont;
