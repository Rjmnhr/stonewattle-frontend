import React from "react";

const HorizontalBarRentVsOwner = ({ rent, owner }) => {
  const total = rent + owner;
  const rentPercentage = (rent / total) * 100;
  const ownerPercentage = (owner / total) * 100;

  const barStyle = {
    display: "flex",
    height: "20px",
    backgroundColor: "lightgray",
    borderRadius: "5px",
    overflow: "hidden",
  };

  const rentBarStyle = {
    width: `${rentPercentage}%`,
    backgroundColor: "#1677ff",
    textAlign: "center",
    padding: "5px",
    color: "white",
    fontSize: "10px",
  };

  const ownerBarStyle = {
    width: `${ownerPercentage}%`,
    backgroundColor: "gray",
    textAlign: "center",
    padding: "5px",
    color: "white",
    fontSize: "10px",
  };

  return (
    <div style={{ width: "100px" }}>
      <div style={barStyle}>
        <div style={rentBarStyle}>{` ${rentPercentage}%`}</div>
        <div style={ownerBarStyle}>{`${ownerPercentage}%`}</div>
      </div>
    </div>
  );
};

export default HorizontalBarRentVsOwner;
