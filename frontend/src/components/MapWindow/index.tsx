import './style.css';
import 'leaflet/dist/leaflet.css';

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';


export default function MapWindow() {
    // mockup markerss
    let markers = [
        {
            id: 1, 
            geocode: [-15.850185273780339, -48.045515879471154], 
            popUp: "pop up 1" 
        },
        {
            id: 2, 
            geocode: [-15.766017356250508, -48.14490377495004], 
            popUp: "pop up 2" 
        },
        {
            id: 3, 
            geocode: [-15.756524800646051, -47.890074448731994], 
            popUp: "pop up 3" 
        },
        {
            id: 4, 
            geocode: [-15.575410439143921, -47.59397497889195], 
            popUp: "pop up 4" 
        },
        
    ];

    const markerIcon = new Icon({
        iconUrl: "https://www.svgrepo.com/show/376955/map-marker.svg",
        iconSize: [38, 38]
    })

    return (
        <MapContainer className="map-container" center={[-15.8324288,-48.055718]} zoom={13}>
            <TileLayer
                attribuition='&copy; <a href="/copyright">Contribuidores do OpenStreetMap</a> ♥ <a href="https://supporting.openstreetmap.org" class="donate-attr">Faça uma doação</a>. <a href="https://wiki.osmfoundation.org/wiki/Terms_of_Use">Termos do site e API</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers.map((marker) => (
                <Marker className="map-conteiner-marker" markerkey={marker.id} position={marker.geocode} icon={markerIcon}>
                    <Popup className="map-conteiner-popup">{marker.popUp}</Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

