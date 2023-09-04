import {
    createTheme,
    ThemeProvider
} from "@mui/material";

const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#2196f3'
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