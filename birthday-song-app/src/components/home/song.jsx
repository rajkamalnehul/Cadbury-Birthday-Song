import React, { useEffect, useState } from "react";
import { generateSongWithGPT } from "../../services/generateSong";
import FilledButton from "../button/filledButton";

function Song() {
  const [loading, setLoading] = useState(false);
  const [generatedSong, setGeneratedSong] = useState("");

  const generateSong = () => {
    generateSongWithGPT("Sneha", "female", "desi")
      .then((data) => setGeneratedSong(data.content))
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="flex flex-col gap-3.5">
      <p className="text-center text-lg font-semibold">
        {loading
          ? `Your songs's lyrics is getting ready...`
          : `Your songs's lyrics are ready!`}
      </p>
      <div className="flex h-[60vh] overflow-scroll rounded-3xl bg-[#fff] text-[#000] p-6">
        {generatedSong}
      </div>
      <div className="flex justify-center">
        <FilledButton onClick={() => generateSong()} label={"Regenerate"} />
      </div>
    </div>
  );
}

export default Song;
