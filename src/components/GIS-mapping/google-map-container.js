import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useApplicationContext } from "../../context/app-context";
import { useRef, useState } from "react";

const Map = () => {
  const { results } = useApplicationContext();
  const [selectedMarker, setSelectedMarker] = useState(null);
  const markerRef = useRef(null);

  // const handleMarkerHover = (suburb) => {
  //   setSelectedMarker(suburb);
  // };

  // const handleMarkerClick = (suburb) => {
  //   if (selectedMarker === suburb) {
  //     setSelectedMarker(null);
  //   } else {
  //     setSelectedMarker(suburb);
  //   }
  // };

  return (
    <GoogleMap
      zoom={5}
      center={{ lat: -25.2744, lng: 133.7751 }}
      mapContainerClassName="map-container"
    >
      {results
        ? results.map((suburb) => {
            const latitude = parseInt(suburb.latitude);
            const longitude = parseInt(suburb.longitude);

            return (
              <>
                <Marker
                  position={{ lat: latitude, lng: longitude }}
                  onClick={() => setSelectedMarker(suburb)}
                />
              </>
            );
          })
        : ""}

      {selectedMarker && (
        <InfoWindow
          position={{
            lat: selectedMarker.latitude,
            lng: selectedMarker.longitude,
          }}
          onCloseClick={setSelectedMarker(null)}
        >
          <div>
            <h3>{selectedMarker.suburb_name}</h3>
            <p>A beautiful city by the bay.</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const GoogleMapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAmi5mJgION_Zh5w4HhNr3_0Sc0fANMIqg",
  });

  console.log(isLoaded);

  if (!isLoaded) return <div>Loading....</div>;
  return <Map />;
};

export default GoogleMapComponent;
