
import {Icon} from 'leaflet';
import positionMarker from '../../assets/icn/positionMarker.svg';
import {
    MapContainer, Tooltip, TileLayer, LayerGroup, Marker, Polyline
} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import museumMarker from '../../assets/icn/museumMarker.svg';
import cityMarker from '../../assets/icn/cityMarker.svg';
import groceryMarker from '../../assets/icn/groceryMarker.svg';
import movieMarker from '../../assets/icn/movieMarker.svg';
import festivalMarker from '../../assets/icn/festivalMarker.svg';
import restaurantMarker from '../../assets/icn/restaurantMarker.svg';
import waterMarker from '../../assets/icn/waterMarker.svg';
import icecreamMarker from '../../assets/icn/icecreamMarker.svg';
import {Stack, Typography} from "@mui/material";
import {DirectionsBike} from "@mui/icons-material";
import {useState} from "react";

const toIcon = {
    'museum' : museumMarker,
    'city' : cityMarker,
    'grocery' : groceryMarker,
    'movie' : movieMarker,
    'festival' : festivalMarker,
    'water' : waterMarker,
    'restaurant' : restaurantMarker,
    'icecream' : icecreamMarker
}

export default function Map({ to }) {
    const from = [43.434449, 3.605627]
    const fromIcon = new Icon({
        iconUrl: positionMarker,
        iconSize: [25, 25]
    });
    const toIconDisplay = new Icon({
        iconUrl: toIcon[to.icon],
        iconSize: [25, 25]
    });

    const distance = (data) => {
        const From = L.latLng(from[0], from[1]);
        const To = L.latLng(data.gps[0], data.gps[1]);
        return Math.round((From.distanceTo(To) / 1000) * 100) / 100;
    };

    return (
        <MapContainer
            key={Date.now()}
            center={to.center}
            zoom={to.zoom}
            style={{height: '100%', width: '100%'}}
            scrollWheelZoom={false}
            zoomControl={true}
            attributionControl={false}
            dragging={false}
            doubleClickZoom={false}
            boxZoom={false}
            keyboard={false}
            tap={false}
            touchZoom={false}
        >
            <Stack
                px={1}
                py={0.5}
                borderRadius={1.5}
                sx={{
                    backgroundColor: 'primary.main',
                    opacity: 0.65,
                    position: 'absolute',
                    top: 10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000
                }}
                flexDirection={'row'}
                gap={2}
                alignItems={'center'}
            >
                <Typography color={'secondary.main'} fontWeight={'bold'}>
                    {distance(to) < 1 ? (distance(to) * 100) + ' m' : distance(to) + ' Km'}
                </Typography>
                {to.bikeAccess && <DirectionsBike color={'secondary'} />}
            </Stack>
            <MapDescription text={to.description} />
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"/>
            {/*<TileLayer url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"/>*/}
            <LayerGroup>
                <Polyline pathOptions={{color: 'black', weight: 2, dashArray: '5,10'}} positions={[from, to.gps]}>
                    <Marker position={from} icon={fromIcon} alt={'Position icon'}>
                        <Tooltip direction="bottom" offset={[0, 15]} opacity={1} permanent>
                            Gîte
                        </Tooltip>
                    </Marker>
                    <Marker position={to.gps} icon={toIconDisplay}>
                        <Tooltip direction="bottom" offset={[0, 15]} opacity={1} permanent>
                            {to.name}
                        </Tooltip>
                    </Marker>
                </Polyline>
            </LayerGroup>
        </MapContainer>
    );
};

function MapDescription({ text }) {
    const [displayDescription, setDisplayDescription] = useState(false);

    return(
        <Stack
            width={'80%'} px={2} py={1} borderRadius={1.5} flexDirection={'row'} alignItems={'center'} gap={2}
            sx={{
                backgroundColor: 'primary.main',
                opacity: 0.75,
                position: 'absolute',
                bottom: 10,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000
            }}
        >
            <Typography textAlign={'justify'} color={'secondary.main'} sx={{whiteSpace: displayDescription ? 'none' : 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {text}
            </Typography>
            <Typography
                onClick={() => setDisplayDescription(!displayDescription)}
                color={'third.main'}
                fontSize={'1rem'}
                fontWeight={'bold'}
                sx={{
                    '&:hover': {
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    },
                }}
            >
                {displayDescription ? 'Masquer' : 'Développer'}
            </Typography>
        </Stack>
    );
}