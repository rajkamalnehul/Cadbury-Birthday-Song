import React, { useState } from "react";
import CelebrationImg from "../../assets/images/celebration.png";
import FilledInput from "../input/filledInput";
import FilledButton from "../button/filledButton";
import RadioInput from "../input/radioInput";
import { validateEmail, validatePhone } from "../../utils/validations";

function Registration() {
  const [registrationDetails, setRegistrationDetails] = useState({
    phone: "",
    name: "",
    email: "",
    terms: false,
    promotions: false,
    otp: "",
  });

  const updateRegistrationDetails = (type, value) => {
    setRegistrationDetails({ ...registrationDetails, [type]: value });
  };

  const handleSubmit = () => {
    const { isValid, errorMessage } = validateRegistration();
    if (isValid) {
      console.log("form submitted successfully");
    } else {
      alert(errorMessage);
    }
  };

  const validateRegistration = () => {
    let isValid = true;
    let errorMessage = "";

    if (!validatePhone(registrationDetails.phone)) {
      errorMessage = "Phone number is not valid";
      isValid = false;
    } else if (registrationDetails.name.trim() === "") {
      errorMessage = "Enter your name";
      isValid = false;
    } else if (!validateEmail(registrationDetails.email)) {
      errorMessage = "Email is not valid";
      isValid = false;
    } else if (!registrationDetails.terms) {
      errorMessage = "Please accept Terms and Conditions";
      isValid = false;
    }

    return { isValid, errorMessage };
  };

  return (
    <div className="flex flex-col gap-3 pb-4 ">
      <div className="flex flex-col items-center">
        <img src={CelebrationImg} />
        <p className="text-center text-lg font-semibold">Register to create</p>
      </div>
      <FilledInput
        label={"Phone Number"}
        type={"tel"}
        value={registrationDetails.phone}
        onChange={(e) => updateRegistrationDetails("phone", e.target.value)}
      />
      <FilledInput
        label={"Full Name"}
        type={"text"}
        value={registrationDetails.name}
        onChange={(e) => updateRegistrationDetails("name", e.target.value)}
      />
      <FilledInput
        label={"Email ID"}
        type={"email"}
        value={registrationDetails.email}
        onChange={(e) => updateRegistrationDetails("email", e.target.value)}
      />
      <div className="flex flex-col gap-4 mx-4 ">
        <div className="flex items-center gap-4">
          <RadioInput
            isChecked={registrationDetails.terms}
            onClick={(e) =>
              updateRegistrationDetails("terms", !registrationDetails.terms)
            }
          />
          <span className="text-sm">
            I accept Terms & Conditions and Privacy Policy of Mondelez (Cadbury)
          </span>
        </div>
        <div className="flex items-center gap-4">
          <RadioInput
            isChecked={registrationDetails.promotions}
            onClick={(e) =>
              updateRegistrationDetails(
                "promotions",
                !registrationDetails.promotions
              )
            }
          />
          <span className="text-sm">
            I would like to recieve promotional communication from Mondelez
            (Cadbury)
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <FilledButton
          label={"Submit"}
          className={"max-w-fit"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Registration;
