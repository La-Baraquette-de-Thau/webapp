
import {Button, Stack, Typography, useMediaQuery} from "@mui/material";
import wallpaperImage from "../../../assets/img/wallpaper1.jpg";
import {KeyboardArrowDownRounded} from "@mui/icons-material";

export default function Home() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <Stack width={'100%'} alignItems={'center'}>
            <Stack
                width={'100%'}
                height={`calc(100dvh - ${isDesktop ? '60px' : '136px'})`}
                sx={{
                    backgroundImage: `url(${wallpaperImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <Stack height={'100%'} justifyContent={'center'} alignItems={'center'}>
                    <Typography
                        fontSize={'40px'}
                        fontWeight={'bold'}
                        color={'secondary'}
                        textAlign={'center'}
                        sx={{textShadow: '2px 2px 2px black'}}
                    >
                        La Baraquette de Thau
                    </Typography>
                    <Typography
                        fontSize={'18px'}
                        color={'secondary'}
                        sx={{textShadow: '2px 2px 2px black'}}
                    >
                        Un havre de paix au coeur de la verdure
                    </Typography>
                </Stack>
                <Button
                    variant={'contained'}
                    width={'100%'}
                    href={'#bottom'}
                    sx={{height: '60px', backgroundColor: 'rgba(9, 58, 92, 0.54)'}}
                >
                    <KeyboardArrowDownRounded color={'secondary'} sx={{fontSize: '50px'}}/>
                </Button>
            </Stack>
            <Stack
                id={'bottom'}
                width={'100%'}
                height={`calc(100dvh - ${isDesktop ? '60px' : '136px'})`}
                paddingBottom={isDesktop ? '0px' : '76px'}
                sx={{
                   backgroundImage: `url(${wallpaperImage})`,
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',
                }}
            >
            </Stack>
        </Stack>
    );
}