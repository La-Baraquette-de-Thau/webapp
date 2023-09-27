
import { Dialog } from "@mui/material";

export default function ViewPicture({ close, imgData }) {

    return (
        <Dialog
            open={!!imgData}
            onClose={close}
            sx={{p: 0, m: 0, maxWidth: 'none', borderRadius: 0}}
            onClick={close}
        >
            <img src={imgData}  alt={'loading'} width={'100%'} style={{maxWidth: '100vw',maxHeight: 'calc(100vh - 64px)'}}/>
        </Dialog>
    );
}