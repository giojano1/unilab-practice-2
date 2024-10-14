/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-1100": { max: "1100px" },
        "max-1050": { max: "1050px" },
        "max-1000": { max: "1000px" },
        "max-900": { max: "900px" },
        "max-850": { max: "850px" },
        "max-800": { max: "800px" },
        "max-750": { max: "750px" },
        "max-700": { max: "700px" },
        "max-650": { max: "650px" },
        "max-600": { max: "600px" },
        "max-550": { max: "550px" },
        "max-500": { max: "500px" },
        "max-450": { max: "450px" },
        "max-400": { max: "400px" },
      },
      colors: {
        primary: "#003459",
        seconday: "#F7DBA7",
        pinkRed: "#FF564F",
        greenLight: "#34C759",
        orangeShine: "#FF912C",
        blueSea: "#00A7E7",
        neutral100: "#00171F",
        neutral80: "#242B33",
        neutral60: "#667479",
        neutral40: "#99A2A5",
        neutral20: "#CCD1D2",
        neutral10: "##EBEEEF",
        neutral00: "#FDFDFD",
      },
      fontSize: {
        heading: "46px",
        "heading-bold": ["46px", { fontWeight: "700" }],
        "heading-medium": ["46px", { fontWeight: "500" }],
        "heading-regular": ["36px", { fontWeight: "400" }],
        "bold-36": ["36px", { fontWeight: "700" }],
        "semibold-36": ["36px", { fontWeight: "600" }],
        "regular-28": ["28px", { fontWeight: "400" }],
        "bold-28": ["28px", { fontWeight: "700" }],
        "medium-28": ["28px", { fontWeight: "500" }],
        "regular-24": ["24px", { fontWeight: "400" }],
        "bold-24": ["24px", { fontWeight: "700" }],
        "semibold-24": ["24px", { fontWeight: "600" }],
        "regular-20": ["20px", { fontWeight: "400" }],
        "bold-20": ["20px", { fontWeight: "700" }],
        "medium-20": ["20px", { fontWeight: "500" }],
        "regular-16": ["16px", { fontWeight: "400" }],
        "bold-16": ["16px", { fontWeight: "700" }],
        "medium-16": ["16px", { fontWeight: "500" }],
        "regular-14": ["14px", { fontWeight: "400" }],
        "bold-14": ["14px", { fontWeight: "700" }],
        "medium-14": ["14px", { fontWeight: "500" }],
        "regular-12": ["12px", { fontWeight: "400" }],
        "bold-12": ["12px", { fontWeight: "700" }],
        "medium-12": ["12px", { fontWeight: "500" }],
        "regular-10": ["10px", { fontWeight: "400" }],
        "bold-10": ["10px", { fontWeight: "700" }],
        "medium-10": ["10px", { fontWeight: "500" }],
        "regular-8": ["8px", { fontWeight: "400" }],
        "bold-8": ["8px", { fontWeight: "700" }],
        "semibold-8": ["8px", { fontWeight: "600" }],
      },
      backgroundImage: {
        hero: "url('/assets/images/bg.webp')",
        ad1: "url('/assets/images/ad.png')",
        ad2: "url('/assets/images/ad2.png')",
      },
    },
  },
  plugins: [],
};
