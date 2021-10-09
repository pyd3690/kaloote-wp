import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    overcompiled: {
      100: "#123FFF"
    },
    kalooteBlue: {
      100: '#1A73E2'
    },
    kalooteGray: {
      100: '#f1f1f6',
      200: '#787878'
    }
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["5vw", "3vw", '2vw', "1.6vw"],
      fontWeight: "350",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    h3: {
      fontSize: ["4vw", "2.5vw", '1.5vw', "1.25vw"],
      fontWeight: "520",
      lineHeight: "120%",
      letterSpacing: "-1%",
    },
    subContent: {
      fontSize: ["3vw", "2.1vw", '1.2vw', "1vw"],
      fontWeight: "340",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    subContentBold: {
      fontSize: ["3vw", "2.1vw", '1.2vw', "1vw"],
      fontWeight: "460",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    tabs: {
      fontSize: ["3.5vw", "3vw", '1.5vw', "0.95vw"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    profileTitle: {
      fontSize: ["3vw", "2.1vw", '1vw', "0.92vw"],
      fontWeight: "570",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    profileContent: {
      fontSize: ["2.9vw", "2vw", '0.95vw', "0.86vw"],
      fontWeight: "375",
      lineHeight: "110%",
      letterSpacing: "1%",
    },
    profileSubContent: {
      fontSize: ["2.7vw", "1.8vw", '0.85vw', "0.8vw"],
      fontWeight: "350",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    suggested: {
      fontSize: ["2.7vw", "1.7vw", '0.8vw', "0.73vw"],
      fontWeight: "350",
      lineHeight: "90%",
      letterSpacing: "-1%",
    },
    h3e: {
      fontSize: ["15px", "21px"],
      fontWeight: "450",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    h3eb: {
      fontSize: ["14px", "20px"],
      fontWeight: "300",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    skills: {
      fontSize: ["3.2vw", "2.3vw", '1vw', "0.9vw"],
      fontWeight: "400",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },

  },
})

export default theme