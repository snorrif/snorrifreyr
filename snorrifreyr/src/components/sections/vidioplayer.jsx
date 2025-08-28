import { useState } from "react";
import YouTube from "react-youtube";

export function LazyYouTube({ videoId }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full cursor-pointer group" style={{ paddingBottom: "56.25%" }}>
      {!active ? (
        <>
          <img
            src={`https://i.ytimg.com/vi/jR3B0Wee3dY/hqdefault.jpg`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            loading="lazy"
            onClick={() => setActive(true)}
          />
          <button
            type="button"
            onClick={() => setActive(true)}
            className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-black/60 backdrop-blur text-white text-lg group-hover:scale-105 transition"
            style={{ aspectRatio: "1/1" }}
          >
            ▶
          </button>
        </>
      ) : (
        <YouTube
          videoId={videoId}
          className="absolute inset-0 w-full h-full"
          iframeClassName="rounded-xl"
          opts={{ playerVars: { autoplay: 1, mute: 1, rel: 0, modestbranding: 1 } }}
        />
      )}
    </div>
  );
}
