
import {Stack, Typography} from "@mui/material";
import logoTransparentPng from "../../assets/icn/logoTransparentPng.png"

export default function Content({  }) {

    return (
        <Stack height={'calc(100vh - 80px)'} justifyContent={'center'} alignItems={'center'}>
            <img
                src={logoTransparentPng}
                alt={"logo"}
                style={{width: '800px'}}
            />
        </Stack>
    );
}