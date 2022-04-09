import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const style = { width: "100%", height: "100%", borderRadius: "12px" };
const position = { lat: 51.505, lng: -0.09 };

export default function Map() {
  return (
    <Container>
      <MapContainer center={position} zoom={13} style={style}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px 0px 10px 0px;
  height: 600px;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
`;
