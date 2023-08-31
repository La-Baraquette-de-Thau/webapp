
import {Stack, Typography} from "@mui/material";

export default function Header({  }) {

    return (
        <Stack height={'80px'} justifyContent={'center'} alignItems={'center'} sx={{backgroundColor: 'primary.main'}}>
            <Typography color={'white'} fontWeight={'bold'} fontSize={'25px'}>LA BARAQUETTE DE THAU</Typography>
        </Stack>
    );
}