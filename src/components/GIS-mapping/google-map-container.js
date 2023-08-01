import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const suburbData = [
  {
    name: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    name: "Melbourne",
    latitude: -37.8136,
    longitude: 144.9631,
  },
  {
    name: "Brisbane",
    latitude: -27.4698,
    longitude: 153.0251,
  },
  {
    name: "Perth",
    latitude: -31.9505,
    longitude: 115.8605,
  },
  // Add more suburb data as needed
];

const Map = () => {
  console.log(suburbData);
  return (
    <GoogleMap
      zoom={5}
      center={{ lat: -25.2744, lng: 133.7751 }}
      mapContainerClassName="map-container"
      mapContainerStyle={{
        width: "80vw",
        height: "70vh",
      }}
    >
      {suburbData.map((suburb) => {
        console.log(suburb);
        return (
          <Marker position={{ lat: suburb.latitude, lng: suburb.longitude }} />
        );
      })}
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
