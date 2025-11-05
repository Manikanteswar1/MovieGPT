import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect, useRef } from "react";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const isMuted = useSelector((store) => store.video.isMuted);
  const iframeRef = useRef(null);
  useMovieTrailer(movieId);
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: isMuted ? "mute" : "unMute",
        }),
        "*"
      );
    }
  }, [isMuted]);
  return (
    <div className="w-screen">
      <iframe
       ref={iframeRef}
        className="w-screen aspect-video"
        // src={
        //   "https://www.youtube.com/embed/" +
        //   // trailerVideo?.key +
        //   "ZiHXY16zd9c"+       //youtube video id for salaar edit
        //   "?&autoplay=1&mute=1&rel=0&controls=0&loop=1&playlist=ZiHXY16zd9c"
        // }
        src={
          "https://www.youtube.com/embed/ZiHXY16zd9c" +
          "?enablejsapi=1&autoplay=1&mute=1&rel=0&controls=0&loop=1&playlist=ZiHXY16zd9c"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
