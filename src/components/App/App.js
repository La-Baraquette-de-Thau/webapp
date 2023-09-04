
import Header from "../Header/Header";
import React, {createContext, useState} from "react";
import Content from "../Content/Content";

export const GlobalContext = createContext({
    displayPage: '',
    setDisplayPage: (_) => {}
});

export default function App() {
    const [displayPage, setDisplayPage] = useState('home');

    return (
        <GlobalContext.Provider  value={{displayPage: displayPage, setDisplayPage: setDisplayPage}}>
            <Header />
            <Content />
        </GlobalContext.Provider>
    );
}