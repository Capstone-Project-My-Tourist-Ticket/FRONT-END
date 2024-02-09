import { Marker } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

interface MapProps {
  draggable: boolean;
}

const Map = ({ draggable }: MapProps) => {
  return (
    <MapContainer
      style={{ height: "400px", width: "100wh" }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} draggable={draggable}></Marker>
    </MapContainer>
  );
};

export default Map;
