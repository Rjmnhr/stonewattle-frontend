import React, { useEffect, useMemo, useState } from "react";

import { ArtistPageStyled } from "./style";

import NavBarArtist from "../../components/nav-bar-artist/nav-bar-artist";
import ImageGrid, { images } from "../../components/image-grid/image-grid";

const ArtistPage = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688367629/oplwq8o0lnqwerpjxl11.jpg"
  );
  const image = useMemo(
    () => [
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688367629/oplwq8o0lnqwerpjxl11.jpg",
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688379240/vmpfl5y1syjnklkqhpcc.jpg",
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688379180/fjzapvytinzenza6cxhw.jpg",
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688379311/euo6xokvpih570mblubo.jpg",
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688378853/ceq4kcwiwp6jgs4t7smx.jpg",
    ],
    []
  );
  const [transition, setTransition] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setTimeout(() => {
        const index = image.indexOf(imageSrc);
        const nextIndex = (index + 1) % image.length;
        setImageSrc(image[nextIndex]);
        setTransition(false);
      }, 500); // Wait for the transition to complete before changing the image
    }, 4000);
    return () => clearInterval(interval);
  }, [imageSrc, image]);
  return (
    <>
      <ArtistPageStyled>
        <NavBarArtist />
        <div className="artist-page">
          <div className="display">
            <h1>
              Art is not a mirror held up to reality but a hammer with which to
              shape it.
            </h1>

            <img
              src="https://res.cloudinary.com/dsw1ubwyh/image/upload/v1687701079/xhqth5szzg7oyzidhfln.png"
              alt=""
            />
          </div>
          <div className="display2">
            <div className="container-image">
              <img
                src={imageSrc}
                alt=""
                className={`image-transition ${transition ? "active" : ""}`}
              />
            </div>
          </div>
          <div className="nav-cards">
            <div className="card-1">
              <h1>SHOP NOW</h1>
            </div>
            <div className="card-2">
              <h1>ARTIST PROFILE</h1>
            </div>
            <div className="card-3">
              <h1>RISHEET</h1>
            </div>
            <div className="card-4">
              <h1>LICENSING</h1>
            </div>
          </div>
          <div className="arts-collection">
            {images.map((art) => {
              return (
                <>
                  <div key={art.id} className="art-content">
                    <h3>Art Name</h3>
                    <img src={art.src} alt="" />
                    <div
                      style={{ padding: "10px" }}
                      className="art-details"
                    ></div>
                  </div>
                </>
              );
            })}
            ""
          </div>
          <h1>Artist Profile</h1>

          <div className="artist">
            <img
              src="https://res.cloudinary.com/dsw1ubwyh/image/upload/v1687711958/g4un1iwopghegxyvjshx.jpg"
              alt=""
            />
            <div>
              <h1 style={{ paddingLeft: "0" }}>Risheet Mazumdar</h1>
              <p>
                {" "}
                An artist is a person able to put their point of view, their way
                of seeing the world and feel things on a canvas, a sheet or
                paper. An artist is a dreamer, is a poet, he is a speaker, is
                someone provided with sensibility sufficient or necessary to
                make us see things through their eyes.
              </p>

              <button>Learn More</button>
            </div>
          </div>
          <div style={{ textAlign: "start" }}>
            <h1>RISHEET MAZUMDAR FINE ARTS</h1>
            <ImageGrid />
          </div>
        </div>
      </ArtistPageStyled>
    </>
  );
};

export default ArtistPage;
