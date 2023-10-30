
import {Button, Stack, Typography, useMediaQuery} from "@mui/material";
import wallpaperImage from "../../../assets/img/wallpaper1.jpg";
import {KeyboardArrowDownRounded} from "@mui/icons-material";
import {useState} from "react";
import LogoTransparentSvg from '../../../assets/icn/logoTransparentSvg.svg'

export default function Home() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const [display, setDisplay] = useState(true);

    return (
        <Stack width={'100%'} alignItems={'center'}>
            {display &&
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
                        <img
                            alt={'LogoTransparentSvg'}
                            src={LogoTransparentSvg}
                            width={isDesktop ? '35%' : '80%'}
                            style={{filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.8))'}}
                        />
                    </Stack>
                    <Button
                        variant={'contained'}
                        width={'100%'}
                        sx={{height: '60px', backgroundColor: 'rgba(9, 58, 92, 0.54)'}}
                        onClick={() => setDisplay(false)}
                    >
                        <KeyboardArrowDownRounded color={'secondary'} sx={{fontSize: '50px'}}/>
                    </Button>
                </Stack>
            }
            <Stack
                width={'100%'}
                height={`calc(100dvh - ${isDesktop ? '60px' : '136px'})`}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                   backgroundImage: `url(${wallpaperImage})`,
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',
                }}
            >
                <Stack width={'90%'} maxWidth={'1040px'} gap={3} borderRadius={'10px'} sx={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                    <Typography color={'primary'} fontWeight={'bold'} fontSize={'1.5rem'} textAlign={'center'}>
                        À propos de ce logement
                    </Typography>
                    <Typography color={'secondary'}>
                        La "Baraquette", un havre de paix au cœur de la verdure, à proximité à pied des plages, de la
                        ville, ses commerces, ses Halles.
                    </Typography>
                    <Typography color={'secondary'}>
                        Venez vous ressourcer et découvrir la région, piste cyclable à moins de 2 mn qui vous offre la
                        possibilité de faire le tour de l'étang en passant par Bouzigues et ses huîtres, Balaruc et ses
                        thermes, Sète l'île singulière, Agde et ses plages.
                    </Typography>
                    <Typography color={'secondary'}>
                        Le logement Studio neuf avec cuisine toute équipée, chambre indépendante avec claustra amovible
                        qui vous isolera de la partie jour. Deux jardins à votre disposition, un face à la porte d'entrée
                        et l'autre en hauteur avec vue sur Sète. Entrée indépendante avec parking devant la "Baraquette".
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}