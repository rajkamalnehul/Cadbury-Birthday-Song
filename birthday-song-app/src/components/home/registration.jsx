import React, { useState, useRef } from "react";
import CelebrationImg from "../../assets/images/celebration.png";
import FilledInput from "../input/filledInput";
import FilledButton from "../button/filledButton";
import RadioInput from "../input/radioInput";
import { validateEmail, validatePhone } from "../../utils/validations";
import { updateDetails } from "../../store/slices/userDetails";
import { updateTab } from "../../store/slices/tab";
import { useDispatch } from "react-redux";
import Dialog from "../dialog";

function Registration() {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const dispatch = useDispatch();
  const [registrationDetails, setRegistrationDetails] = useState({
    phone: "",
    userName: "",
    email: "",
    terms: false,
    promotions: false,
    otp: "",
  });

  console.log(registrationDetails);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const updateRegistrationDetails = (type, value) => {
    setRegistrationDetails({ ...registrationDetails, [type]: value });
  };

  const handleSubmit = () => {
    const { isValid, errorMessage } = validateRegistration();
    if (isValid) {
      setIsDialogOpen(true);
    } else {
      alert(errorMessage);
    }
  };

  const handleChange = (index, e) => {
    const { value } = e.target;
    const newOtpValue =
      registrationDetails.otp.slice(0, index) +
      value +
      registrationDetails.otp.slice(index + 1);
    updateRegistrationDetails("otp", newOtpValue);
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, e) => {
    const { value } = e.target;
    if (e.key === "Backspace" && index > 0) {
      const newOtpValue =
        registrationDetails.otp.slice(0, index) +
        value +
        registrationDetails.otp.slice(index + 1);
      updateRegistrationDetails("otp", newOtpValue);
      if (e.target.value === "") {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleSubmitOtp = () => {
    const { isValid, errorMessage } = validateRegistration();
    if (isValid) {
      if (registrationDetails.otp == "1234") {
        dispatch(updateDetails(registrationDetails));
        dispatch(updateTab("details"));
      } else {
        alert("Incorrect OTO");
        setIsDialogOpen(true);
      }
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
    } else if (registrationDetails.userName.trim() === "") {
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
    <>
      <Dialog
        onClose={() => setIsDialogOpen(false)}
        open={isDialogOpen}
        contentClass={"h-auto w-[95%] bg-[#fff] p-6 rounded-xl "}
      >
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold text-[#401272] text-center">
            Enter OTP
          </p>

          <div className="flex justify-between">
            {Array.from({ length: 4 }, (_, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleBackspace(index, e)}
                className={`w-[60px] h-[65px] !outline-none  text-2xl font-semibold text-center text-[#fff] p-2 rounded-lg bg-[#401272]`}
              />
            ))}
          </div>
          <p className="text-xl font-semibold text-[#401272] text-end underline">
            Resend OTP
          </p>
          <div className="flex justify-center">
            <FilledButton
              label={"Submit"}
              className={"max-w-fit"}
              onClick={handleSubmitOtp}
            />
          </div>
        </div>
      </Dialog>

      <div className="flex flex-col gap-3 pb-4 ">
        <div className="flex flex-col items-center">
          <img src={CelebrationImg} />
          <p className="text-center text-lg font-semibold">
            Register to create
          </p>
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
          value={registrationDetails.userName}
          onChange={(e) =>
            updateRegistrationDetails("userName", e.target.value)
          }
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
              I accept Terms & Conditions and Privacy Policy of Mondelez
              (Cadbury)
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
    </>
  );
}

export default Registration;
