import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const MapComponent = () => {
  const mapCenter = [-25.2744, 133.7751]; // Center of Australia
  const zoomLevel = 6; // Zoom level to start with

  return (
    <MapContainer
      center={mapCenter}
      zoom={zoomLevel}
      style={{ width: "100%", height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Add other map layers, markers, or overlays as needed */}
    </MapContainer>
  );
};

export default MapComponent;
