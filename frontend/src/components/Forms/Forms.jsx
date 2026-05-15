import React, { useEffect, useRef, useState } from "react";
import Bg from "./FormImgs/Bg.svg";
import FormArrow from "./FormImgs/FormArrow.svg";
import FormX from "./FormImgs/FormX.svg";
import logo from "../../assets/imgs/logo.svg";
import sphere from './FormImgs/sphere.svg'

const servicesList = [
  "UI/UX Design",
  "Brand Identity",
  "Web Development",
  "Marketing",
  "Consultation",
  "SEO",
];

const Forms = () => {
  const timeRef = useRef(null);

  const dateRef = useRef(null);

  const [step, setStep] = useState(1);

  const [showServices, setShowServices] = useState(false);

  const dropdownRef = useRef(null);

  const [submittedData, setSubmittedData] = useState([]);

  const [formData, setFormData] = useState({
    companyType: "Startup",

    fullName: "",
    contact: "",
    position: "",

    companyName: "",
    companyLink: "",
    email: "",

    services: [],
    budget: "",
    date: "",
    time: "",
  });

  // -----------------------------------
  // CLOSE DROPDOWN OUTSIDE CLICK
  // -----------------------------------

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowServices(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // -----------------------------------
  // HANDLE INPUTS
  // -----------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------------
  // TOGGLE SERVICES
  // -----------------------------------

  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);

      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  // -----------------------------------
  // VALIDATIONS
  // -----------------------------------

  const isStepOneValid =
    formData.fullName && formData.contact && formData.position;

  const isStepTwoValid =
    formData.companyName && formData.companyLink && formData.email;

  const isStepThreeValid =
    formData.services.length > 0 &&
    formData.budget &&
    formData.date &&
    formData.time;

  // -----------------------------------
  // SUBMIT
  // -----------------------------------

  const handleSubmit = () => {
    const finalData = {
      ...formData,
      submittedAt: new Date(),
    };

    setSubmittedData((prev) => [...prev, finalData]);

    console.log("FINAL FORM OBJECT :", finalData);

    setStep(4);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* MODAL */}

      {step == 1 && (
        <div>
          <h1 className="text-[55px] leading-[48px] font-bold text-center text-[hsla(238,_78%,_16%,_1)] mb-[30px]">
            Lets Get You
            <br />
            Started.
          </h1>
          {/* COMPANY TYPE */}
          <div className="flex justify-center gap-[5px] mb-[33px]">
            {["Startup", "Brand", "Enterprise"].map((type) => (
              <button
                key={type}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    companyType: type,
                  }))
                }
                className={`
                    w-[100px] h-[50px] rounded-[21.6px] text-[12px] font-manrope font-semibold    transition-all duration-300
                    ${
                      formData.companyType === type
                        ? "bg-[hsla(238,_78%,_16%,_1)] text-white"
                        : "bg-white/10 hover:bg-white/20 text-[hsla(238,_78%,_16%,_1)]"
                    }
                  `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {step == 2 && (
        <div>
          {/* TOP BUTTONS */}
          <div className="flex justify-between mb-8 gap-[312px]">
            <button
              onClick={() => setStep(1)}
              className="topBtn cursor-pointer"
            >
              <img src={FormArrow} alt="Go back" />
            </button>

            <button
              onClick={() => setStep(1)}
              className="topBtn cursor-pointer"
            >
              <img src={FormX} alt="Close" />
            </button>
          </div>
          <div>
            <h1 className="text-[55px] leading-[42px] font-semibold font-bold text-center text-[hsla(238,_78%,_16%,_1)] mb-[22px]">
              Growth Partner For
              <br />
              Global Reach
            </h1>
            <p className="text-center text-[#595C85] font-manrope font-[700] text-[15px cursor-pointer] mb-8">
              Your Request Has Been Received.
            </p>
          </div>
        </div>
      )}

      {step == 3 && (
        <div>
          <div className="flex justify-between mb-8 gap-[312px]">
            <button
              onClick={() => setStep(2)}
              className="topBtn cursor-pointer"
            >
              <img src={FormArrow} alt="Go back" />
            </button>

            <button
              onClick={() => setStep(1)}
              className="topBtn cursor-pointer"
            >
              <img src={FormX} alt="Close" />
            </button>
          </div>
          <div>
            <h1 className="text-[55px] leading-[42px] font-semibold font-bold text-center text-[hsla(238,_78%,_16%,_1)] mb-[22px]">
              Quick Consultation
              <br />
              Preferences
            </h1>
            <p className="text-center text-[#595C85] font-manrope font-[700] text-[15px cursor-pointer] mb-8">
              Your Request Has Been Received.
            </p>
          </div>
        </div>
      )}
      <div
        className={`
        w-[410px]
        h-[311px]
        max-w-[620px]
        rounded-[36px]
        p-[20px 15px]
        text-white
        flex
        justify-center
        items-center
        relative
        ${step === 4 ? "" : "bg-[#cfe3ff]/30"}
        ${step === 4 ? "" : "backdrop-blur-2xl"}
      `}
      >
        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div className="flex flex-col gap-[12px]">
              <div className="bg-[hsla(0,0%,100%,0.4)] w-[370px] h-[83px] p-[20px] rounded-[25px] flex flex-col gap-[8px]">
                <p className="text-[12px] text-[hsla(238,78%,16%,1)] font-manrope font-[700]">
                  Full Name
                </p>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  // className="inputStyle"
                  className="w-full border-none outline-none bg-transparent placeholder:text-black/50 text-[hsla(238,78%,16%,1)] text-[15px] font-manrope font-[600]"
                />
              </div>

              <div className="bg-[hsla(0,0%,100%,0.4)] w-[370px] h-[83px] p-[20px] rounded-[25px] flex flex-col gap-[8px]">
                <p className="text-[12px] text-[hsla(238,78%,16%,1)] font-manrope font-[700]">
                  Contact
                </p>
                <input
                  type="text"
                  name="contact"
                  placeholder="Enter Contact"
                  value={formData.contact}
                  onChange={handleChange}
                  // className="inputStyle"
                  className="w-full border-none outline-none bg-transparent placeholder:text-black/50 text-[hsla(238,78%,16%,1)] text-[15px] font-manrope font-[600]"
                />
              </div>

              <div className="bg-[hsla(0,0%,100%,0.4)] w-[370px] h-[83px] p-[20px] rounded-[25px] flex flex-col gap-[8px]">
                <p className="text-[12px] text-[hsla(238,78%,16%,1)] font-manrope font-[700]">
                  Job Position
                </p>
                <input
                  type="text"
                  name="position"
                  placeholder="Enter Job Position"
                  value={formData.position}
                  onChange={handleChange}
                  // className="inputStyle"
                  className="w-full border-none outline-none bg-transparent placeholder:text-black/50 text-[hsla(238,78%,16%,1)] text-[15px] font-manrope font-[600]"
                />
              </div>
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div className="flex flex-col gap-[12px] ">
              <div className="bg-[hsla(0,0%,100%,0.4)] w-[370px] h-[83px] p-[20px] rounded-[25px] flex flex-col gap-[8px]">
                <p className="text-[12px] text-[hsla(238,78%,16%,1)] font-manrope font-[700]">
                  Comapany Name
                </p>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  // className="inputStyle"
                  className="w-full border-none outline-none bg-transparent placeholder:text-black/50 text-[hsla(238,78%,16%,1)] text-[15px] font-manrope font-[600]"
                />
              </div>

              <div className="bg-[hsla(0,0%,100%,0.4)] w-[370px] h-[83px] p-[20px] rounded-[25px] flex flex-col gap-[8px]">
                <p className="text-[12px] text-[hsla(238,78%,16%,1)] font-manrope font-[700]">
                  Comapany Link
                </p>
                <input
                  type="text"
                  name="companyLink"
                  placeholder="Enter Company Link"
                  value={formData.companyLink}
                  onChange={handleChange}
                  // className="inputStyle"
                  className="w-full border-none outline-none bg-transparent placeholder:text-black/50 text-[hsla(238,78%,16%,1)] text-[15px] font-manrope font-[600]"
                />
              </div>

              <div className="bg-[hsla(0,0%,100%,0.4)] w-[370px] h-[83px] p-[20px] rounded-[25px] flex flex-col gap-[8px]">
                <p className="text-[12px] text-[hsla(238,78%,16%,1)] font-manrope font-[700]">
                  E-Mail
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="inputStyle"
                  className="w-full border-none outline-none bg-transparent placeholder:text-black/50 text-[hsla(238,78%,16%,1)] text-[15px] font-manrope font-[600]"
                />
              </div>
            </div>

            {/* {isStepTwoValid && (
              <button onClick={() => setStep(3)} className="primaryBtn mt-8">
                Next
              </button>
            )} */}
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <div>
              {/* SERVICES + DROPDOWN */}
              <div className="relative mb-4" ref={dropdownRef}>
                {/* SELECT BOX */}

                <div
                  onClick={() => setShowServices(!showServices)}
                  className="
                inputStyle
                cursor-pointer
            
                bg-[hsla(0,0%,100%,0.4)] w-[370px] h-[83px] p-[20px] rounded-[25px] flex flex-col gap-[8px]
              "
                >
                  <div>
                    <p className="text-[12px] text-[hsla(238,78%,16%,1)] font-manrope font-[700] mb-[5px]">
                      Select Services
                    </p>

                    <p className="w-full border-none outline-none bg-transparent text-black/50 text-[15px] font-manrope font-[600]">
                      {formData.services.length > 0
                        ? formData.services.join(", ")
                        : "Multiple Selections"}
                    </p>
                  </div>

                  {/* <div
                    className="
                  w-[45px]
                  h-[45px]
                  rounded-full
                  bg-white/20
                  flex items-center justify-center
                "
                  >
                    +
                  </div> */}
                </div>

                {/* DROPDOWN */}
                {showServices && (
                  <div
                    className="
                  absolute
                  -top-3
                  left-[120%]
                  w-[379px]
                  h-[307px]
                  overflow-y-scroll
                  rounded-[28px]
                  bg-[#cfe3ff]/30
                  backdrop-blur-2xl
                  dropdown
                  
                  p-5
                  z-50
                  flex flex-col gap-3
                "
                  >
                    {servicesList.map((service) => {
                      const active = formData.services.includes(service);

                      return (
                        <button
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`
                        px-4 py-3 text-[15px] font-[600] font-manrope rounded-2xl text-left transition-all
                        ${
                          active
                            ? "bg-[#0A1B72] text-white"
                            : " text-[hsla(0,0%,0%,0.5)] hover:bg-white/20"
                        }
                      `}
                        >
                          <p
                            className={`text-[12px] font-manrope font-[700] ${active ? "text-[hsla(255,255%,100%,0.5)]" : "text-[hsla(238,78%,16%,1)]"} `}
                          >
                            Select Services
                          </p>
                          {service}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* BUDGET */}
              {/* <input
                type="number"
                name="budget"
                placeholder="Budget Range"
                value={formData.budget}
                onChange={handleChange}
                className="inputStyle mb-4"
              /> */}

              <div className="bg-[hsla(0,0%,100%,0.4)] w-[370px] h-[83px] p-[20px] rounded-[25px] flex flex-col gap-[8px]">
                <p className="text-[12px] text-[hsla(238,78%,16%,1)] font-manrope font-[700]">
                  Budget
                </p>
                <input
                  type="number"
                  name="budget"
                  placeholder="Budget Range"
                  value={formData.budget}
                  onChange={handleChange}
                  // className="inputStyle"
                  className="w-full border-none outline-none bg-transparent placeholder:text-black/50 text-[hsla(238,78%,16%,1)] text-[15px] font-manrope font-[600]"
                />
              </div>

              {/* DATE + TIME */}
              <div className="grid grid-cols-2 gap-4 mt-[12px]">
                {/* <div>
                  <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="bg-red-300 w-[184px] h-[83px] p-[20px] rounded-[25px] flex flex-col gap-[8px] border-none outline-none bg-transparent placeholder:text-black/50 text-[hsla(238,78%,16%,1)] text-[15px] font-manrope font-[600] clendar-hide"
                />
              </div> */}

                <div
                  onClick={() => dateRef.current.showPicker()}
                  className="
    w-[184px]
    h-[83px]
    p-[20px]
    rounded-[25px]
    bg-[hsla(0,0%,100%,0.4)]
    cursor-pointer
    flex flex-col
    gap-[8px]
  "
                >
                  <p className="text-[12px] font-[700] text-[hsla(238,78%,16%,1)] font-manrope">
                    Date
                  </p>

                  <input
                    ref={dateRef}
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="
      w-full
      bg-transparent
      border-none
      outline-none
      text-[15px]
      font-[600]
      text-[hsla(0,0%,0%,0.5)]
      pointer-events-none
      font-manrope
      font-[600]
      text-[15px]
      calendar-hide
    "
                  />
                </div>

                {/* <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="inputStyle"
                /> */}
                <div
                  onClick={() => timeRef.current.showPicker()}
                  className="
    w-[184px]
    h-[83px]
    p-[20px]
    rounded-[25px]
    bg-[hsla(0,0%,100%,0.4)]
    cursor-pointer
    flex flex-col
    gap-[8px]
    
  "
                >
                  <p className="text-[12px] font-[700] text-[hsla(238,78%,16%,1)] font-manrope">
                    Time
                  </p>

                  <input
                    ref={timeRef}
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="
      w-full
      bg-transparent
      border-none
      outline-none
      text-[15px]
      font-[600]
      text-[hsla(0,0%,0%,0.5)]
      font-manrope
      pointer-events-none
      time-hide
      
      
    "
                  />
                </div>
              </div>
            </div>

            {/* SUBMIT */}
          </>
        )}

        {/* THANK YOU */}
        {step === 4 && (
          <div className="flex flex-col items-center gap-[83px]">
            <div className="text-[hsla(238,78%,16%,1)] flex flex-col items-center gap-[5px] ">
              <img src={logo} alt="Logo" className="w-[45px]" />
              <h1 className="font-bold text-[62.36px]">Thank You</h1>
              <p  className="text-center  font-manrope font-[700] text-[15px]">Your request has been received. Our<br />team will contact you shortly.</p>
            </div>

            <div className="text-center flex flex-col items-center gap-[5px] ">
              <div className="w-[410px] h-[212px] rounded-[40px] bg-[hsla(0,0%,100%,0.4)] p-[15px_12px]">
                <img src={sphere} alt="Sphere" />
              </div>


            <button
              onClick={() => setStep(1)}
              className="
              w-[124px] h-[50px] rounded-[20px]
              bg-white text-black
              font-bold font-[700] mt-[20px] flex justify-center items-center gap-[5px]
            "
            >
              {/* <img src={FormX} alt="Close" className="w-50%" /> */}
              <span className=" text-[hsla(238,78%,16%,1)] text-[22.97px] font-bold -mt-[3px]">x</span> 
              <p className="text-[22.97px] text-[hsla(238,78%,16%,1)]">Close</p>
            </button>
          </div>
          </div>
        )}
      </div>

      {/* {step == 1 && isStepOneValid && (
        <button
          onClick={() => setStep(2)}
          className="primaryBtn mt-8 bg-[hsla(345,100%,96%,0.12)] w-[410px] h-[60px] rounded-[23px] text-[24px] text-white cursor-pointer"
        >
          <p>
            [<span className="font-bold">Next</span>]
          </p>
        </button>
      )} */}
      {/* <button
        onClick={() => setStep(2)}
        disabled={!isStepOneValid}
        className={`primaryBtn mt-8 bg-[hsla(345,100%,96%,0.12)] 
  w-[410px] h-[60px] rounded-[23px] text-[24px] text-white
  transition-opacity duration-300
  ${
    isStepOneValid
      ? "opacity-100 cursor-pointer"
      : "opacity-0 pointer-events-none"
  }`}
      >
        <p>
          [<span className="font-bold">Next</span>]
        </p>
      </button> */}
      <div className="w-[410px] h-[60px] relative">
        <button
          onClick={() => setStep(2)}
          disabled={!isStepOneValid}
          className={`primaryBtn mt-8 bg-[hsla(345,100%,96%,0.12)] 
  w-[410px] h-[60px] rounded-[23px] text-[24px] text-white
  transition-opacity duration-300 absolute top-0 left-0
  ${
    step === 1 && isStepOneValid
      ? "opacity-100 cursor-pointer"
      : "opacity-0 pointer-events-none"
  }`}
        >
          <p>
            [<span className="font-bold">Next</span>]
          </p>
        </button>
        {step == 2 && isStepTwoValid && (
          <button
            onClick={() => setStep(3)}
            className="primaryBtn mt-8 bg-[hsla(345,100%,96%,0.12)] w-[410px] h-[60px] rounded-[23px] text-[24px] text-white cursor-pointer absolute top-0 left-0"
          >
            <p>
              [<span className="font-bold">Next</span>]
            </p>
          </button>
        )}

        {step == 3 && (
          <button
            disabled={!isStepThreeValid}
            onClick={handleSubmit}
            className={`
              className="primaryBtn mt-8 w-[410px] h-[60px] rounded-[23px] text-[24px] text-white cursor-pointer absolute top-0 left-0"
              ${
                isStepThreeValid
                  ? "bg-[hsla(238,78%,16%,1)]"
                  : "bg-white/20 cursor-not-allowed text-white/40"
              }
            `}
          >
            <p>
              [<span className="font-bold">Submit</span>]
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Forms;
