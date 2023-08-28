import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useApplicationContext } from "../../context/app-context";
import { useEffect, useMemo, useState } from "react";
// import { useEffect } from "react";

const Map = () => {
  const { results, filteredResults } = useApplicationContext();
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [suburbArr, setSuburbArr] = useState(null);

  // const [map, setMap] = useState(null);

  const blueMarker =
    "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1692286859/yzs3vsevclgrgslxaxli.png";
  const greenMarker =
    "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1692286299/g4apcqcgznwt30wmnnqq.png";
  const orangeMarker =
    "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1692286914/jfhuede7cj911nl1wlu4.png";
  const redMarker =
    "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1692286947/elc11cbtr4ornbtfb8b3.png";

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

  useEffect(() => {
    if (results) {
      if (results && !filteredResults) {
        setSuburbArr(results);
      } else {
        setSuburbArr(filteredResults);
      }
    }
  }, [results, filteredResults, suburbArr]);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (results) {
      if (results && !filteredResults) {
        if (isLoggedIn === "true") {
          setSuburbArr(results);
        } else {
          const firstThreeObjects = results.slice(0, 3);
          setSuburbArr(firstThreeObjects);
        }
      } else {
        if (isLoggedIn === "true") {
          setSuburbArr(filteredResults);
        } else {
          const firstThreeObjects = filteredResults.slice(0, 3);
          setSuburbArr(firstThreeObjects);
        }
      }
    }
  }, [results, filteredResults, isLoggedIn]);

  const zoomInt = filteredResults ? 4 : 5;

  return (
    <GoogleMap
      zoom={zoomInt}
      center={initialMapCenter}
      mapContainerStyle={{
        width: "100%",
        height: `${filteredResults ? "70vh" : "90vh"}`,
      }}
      // onLoad={handleMapLoad}
    >
      {suburbArr
        ? suburbArr.map((suburb) => {
            // const latitude = parseInt(suburb.latitude);
            // const longitude = parseInt(suburb.longitude);

            return (
              <>
                <Marker
                  key={suburb.suburb_id} // Add a unique key to each marker
                  position={{ lat: suburb.latitude, lng: suburb.longitude }}
                  icon={{
                    url: `${
                      suburb.rankingPercentage > 80
                        ? greenMarker
                        : suburb.rankingPercentage > 60
                        ? orangeMarker
                        : suburb.rankingPercentage > 40
                        ? blueMarker
                        : redMarker
                    }`,
                  }}
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
