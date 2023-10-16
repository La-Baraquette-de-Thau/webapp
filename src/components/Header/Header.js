
import {BottomNavigation, BottomNavigationAction, Button, Stack, useMediaQuery} from "@mui/material";
import {useContext} from "react";
import {GlobalContext} from "../App/App";
import {
    ConstructionRounded,
    ContactPageRounded,
    DescriptionRounded,
    LocationOnRounded,
    Panorama
} from "@mui/icons-material";
import logoInline from '../../assets/icn/logoInline2.svg'

const PAGES_DATA = [
    {name: 'Accueil', value: 'home', icn: <DescriptionRounded />},
    {name: 'Photos', value: 'picture', icn: <Panorama />},
    {name: 'Équipements', value: 'equipment', icn: <ConstructionRounded />},
    {name: 'Alentours', value: 'around', icn: <LocationOnRounded/>},
    {name: 'Contact', value: 'contact', icn: <ContactPageRounded />}
]

export default function Header() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const { displayPage, setDisplayPage } = useContext(GlobalContext);

    return (
        <Stack width={'100%'} alignItems={'center'} position={'fixed'} zIndex={1000} sx={{backgroundColor: '#093a5c', boxShadow: '0px 1px 10px black'}}>
            <Stack
                flexDirection={'row'}
                width={'100%'}
                height={'60px'}
                justifyContent={isDesktop ? 'space-between' : 'center'}
                alignItems={'center'}
                sx={{maxWidth: '1040px'}}
            >
                <img src={logoInline} height={'100%'}  alt={'Inline logo site'}/>
                {isDesktop
                    ?
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
                    :
                        <BottomNavigation
                            showLabels
                            value={displayPage}
                            onChange={(event, value) => setDisplayPage(value)}
                            sx={{position: 'fixed', bottom: 0, width: '100%', paddingY: '10px', zIndex: 100,
                                bgcolor: 'primary.main',
                                '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                                    color: 'secondary.main'
                                },
                                '& .Mui-selected': {
                                    '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                                        color: 'info.main'
                                    }
                                }
                            }}
                        >
                            {PAGES_DATA.map((page) =>
                                <BottomNavigationAction key={'MenuButton' + page.value} value={page.value} label={page.name} icon={page.icn} />
                            )}
                        </BottomNavigation>
                }
            </Stack>
        </Stack>
    );
}