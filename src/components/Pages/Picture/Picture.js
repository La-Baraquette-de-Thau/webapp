
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Fab, Stack, useMediaQuery} from "@mui/material";
import {useState} from "react";
import ViewPicture from "../../../features/ViewPicture/ViewPicture";
import {ArrowUpwardRounded} from "@mui/icons-material";
import image1 from './img/1.jpg'
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'
import image4 from './img/4.jpg'
import image5 from './img/5.jpg'
import image6 from './img/6.jpg'
import image7 from './img/7.jpg'
import image8 from './img/8.jpg'
import image9 from './img/9.jpg'
import image10 from './img/10.jpg'
import image11 from './img/11.jpg'
import image12 from './img/12.jpg'
import image13 from './img/13.jpg'
import image14 from './img/14.jpg'
import image15 from './img/15.jpg'
import image16 from './img/16.jpg'
import image17 from './img/17.jpg'
import image18 from './img/18.jpg'
import image19 from './img/19.jpg'
import image20 from './img/20.jpg'
import image21 from './img/21.jpg'
import image22 from './img/22.jpg'
import image23 from './img/23.jpg'
import image24 from './img/24.jpg'
import image25 from './img/25.jpg'
import image26 from './img/26.jpg'
import image27 from './img/27.jpg'
import image28 from './img/28.jpg'
import image29 from './img/29.jpg'
import image30 from './img/30.jpg'
import image31 from './img/31.jpg'
import image32 from './img/32.jpg'
import image33 from './img/33.jpg'
import image34 from './img/34.jpg'
import image35 from './img/35.jpg'
import image36 from './img/36.jpg'
import image37 from './img/37.jpg'
import image38 from './img/38.jpg'
import image39 from './img/39.jpg'
import image40 from './img/40.jpg'

export default function Picture() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const [viewPictureModal, setViewPictureModal] = useState(null);

    return (
        <>
            <ViewPicture imgData={viewPictureModal} close={() => setViewPictureModal(null)} />
            <Stack width={'100%'} height={'100%'} maxWidth={'1040px'}>
                <ImageList
                    cols={isDesktop ? 3 : 2}
                    gap={isDesktop ? 10 : 5}
                    sx={{ mx: isDesktop ? 0 : 1, overflowY: 'inherit' }}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} onClick={() => setViewPictureModal(item.img)}>
                            <img
                                srcSet={item.img}
                                src={item.img}
                                alt={item.title}
                                style={{height: isDesktop ? '300px' : '200px'}}
                            />
                            <ImageListItemBar
                                title={item.title}
                                sx={{bgcolor: 'rgba(33, 150, 243, 0.54)'}}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Stack>
            <Fab
                color="primary"
                sx={{position: 'fixed', bottom: isDesktop ? 16 : 92, right: 16}}
                href={'#'}
            >
                <ArrowUpwardRounded />
            </Fab>
        </>
    );
}

const itemData = [
    {img: image1, title: 'Vue Extérieur'},
    {img: image2, title: 'Décorations'},
    {img: image3, title: 'Salle de bain'},
    {img: image4, title: 'Cuisine'},
    {img: image5, title: 'Étang de Thau'},
    {img: image6, title: 'Décorations'},
    {img: image7, title: 'Salon'},
    {img: image8, title: 'Cuisine'},
    {img: image9, title: 'Terrasse'},
    {img: image10, title: 'Cuisine'},
    {img: image11, title: 'Sea star'},
    {img: image12, title: 'Bike'},
    {img: image13, title: 'Bike'},
    {img: image14, title: 'Bike'},
    {img: image15, title: 'Bike'},
    {img: image16, title: 'Bike'},
    {img: image17, title: 'Bike'},
    {img: image18, title: 'Bike'},
    {img: image19, title: 'Bike'},
    {img: image20, title: 'Bike'},
    {img: image21, title: 'Bike'},
    {img: image22, title: 'Bike'},
    {img: image23, title: 'Bike'},
    {img: image24, title: 'Bike'},
    {img: image25, title: 'Bike'},
    {img: image26, title: 'Bike'},
    {img: image27, title: 'Bike'},
    {img: image28, title: 'Bike'},
    {img: image29, title: 'Bike'},
    {img: image30, title: 'Bike'},
    {img: image31, title: 'Bike'},
    {img: image32, title: 'Bike'},
    {img: image33, title: 'Bike'},
    {img: image34, title: 'Bike'},
    {img: image35, title: 'Bike'},
    {img: image36, title: 'Bike'},
    {img: image37, title: 'Bike'},
    {img: image38, title: 'Bike'},
    {img: image39, title: 'Bike'},
    {img: image40, title: 'Bike'},
];