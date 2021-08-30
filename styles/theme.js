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
      100: '#f1f1f6'
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
      fontSize: ["20px", "27px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    h3: {
      fontSize: ["17px", "23px"],
      fontWeight: "semibold",
      lineHeight: "110%",
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
      fontSize: ["15px", "20px"],
      fontWeight: "400",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },

  },
})

export default theme