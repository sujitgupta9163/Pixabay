import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Images = () => {
  const { imageData } = useContext(PixabayContext);

  return (
    <div className="p-4">
      {/* Grid container with padding */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {imageData.map((image) => (
          <div
            key={image.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={image.largeImageURL}
              alt=""
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
