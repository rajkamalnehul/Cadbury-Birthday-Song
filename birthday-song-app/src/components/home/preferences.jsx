import React, { useState } from "react";
import PreferenceImg from "../../assets/images/Headphone.png";
import FilledButton from "../button/filledButton";
import Rap from "../../assets/images/Rap.png";
import Rock from "../../assets/images/Rock.png";
import Pop from "../../assets/images/Pop.png";
import Desi from "../../assets/images/Desi.png";
import EDM from "../../assets/images/EDM.png";
import Happy from "../../assets/images/Happy.png";
import Romantic from "../../assets/images/Romantic.png";
import Funny from "../../assets/images/Funny.png";
import Motivational from "../../assets/images/Motivational.png";
import Calm from "../../assets/images/Calm.png";
import Male from "../../assets/images/Male.png";
import Female from "../../assets/images/Female.png";

const genre = [
  {
    genre: "Rap",
    image: Rap,
  },
  {
    genre: "Rock",
    image: Rock,
  },
  {
    genre: "Pop",
    image: Pop,
  },
  {
    genre: "Desi",
    image: Desi,
  },
  {
    genre: "EDM",
    image: EDM,
  },
];

const mood = [
  {
    mood: "Happy",
    image: Happy,
  },
  {
    mood: "Romantic",
    image: Romantic,
  },
  {
    mood: "Funny",
    image: Funny,
  },
  {
    mood: "Motivation",
    image: Motivational,
  },
  {
    mood: "Calm",
    image: Calm,
  },
];

const voice = [
  {
    voice: "Male",
    image: Male,
  },
  {
    voice: "Female",
    image: Female,
  },
];

function Preferences() {
  const [preferenceDetails, setpreferenceDetails] = useState({
    mood: "",
    genre: "",
    singerVoice: "",
  });

  const updatepreferenceDetails = (type, value) => {
    if (preferenceDetails[type] == value) {
      setpreferenceDetails({ ...preferenceDetails, [type]: "" });
    } else {
      setpreferenceDetails({ ...preferenceDetails, [type]: value });
    }
  };

  const handleSubmit = () => {
    const { isValid, errorMessage } = validatePreference();
    if (isValid) {
      console.log("form submitted successfully");
    } else {
      alert(errorMessage);
    }
  };

  const validatePreference = () => {
    let isValid = true;
    let errorMessage = "";

    if (preferenceDetails.genre == "") {
      errorMessage = "Select Genre";
      isValid = false;
    }

    return { isValid, errorMessage };
  };

  return (
    <div className="flex flex-col gap-4 pb-4 ">
      <div className="flex flex-col items-center">
        <p className="text-center text-lg font-semibold">
          What would you like their songs <br />
          vibe to be?
        </p>
        <img src={PreferenceImg} />
      </div>
      <div className="flex flex-col items-center rounded-2xl border-2 border-[#e7b464] overflow-hidden">
        <div className="w-full bg-[#e7b464] text-[#401272] py-2 text-lg font-semibold text-center">
          <span>Mood</span>
        </div>
        <div className="flex w-full justify-between gap-1 px-2 py-3.5">
          {mood.map((data) => (
            <div onClick={() => updatepreferenceDetails("mood", data.mood)}>
              <img
                src={data.image}
                className={`h-[55px] w-[55px] object-contain rounded-full ${
                  preferenceDetails.mood == data.mood
                    ? "bg-[#e7b464]"
                    : "bg-[#fff]"
                } p-1 cursor-pointer`}
              />
              <p className="text-xs text-center mt-2">{data.mood}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center rounded-2xl border-2 border-[#e7b464] overflow-hidden">
        <div className="w-full bg-[#e7b464] text-[#401272] py-2 text-lg font-semibold text-center">
          <span>Genre</span>
        </div>
        <div className="flex w-full justify-between gap-1 px-2 py-3.5">
          {genre.map((data) => (
            <div onClick={() => updatepreferenceDetails("genre", data.genre)}>
              <img
                src={data.image}
                className={`h-[55px] w-[55px] object-contain rounded-full ${
                  preferenceDetails.genre == data.genre
                    ? "bg-[#e7b464]"
                    : "bg-[#fff]"
                } p-1 cursor-pointer`}
              />
              <p className="text-xs text-center mt-2">{data.genre}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center rounded-2xl border-2 border-[#e7b464] overflow-hidden">
        <div className="w-full bg-[#e7b464] text-[#401272] py-2 text-lg font-semibold text-center">
          <span>Singer's Voice</span>
        </div>
        <div className="flex w-full  justify-center gap-4 px-2 py-3.5">
          {voice.map((data) => (
            <div onClick={() => updatepreferenceDetails("voice", data.voice)}>
              <img
                src={data.image}
                className={`h-[60px] w-[100px] object-contain rounded-lg ${
                  preferenceDetails.voice == data.voice
                    ? "bg-[#e7b464]"
                    : "bg-[#fff]"
                } p-1 cursor-pointer`}
              />
              <p className="text-xs text-center mt-2">{data.voice}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <FilledButton
          label={"Proceed"}
          className={"max-w-fit"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Preferences;
