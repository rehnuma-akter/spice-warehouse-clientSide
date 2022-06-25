import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const ContactUs = () => {
        return (
            <div>
                
                <MapContainer center={[24.895660842184107, 91.86855397416386]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[24.895660842184107, 91.86855397416386]}>
                    <Popup>
                        You are here!!!
                    </Popup>
                </Marker>
                </MapContainer>
                <div>
                    <input type="text" />
                    <input type="text" />

                </div>
            </div>
        );
}

export default ContactUs;