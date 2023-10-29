
import {Avatar, Link, Stack, Typography, useMediaQuery} from "@mui/material";
import avatarImage from '../../../assets/img/avatar.jpg';
import {EmailRounded, PhoneRounded} from "@mui/icons-material";

export default function Contact() {
    const isDesktop = useMediaQuery('(min-width:800px)');

    return (
        <Stack justifyContent={'center'} alignItems={'center'} maxWidth={'500px'} gap={3} height={`calc(100svh - ${isDesktop ? '60px' : '136px'})`}>
            <Avatar alt="Remy Sharp" src={avatarImage} sx={{ width: 250, height: 250 }} />
            <Typography>La présentation</Typography>
            <Stack flexDirection={isDesktop ? 'row' : 'column'} alignItems={'center'} gap={2}>
                <Stack flexDirection={'row'} gap={1}>
                    <EmailRounded color={'info'} />
                    <Link href={'mailto:labaraquettedethau34@gmail.com?subject=Demande à propos du gîte'} fontWeight={'bold'} color={'primary'}>labaraquettedethau34@gmail.com</Link>
                </Stack>
                <Stack flexDirection={'row'} gap={1}>
                    <PhoneRounded color={'info'} />
                    <Link href={"tel:+33000000000"} fontWeight={'bold'} color={'primary'}>0000000000</Link>
                </Stack>
            </Stack>
        </Stack>
    );
}