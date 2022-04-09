import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Circles from "./Circles";
import Styled from "./styles";
import { position, style } from "./constants";

export default function Map() {
  return (
    <Styled.Container>
      <MapContainer center={position} zoom={3} style={style}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circles />
      </MapContainer>
    </Styled.Container>
  );
}
