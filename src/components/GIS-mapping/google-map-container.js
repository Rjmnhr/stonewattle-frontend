import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useApplicationContext } from "../../context/app-context";

const Map = () => {
  const { results } = useApplicationContext();

  return (
    <GoogleMap
      zoom={5}
      center={{ lat: -25.2744, lng: 133.7751 }}
      mapContainerClassName="map-container"
    >
      {results
        ? results.map((suburb) => {
            console.log(suburb);
            const latitude = parseInt(suburb.latitude);
            const longitude = parseInt(suburb.longitude);

            return <Marker position={{ lat: latitude, lng: longitude }} />;
          })
        : ""}
      <Marker position={{ lat: -38.3380167, lng: 141.6041331 }} />
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
