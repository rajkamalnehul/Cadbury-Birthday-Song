import React, { useState } from "react";
import GiftImg from "../../assets/images/cap&gift.png";
import FilledInput from "../input/filledInput";
import FilledButton from "../button/filledButton";
import CustomSelect from "../dropdown/customSelect";
import { updateDetails } from "../../store/slices/userDetails";
import { updateTab } from "../../store/slices/tab";
import { useDispatch } from "react-redux";

const ageOptions = [
  {
    key: "0-10 Years",
    value: "0-10",
  },
  {
    key: "10-20 Years",
    value: "10-20",
  },
  {
    key: "20-30 Years",
    value: "20-30",
  },
  {
    key: "30-40 Years",
    value: "30-40",
  },
  {
    key: "40-50 Years",
    value: "40-50",
  },
  {
    key: "50-60 Years",
    value: "50-60",
  },
  {
    key: "60-70 Years",
    value: "60-70",
  },
];

const genderOptions = [
  {
    key: "Male",
    value: "male",
  },
  {
    key: "Female",
    value: "female",
  },
];

function Details() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const updateLocalDetails = (type, value) => {
    setDetails({ ...details, [type]: value });
  };

  const handleSubmit = () => {
    const { isValid, errorMessage } = validateDetails();
    if (isValid) {
      dispatch(updateDetails(details));
      dispatch(updateTab("preferences"));
    } else {
      alert(errorMessage);
    }
  };

  const validateDetails = () => {
    let isValid = true;
    let errorMessage = "";

    if (details.name.trim() === "") {
      errorMessage = "Enter your name";
      isValid = false;
    } else if (details.age === "") {
      errorMessage = "Select Age";
      isValid = false;
    } else if (details.gender === "") {
      errorMessage = "Select Gender";
      isValid = false;
    }

    return { isValid, errorMessage };
  };

  return (
    <div className="flex flex-col gap-3.5 pb-4 ">
      <div className="flex flex-col items-center">
        <p className="text-center text-lg font-semibold">
          Tell us about your loved one...
        </p>
        <img src={GiftImg} />
      </div>
      <div>
        <p className="text-center text-lg font-semibold mb-2">Their name</p>
        <FilledInput
          label={"xxxx xxxxx"}
          type={"text"}
          value={details.name}
          onChange={(e) => updateLocalDetails("name", e.target.value)}
        />
      </div>
      <div>
        <p className="text-center text-lg font-semibold mb-2">
          How old they'll be this birthday
        </p>
        <CustomSelect
          className={"text-[#401272] font-semibold"}
          onChange={(e) => updateLocalDetails("age", e.target.value)}
          label={"Select Age"}
          options={ageOptions}
          value={details.age}
        />
      </div>
      <div>
        <p className="text-center text-lg font-semibold mb-2">Gender</p>
        <CustomSelect
          className={"text-[#401272] font-semibold"}
          onChange={(e) => updateLocalDetails("gender", e.target.value)}
          label={"Select Gender"}
          options={genderOptions}
          value={details.gender}
        />
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

export default Details;
