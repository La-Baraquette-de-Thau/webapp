
import {Stack, useMediaQuery} from "@mui/material";
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
    const isDesktop = useMediaQuery('(min-width:800px)');
    const { displayPage } = useContext(GlobalContext);

    return (
        <main style={{display: 'flex', justifyContent: 'center'}}>
            <Stack
                width={'100%'}
                maxWidth={'1040px'}
                minHeight={`calc(100vh - ${isDesktop ? '60px' : '136px'})`}
                justifyContent={isDesktop ? 'center' : 'start'}
                alignItems={'center'}
                gap={2}
            >
                {createElement(PAGES[displayPage])}
            </Stack>
        </main>
    );
}