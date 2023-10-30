import {
    createTheme,
    ThemeProvider
} from "@mui/material";

const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#093a5c'
        },
        secondary: {
            main: '#FFFFFF'
        },
        third: {
            main: '#d5af9c'
        }
    }
});

const laBaraquetteTheme = createTheme(colorTheme, {});

export default function LaBaraquetteTheme(props) {
    return (
        <ThemeProvider theme={laBaraquetteTheme}>
            {props.children}
        </ThemeProvider>
    );
}