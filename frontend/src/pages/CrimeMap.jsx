import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import HeatLayer from "../components/HeatLayer";

function CrimeMap({ crimes }) {
    return (
        <MapContainer
            center={[13.0827, 80.2707]}
            zoom={11}
            style={{ height: "600px", width: "100%" }}
        >
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Heatmap */}
            <HeatLayer crimes={crimes} />

            {/* Crime Markers */}
            {crimes
    .filter(crime => crime.latitude != null && crime.longitude != null)
    .map((crime) => (
    <Marker
        key={crime.id}
        position={[crime.latitude, crime.longitude]}
    >
                    <Popup>
                        <b>{crime.crimeType}</b>
                        <br />
                        District: {crime.district}
                        <br />
                        Date: {crime.crimeDate}
                        <br />
                        Time: {crime.crimeTime}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default CrimeMap;