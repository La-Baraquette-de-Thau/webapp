
import {Button, Stack, Typography} from "@mui/material";
import {useContext} from "react";
import {GlobalContext} from "../App/App";

const PAGES_DATA = [
    {name: 'Accueil', value: 'home'},
    {name: 'Photos', value: 'picture'},
    {name: 'Alentours', value: 'around'},
    {name: 'Contact', value: 'contact'}
]

export default function Header() {
    const { displayPage, setDisplayPage } = useContext(GlobalContext);

    return (
        <Stack width={'100%'} alignItems={'center'} sx={{backgroundColor: 'primary.main'}}>
            <Stack
                flexDirection={'row'}
                width={'100%'}
                height={'60px'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{maxWidth: '1040px'}}
            >
                <Typography color={'white'} fontWeight={'bold'} fontSize={'25px'}>LA BARAQUETTE DE THAU</Typography>
                <Stack flexDirection={'row'} gap={2}>
                    {PAGES_DATA.map((page) =>
                        <Button
                            key={'MenuButton' + page.value}
                            color={'secondary'}
                            variant={displayPage === page.value ? 'outlined' : 'text'}
                            onClick={() => setDisplayPage(page.value)}
                        >
                            {page.name}
                        </Button>
                    )}
                </Stack>
            </Stack>
        </Stack>
    );
}