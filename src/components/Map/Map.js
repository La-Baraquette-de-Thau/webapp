
import {Icon} from 'leaflet';
import positionMarker from '../../assets/icn/positionMarker.svg';
import {
    MapContainer, Tooltip, TileLayer, LayerGroup, Marker, Polyline
} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import museumMarker from '../../assets/icn/museumMarker.svg';
import cityMarker from '../../assets/icn/cityMarker.svg';
import {Box, Typography} from "@mui/material";
import {useState} from "react";

const toIcon = {
    'museum' : museumMarker,
    'city' : cityMarker
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
            zoomControl={false}
            attributionControl={false}
        >
            <Box
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
            >
                <Typography color={'secondary.main'} fontWeight={'bold'}>
                    {distance(to) < 1 ? (distance(to) * 100) + ' m' : distance(to) + ' Km'}
                </Typography>
            </Box>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"/>
            {/*<TileLayer url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"/>*/}
            <LayerGroup>
                <Polyline pathOptions={{color: 'black', weight: 2, dashArray: '5,10'}} positions={[from, to.gps]} >
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