
import {Chip, Divider, Stack, Typography} from "@mui/material";
import PictureSlider from "../../../features/PictureSlider/PictureSlider";

export default function Home() {

    return (
        <Stack alignItems={'center'} gap={2} sx={{paddingY: '20px'}}>
            <Divider flexItem variant={'middle'}><Chip label="Quelques photos ?" /></Divider>
            <PictureSlider />
            <Divider flexItem variant={'middle'}><Chip label="À propos de ce logement" /></Divider>
            <Description />
        </Stack>
    );
}

function Description() {

    return (
        <Stack width={'80%'}>
            <Typography textAlign={'justify'}>
                La "Baraquette", un havre de paix au coeur de la verdure, â proximité à pied des plages, de la ville,
                ses commerces, ses Halles.
            </Typography>
            <br/>
            <Typography textAlign={'justify'}>
                Venez vous ressourcer et découvrir la région, piste cyclable à moins de 2 mn qui vous offre la possibilité
                de faire le tour de l'etang en passant par Bouzigues et ses huitres, Balaruc et ses thermes, Sète l'île
                singulière, Agde et ses plages.
            </Typography>
            <br/>
            <Typography fontWeight={'bold'} >Le logement</Typography>
            <Typography>
                Studio neuf avec cuisine toute équipée, chambre indépendante avec claustra amovible qui vous isolera de
                la partie jour. Deux jardins à votre disposition, un face à la porte d'entrée et l'autre en hauteur avec
                vue sur Sète. Entrée indépendante avec parking devant la "Baraquette".
            </Typography>
            <Typography>
                Studio neuf avec cuisine toute équipée, chambre indépendante avec claustra amovible qui vous isolera de
                la partie jour. Deux jardins à votre disposition, un face à la porte d'entrée et l'autre en hauteur avec
                vue sur Sète. Entrée indépendante avec parking devant la "Baraquette".
            </Typography>
            <br/>
            <Typography fontWeight={'bold'} >Accès des voyageurs</Typography>
            <Typography>
                Studio, parking privatif et 2 jardins attenants
            </Typography>
        </Stack>
    );
}