
import {Icon} from 'leaflet';
import positionMarker from '../../assets/icn/positionMarker.svg';
import {
    MapContainer, Tooltip, TileLayer, LayerGroup, Marker
} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export default function Map({ data }) {
    const positionIcon = new Icon({
        iconUrl: positionMarker,
        iconSize: [25, 25]
    });

    return (
        <MapContainer
            key={Date.now()}
            center={[43.434292, 3.605804]}
            zoom={data.zoom}
            style={{height: '100%', width: '100%'}}
            scrollWheelZoom={false}
            zoomControl={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <LayerGroup>
                <Marker position={data.bounds} icon={positionIcon}>
                    <Tooltip direction="bottom" offset={[0, 15]} opacity={1} permanent>
                        {data.name}
                    </Tooltip>
                </Marker>
                <Marker position={[43.434449, 3.605627]} icon={positionIcon}>
                    <Tooltip direction="bottom" offset={[0, 15]} opacity={1} permanent>
                        Gîte
                    </Tooltip>
                </Marker>
            </LayerGroup>
        </MapContainer>
    );
};