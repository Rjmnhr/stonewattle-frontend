import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useApplicationContext } from "../../context/app-context";
import { useMemo, useState } from "react";
import { useEffect } from "react";

const Map = () => {
  const { results } = useApplicationContext();
  const [selectedMarker, setSelectedMarker] = useState(null);
  // const [suburbArr, setSuburbArr] = useState(null);

  // const [map, setMap] = useState(null);

  // const blueMarker =
  //   "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1692033138/ozbnlfw22rksefhsd8fn.png";
  // const greenMarker =
  //   "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1692032795/imka2voeexu46awtdwkg.png";
  // const orangeMarker =
  //   "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1692032982/hogi7wlzldpzndw4hkgk.png";
  // const redMarker =
  //   "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1691995119/gxjfq8xhsfcmngqewkur.png";

  const initialMapCenter = useMemo(
    () => ({ lat: -25.2744, lng: 133.7751 }),
    []
  );

  // const handleMapLoad = (mapInstance) => {
  //   setMap(mapInstance);
  // };

  // const handleInfoWindowClick = (suburb, zoom) => {
  //   if (map) {
  //     map.panTo({ lat: suburb.latitude, lng: suburb.longitude });
  //     map.setZoom(zoom);
  //   }
  // };

  // useEffect(() => {
  //   if (results) {
  //     if (results && !filteredResults) {
  //       setSuburbArr(results);
  //     } else {
  //       setSuburbArr(filteredResults);
  //     }
  //   }
  // }, [results, filteredResults, suburbArr]);

  return (
    <GoogleMap
      zoom={5}
      center={initialMapCenter}
      mapContainerClassName="map-container"
      // onLoad={handleMapLoad}
    >
      {results
        ? results.map((suburb) => {
            // const latitude = parseInt(suburb.latitude);
            // const longitude = parseInt(suburb.longitude);

            return (
              <>
                <Marker
                  key={suburb.suburb_id} // Add a unique key to each marker
                  position={{ lat: suburb.latitude, lng: suburb.longitude }}
                  // icon={{
                  //   url: `${
                  //     suburb.rankingPercentage > 80
                  //       ? greenMarker
                  //       : suburb.rankingPercentage > 60
                  //       ? orangeMarker
                  //       : suburb.rankingPercentage > 40
                  //       ? blueMarker
                  //       : redMarker
                  //   }`,
                  // }}
                  onClick={() => {
                    setSelectedMarker(suburb);
                  }}
                  // onMouseOver={() => setSelectedMarker(suburb)}
                  // onMouseOut={() => setSelectedMarker(null)}
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
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div className="container text-start pt-2">
            <p className="fw-bold">Suburb: {selectedMarker.suburb_name}</p>
            <p>Postcode: {selectedMarker.postcode}</p>
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
