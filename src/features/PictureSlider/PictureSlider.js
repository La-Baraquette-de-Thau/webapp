
import {Box, ImageList, ImageListItem, useMediaQuery} from "@mui/material";
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';
import {useState} from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../components/Pages/Picture/img/1.jpg";
import image2 from "../../components/Pages/Picture/img/2.jpg";
import image3 from "../../components/Pages/Picture/img/3.jpg";
import image4 from "../../components/Pages/Picture/img/4.jpg";
import image5 from "../../components/Pages/Picture/img/5.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const itemData = [
    {img: image1, alt: 'Vue Extérieur', cols: 2, rows: 2},
    {img: image2, alt: 'Décorations', cols: 1, rows: 1},
    {img: image3, alt: 'Salle de bain', cols: 1, rows: 1},
    {img: image4, alt: 'Cuisine', cols: 1, rows: 1},
    {img: image5, alt: 'Étang de Thau', cols: 1, rows: 1},
];

export default function PictureSlider() {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const [activeStep, setActiveStep] = useState(0);

    return (
        isDesktop
            ?
            <ImageList
                variant="quilted"
                cols={4}
                rowHeight={isDesktop ? 190 : 80}
                style={{width: '100%', minHeight: '384px', margin: 0}}
            >
                {itemData.map(item =>
                    <ImageListItem key={item.alt} cols={item.cols} rows={item.rows}>
                        <img src={item.img} alt={item.alt}/>
                    </ImageListItem>
                )}
            </ImageList>
            :
            <AutoPlaySwipeableViews
                index={activeStep}
                onChangeIndex={(step) => setActiveStep(step)}
                enableMouseEvents
            >
                <Carousel useKeyboardArrows={true} showStatus={false} showThumbs={false}>
                    {itemData.map(image =>
                        <div key={image.alt}>
                            <Box
                                component="img"
                                sx={{
                                    height: 255,
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={image.img}
                                alt={image.alt}
                            />
                        </div>
                    )}
                </Carousel>
            </AutoPlaySwipeableViews>
    );
}