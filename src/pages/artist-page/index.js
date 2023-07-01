import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import { ArtistPageStyled } from "./style";
import { Arts } from "../../components/arts/arts";

const ArtistPage = () => {
  return (
    <>
      <ArtistPageStyled>
        <NavBar />
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
          <div className="arts-collection">
            {Arts.map((art) => {
              return (
                <>
                  <div key={art.id} className="art-content">
                    <h3>Art Name</h3>
                    <img src={art.url} alt="" />
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
          <h1
            style={{
              textAlign: "start",
              padding: "10px",
              paddingLeft: "20px",
              margin: "0px 0px",
            }}
          >
            Artist Profile
          </h1>

          <div className="artist">
            <img
              src="https://res.cloudinary.com/dsw1ubwyh/image/upload/v1687711958/g4un1iwopghegxyvjshx.jpg"
              alt=""
            />
            <div>
              <h1>Risheet Mazumdar</h1>
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
        </div>
      </ArtistPageStyled>
    </>
  );
};

export default ArtistPage;
