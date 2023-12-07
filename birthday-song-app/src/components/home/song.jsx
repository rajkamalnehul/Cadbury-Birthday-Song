import React from "react";
import { generateSongWithGPT } from "../../services/generateSong";
import FilledButton from "../button/filledButton";
import { updateDetails } from "../../store/slices/userDetails";
import { useDispatch } from "react-redux";
import { useDetailsSelector } from "../../store/selectors/details";

function Song() {
  const dispatch = useDispatch();
  const details = useDetailsSelector();

  const generateSong = (name, gender, genre) => {
    dispatch(updateDetails({ loading: true }));
    generateSongWithGPT(name, gender, genre)
      .then((data) => {
        dispatch(
          updateDetails({ generatedSong: data.content, loading: false })
        );
      })
      .catch((err) => {
        dispatch(updateDetails({ loading: false }));
        alert(err);
      });
  };

  return (
    <div className="flex flex-col gap-3.5">
      <p className="text-center text-lg font-semibold">
        {details.loading
          ? `Your songs's lyrics is getting ready...`
          : `Your songs's lyrics are ready!`}
      </p>
      <div className="flex h-[60vh] overflow-y-scroll rounded-3xl bg-[#fff] text-[#000] p-6">
        {details.generatedSong}
      </div>
      <div className="flex justify-center">
        <FilledButton
          onClick={() => generateSong()}
          label={"Regenerate"}
          disabled={details.loading}
        />
      </div>
    </div>
  );
}

export default Song;
