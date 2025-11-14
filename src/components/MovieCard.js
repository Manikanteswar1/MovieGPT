import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieid,onClick }) => {

  if (!posterPath) return;
  return (
    <div className="w-32 md:w-48 pr-4 overflow-hidden rounded-md">
      <div
      className="w-32 md:w-48 p-2 cursor-pointer hover:scale-110 transition-transform duration-300"
      onClick={() => onClick(movieid)}
    >
        <img
          className="rounded-md"
          alt="Movie card"
          src={IMG_CDN_URL + posterPath}
        />
      </div>
    </div>
  );
};

export default MovieCard;
