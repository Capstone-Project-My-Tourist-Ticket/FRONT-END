import { LatLngTuple } from "leaflet";
import { Marker } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

interface MapProps {
  draggable: boolean;
  latitude: number;
  longitude: number;
}

const Map = (props: MapProps) => {
  const { draggable, latitude, longitude } = props;

  const position: LatLngTuple = [latitude, longitude];

  return (
    <div className="w-full z-10">
      <MapContainer
        style={{ height: "400px", width: "100vw" }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} draggable={draggable}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
