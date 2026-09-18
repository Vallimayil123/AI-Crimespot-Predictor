import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";

function HeatLayer({ crimes }) {

    const map = useMap();

    useEffect(() => {

        if (!crimes || crimes.length === 0) return;

        const heatPoints = crimes
    .filter(crime => crime.latitude != null && crime.longitude != null)
    .map(crime => [
        crime.latitude,
        crime.longitude,
        1
    ]);
    if (heatPoints.length === 0) return;

        const heat = L.heatLayer(heatPoints, {
            radius: 30,
            blur: 25,
            maxZoom: 17
        });

        heat.addTo(map);

        return () => {
            map.removeLayer(heat);
        };

    }, [crimes, map]);

    return null;
}

export default HeatLayer;