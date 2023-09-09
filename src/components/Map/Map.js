
import {Icon} from 'leaflet';
import positionMarker from '../../assets/icn/positionMarker.svg';
import {
    MapContainer, Tooltip, TileLayer, LayerGroup, Marker, Polyline
} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function Map({ to }) {
    const from = [43.434449, 3.605627]
    const fromIcon = new Icon({
        iconUrl: positionMarker,
        iconSize: [25, 25]
    });
    const toIcon = new Icon({
        iconUrl: to.icon,
        iconSize: [25, 25]
    });

    // const distance = () => {
    //     const From = L.latLng(from[0], from[1]);
    //     const To = L.latLng(to.gps[0], to.gps[1]);
    //     console.log(from.distanceTo(to) / 1000)
    //     return from.distanceTo(to) / 1000;
    // };
    // const centers = useMemo(() =>
    //     const From = L.latLng(from[0], from[1]);
    //     const To = L.latLng(to.gps[0], to.gps[1]);
    //     return From.getCenter(To)
    // , [data]);

    // console.log(distance);
    // console.log(centers);

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
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"/>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"/>
            <LayerGroup>
                <Marker position={to.gps} icon={toIcon}>
                    <Tooltip direction="bottom" offset={[0, 15]} opacity={1} permanent>
                        {to.name}
                    </Tooltip>
                </Marker>
                <Polyline pathOptions={{color: 'black'}} positions={[from, to.gps]} >
                    {/*<Tooltip direction="bottom" offset={[0, 15]} opacity={1} permanent>*/}
                    {/*    gite*/}
                    {/*</Tooltip>*/}
                </Polyline>
                <Marker position={from} icon={fromIcon}>
                    <Tooltip direction="bottom" offset={[0, 15]} opacity={1} permanent>
                        Gîte
                    </Tooltip>
                </Marker>
            </LayerGroup>
        </MapContainer>
    );
};