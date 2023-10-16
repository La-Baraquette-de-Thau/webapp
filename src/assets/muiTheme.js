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