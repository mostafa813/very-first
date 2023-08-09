import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#878787",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: "#fff",
        main: "#fff",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#fff",
      },
      success: {
        main: "#66CD6A",
      },
      info: {
        light: "#eee",
        main: "#ddd",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#333",
      },
    }})

    export default theme;