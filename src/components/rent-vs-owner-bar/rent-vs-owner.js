import React from "react";
import { RentVsOwnerStyled } from "./rent-vs-owner-style";

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
  };

  const ownerBarStyle = {
    width: `${ownerPercentage}%`,
    backgroundColor: "gray",
    textAlign: "center",
    padding: "5px",
    color: "white",
  };

  return (
    <>
      <RentVsOwnerStyled>
        <div className="main-container">
          <div className="bar-style" style={barStyle}>
            <div
              className="rent-bar-style"
              style={rentBarStyle}
            >{` ${rentPercentage}%`}</div>
            <div
              className="owner-bar-style"
              style={ownerBarStyle}
            >{`${ownerPercentage}%`}</div>
          </div>
        </div>
      </RentVsOwnerStyled>
    </>
  );
};

export default HorizontalBarRentVsOwner;
