import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#004666',
            // main: '#1760a5',
            light: 'skyblue'
        },
        secondary: {
            main: '#15c630'
        },
        otherColor: {
            main: '#999'
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