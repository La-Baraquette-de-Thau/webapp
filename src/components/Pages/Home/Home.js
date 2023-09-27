
import {Chip, Divider, Stack, Typography} from "@mui/material";
import PictureSlider from "../../../features/PictureSlider/PictureSlider";

export default function Home() {

    return (
        <>
            <Divider flexItem variant={'middle'} sx={{marginTop: 2}}><Chip label="Quelques photos ?" /></Divider>
            <PictureSlider />
            <Divider flexItem variant={'middle'}><Chip label="À propos de ce logement" /></Divider>
            <Description />
        </>
    );
}

function Description() {

    return (
        <Stack width={'80%'} sx={{marginBottom: 'calc(32px + 60px)'}}>
            <Typography textAlign={'justify'}>
                Charmant gîte d’environ 50 m2 sous combles, neuf, au 1er étage d'une dépendance (bât. à droite sur photo d’ensemble)
                sur terrain de 1 700 m2 où habitent les propriétaires très discrets. Seul gîte sur place.
            </Typography>
            <br/>
            <Typography textAlign={'justify'}>
                Piscine (7x4m), spa (2/4 p. à bulles), cuisine d'été (plancha) et coin repas près piscine, table ping-pong,
                trampoline, espace enfants (cabane, ...) et boulodrome à disposition des locataires (libre service).
            </Typography>
            <br/>
            <Typography>
                Parking : réservé et sécurisé
            </Typography>
            <Typography>
                Piscine : mai à oct (sécurisée)
            </Typography>
            <Typography>
                Spa : toute l’année
            </Typography>
            <br/>
            <Typography fontWeight={'bold'} >Le logement</Typography>
            <Typography>Le gîte « Les Auberguets » comprend :</Typography>
            <Typography>- une place de parking réservée (à l’intérieur de la propriété sécurisée),</Typography>
            <Typography>- une entrée au rdc et un escalier desservant les pièces à vivre au 1er étage,</Typography>
            <Typography>
                - une cuisine, avec îlot central, entièrement équipée (lave-vaisselle, four, micro-ondes, cafetière
                « à filtre», cafetière à capsules Krups, petite cafetière à piston, grille-pain, réfrigérateur, congélateur,...)
                et ouverte sur le salon climatisé équipé d’un canapé-lit type "rapido" (ouverture facile et confortable),
            </Typography>
            <Typography>- une chambre (lit 140 très confortable),</Typography>
            <Typography>- une salle d'eau (avec WC) ; passage par la chambre pour y accéder,</Typography>
            <Typography>- un petit extérieur « privatif » (1 table, 4 chaises, 2 chaises longues, 1 plancha petit format)</Typography>
            <br/>
            <Typography>Une buanderie avec lave-linge (local annexe au rdc) est partagée avec les propriétaires.</Typography>
        </Stack>
    );
}