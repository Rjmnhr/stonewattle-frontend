import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ children }) => (
  <div style={{ width: "200px", height: "100px", background: "red" }}>
    {children}
  </div>
);

const MapComponent = () => {
  const defaultProps = {
    center: {
      lat: -25.2744,
      lng: 133.7751,
    },
    zoom: 5,
  };

  const sydneyCoords = [
    // Replace with the coordinates of the Sydney area
    { lat: -33.8688, lng: 151.2093 },
    // Add more coordinates to form a polygon that covers the Sydney area
    // For example, add points for the corners of the Sydney area or its boundary
  ];

  // const customMapStyle = [
  //   // Replace with your custom style JSON from the Google Maps Styling Wizard
  //   {
  //     elementType: "geometry",
  //     stylers: [
  //       {
  //         color: "#f8f8f8", // Red color for the whole area
  //       },
  //     ],
  //   },
  //   // Add more styles here if needed
  // ];

  const onGoogleMapLoaded = (map, maps) => {
    const path = sydneyCoords.map(
      (point) => new maps.LatLng(point.lat, point.lng)
    );

    const polygon = new maps.Polygon({
      paths: path,
      fillColor: "#ff0000",
      fillOpacity: 0.2,
      strokeWeight: 0,
    });

    polygon.setMap(map);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAmi5mJgION_Zh5w4HhNr3_0Sc0fANMIqg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // options={{ styles: customMapStyle }}
        onGoogleApiLoaded={({ map, maps }) => onGoogleMapLoaded(map, maps)}
      >
        <AnyReactComponent
          lat={-33.865143}
          lng={151.2099}
          children={"MArker"}
        />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
