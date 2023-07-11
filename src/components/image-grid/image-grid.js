import React from "react";
import { ImageGridStyled } from "./image-grid-style";

export const images = [
  {
    id: 0,
    src: "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688367629/oplwq8o0lnqwerpjxl11.jpg",
    width: "100%",
    height: "100%",
  },
  {
    id: 1,
    src: "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688379240/vmpfl5y1syjnklkqhpcc.jpg",
    width: "100%",
    height: "100%",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688379180/fjzapvytinzenza6cxhw.jpg",
    width: " 100%",
    height: "100%",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688379311/euo6xokvpih570mblubo.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688378853/ceq4kcwiwp6jgs4t7smx.jpg",
    width: "100%",
    height: "100%",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1688379657/vvdrtrp3haxjdmxtaoih.jpg",
    width: "100%",
    height: "100%",
  },
  // Add more image objects as needed
];

const ImageGrid = () => {
  return (
    <>
      <ImageGridStyled>
        <div className="image-collection">
          <div className="image-grid">
            <div className="tile-1">
              <div className="image-container" data-name="Image Name">
                <img
                  className="card"
                  src={images[0].src}
                  style={{
                    width: `${images[0].width}`,
                    height: `${images[0].height}`,
                  }}
                  alt=""
                />
              </div>
              <div className="image-container" data-name="Image Name">
                <img
                  className="card"
                  src={images[1].src}
                  style={{
                    width: `${images[1].width}`,
                    height: `${images[1].height}`,
                  }}
                  alt=""
                ></img>
              </div>
            </div>
            <div className="tile-2">
              <div className="image-container" data-name="Image Name">
                <img
                  className="card"
                  src={images[2].src}
                  style={{
                    width: `${images[2].width}`,
                    height: `${images[2].height}`,
                  }}
                  alt=""
                ></img>
              </div>
              <div className="image-container" data-name="Image Name">
                <img
                  className="card"
                  src={images[3].src}
                  style={{
                    width: `${images[3].width}`,
                    height: `${images[3].height}`,
                  }}
                  alt=""
                ></img>
              </div>
            </div>
            <div className="tile-3">
              <div className="image-container" data-name="Image Name">
                <img
                  className="card"
                  src={images[4].src}
                  style={{
                    width: `${images[4].width}`,
                    height: `${images[4].height}`,
                  }}
                  alt=""
                ></img>
              </div>
              <div className="image-container" data-name="Image Name">
                <img
                  className="card"
                  src={images[5].src}
                  style={{
                    width: `${images[5].width}`,
                    height: `${images[5].height}`,
                  }}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </ImageGridStyled>
    </>
  );
};

export default ImageGrid;
