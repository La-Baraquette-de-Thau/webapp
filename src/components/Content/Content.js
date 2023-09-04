
import {Stack} from "@mui/material";
import {createElement, useContext} from "react";
import {GlobalContext} from "../App/App";
import Home from "../Pages/Home/Home";
import Around from "../Pages/Around/Around";
import Contact from "../Pages/Contact/Contact";
import Picture from "../Pages/Picture/Picture";

const PAGES = {
    home: Home,
    around: Around,
    contact: Contact,
    picture: Picture
}

export default function Content() {
    const { displayPage } = useContext(GlobalContext)

    return (
        <main>
            <Stack height={'calc(100vh - 80px)'} justifyContent={'center'} alignItems={'center'}>
                {createElement(PAGES[displayPage])}
            </Stack>
        </main>
    );
}