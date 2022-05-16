import React from 'react';
import {
    MapContainer,
    TileLayer,
    Polygon
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';



function Mapa() {
    return (
      <div className='mapa'>
          <MapContainer center={[6.217,  -75.567 ]} zoom={13} scrollWheelZoom={true}>
                  <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
          </MapContainer>
      </div>
    );
}

export default Mapa;
