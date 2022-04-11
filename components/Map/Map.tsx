import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import ZoomToCountry from "./ZoomToCountry";
import Circles from "./Circles";
import Styled from "./styles";
import { initialZoom, position, style } from "./constants";

export default function Map() {
  return (
    <Styled.Container>
      <MapContainer center={position} zoom={initialZoom} style={style}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomToCountry />
        <Circles />
      </MapContainer>
    </Styled.Container>
  );
}
