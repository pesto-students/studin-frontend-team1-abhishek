import { createTheme } from "@mui/material";
import { blue, pink, purple } from "@mui/material/colors";

export const appTheme = createTheme({
    palette: {
        // primary: {
        //     main: '#004666',
        //     // main: '#1760a5',
        //     light: 'skyblue'
        // },
        // secondary: {
        //     main: '#15c630'
        // },
        primary: {
            light: blue[300],
            main: purple[500],
            dark: blue[700],
          },
          secondary: {
            light: pink[300],
            main: "#11cb5f",
            dark: pink[700],
          },
        otherColor: {
            main: '#999'
        },
        background: {
            paper: 'black',
            default: 'black'
        }
    },
    breakpoints:{
        values:{
            xs:0,
            sm:600,
            md:900,
            lg:1200,
            xl:1536,
        }
    }
})