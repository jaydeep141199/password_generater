import { React, useContext} from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContct } from "./Appcontex";
const Password = () => {
  const {darkMode,
    setDarkMode,
    range,
    setrange,
    password,
    setpassword,
    includeUppercase,
    setIncludeUppercase,
    includeLowercase,
    setIncludeLowercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    strvalue,
    setstrvalue}=useContext(AppContct)
  const numbers = "0123456789";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const spacialcharactr = '!@#$%^&*()~?":|/<>{}[]';
  const calculateStrength = () => {
    const criteria = {
      length: 8,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    };

    let selectedCriteria = 0;

    if (password.length >= criteria.length) {
      selectedCriteria++;
    }

    if (criteria.uppercase && /[A-Z]/.test(password)) {
      selectedCriteria++;
    }

    if (criteria.lowercase && /[a-z]/.test(password)) {
      selectedCriteria++;
    }

    if (criteria.numbers && /\d/.test(password)) {
      selectedCriteria++;
    }

    if (criteria.symbols && /[!@#$%^&*()_+\-=[\]{}|;:',.<>?]/.test(password)) {
      selectedCriteria++;
    }

    return selectedCriteria;
  };

  const renderPasswordStrengthRange = () => {
    const rangeItems = [];
    const strengthLevel = Math.min(Math.floor(range / 4), 5);
  
    for (let i = 0; i < 5; i++) {
      const strength = i < strengthLevel ? '■' : '□';
  
      rangeItems.push(
        <span
          key={i}
          className="text-sky-600 h-10 w-9 inline-flex items-center justify-center"
          style={{ fontSize: '45px' }}
        >
          {strength}
        </span>
      );
    }
  
    return rangeItems;
  };
  

  const handelchangerange = (e) => {
    const value = e.target.value;
    setrange(value);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const hanelgeneratepassword = (e) => {
    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      alert("please select any checkbox");
    }
    let characterList = "";
    if (includeLowercase) {
      characterList = characterList + lowercaseLetters;
    }
    if (includeUppercase) {
      characterList = characterList + uppercaseLetters;
    }
    if (includeNumbers) {
      characterList = characterList + numbers;
    }
    if (includeSymbols) {
      characterList = characterList + spacialcharactr;
    }

    setpassword(createPassword(characterList));
    Strength();
  };
  const createPassword = (characterList) => {
    let password = "";
    let characterlistslength = characterList.length;

    for (let i = 0; i < range; i++) {
      const charactreindex = Math.round(Math.random() * characterlistslength);
      password = password + characterList.charAt(charactreindex);
    }
    return password;
  };

  const copytext = () => {
    alert(`"${password}" value is copy !!`);
  };

  const Strength = () => {
    let selectedCriteria = 0;

    if (includeLowercase) {
      selectedCriteria++;
    }
    if (includeUppercase) {
      selectedCriteria++;
    }
    if (includeNumbers) {
      selectedCriteria++;
    }
    if (includeSymbols) {
      selectedCriteria++;
    }

    let strength = "";

    if (selectedCriteria === 1) {
      strength = "Very Low";
    } else if (selectedCriteria === 2) {
      strength = "Low";
    } else if (selectedCriteria === 3) {
      strength = "Strong";
    } else if (selectedCriteria === 4) {
      strength = "Very Strong";
    }

    setstrvalue(strength);
  };

  return (
    <>
      {" "}
      <div
        className={`${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        } transition-colors duration-500`}
      >
        <div className="">
          <div className="container  flex  flex-col justify-center items-center py-24">
            <div className="heading  font-bold text-2xl">
              <h2>Password generater</h2>
            </div>

            <div className="flex items-center justify-center my-2">
              <button
                onClick={toggleDarkMode}
                className={`${
                  darkMode ? "bg-blue-500 text-white" : "bg-white text-black"
                } rounded-full border border-zinc-600 p-2`}
              >
                {darkMode ? (
                  <span role="img" aria-label="moon">
                    &#9728;
                  </span>
                ) : (
                  <span role="img" aria-label="sun">
                    &#127769;
                  </span>
                )}
              </button>
            </div>
            <div className="input bg-gray-500 my-2 flex justify-between w-[620px]">
              <h3 id=" font-bold text-2xl ">{password}</h3>
              <button className="border-2 rounded-md border-orange-600  h-10 w-10">
                <FontAwesomeIcon
                  icon={faCopy}
                  style={{ color: "brown  " }}
                  onClick={copytext}
                />
              </button>
            </div>
            <div className="bg-gray-500  px-5">
              <div className="range ">
                <div className="flex justify-between mx-5 py-2">
                  <p>Character</p>
                  <p className="font-bold">{range}</p>
                </div>
                <input
                  type="range"
                  id="vol"
                  name="vol"
                  min="0"
                  max="20"
                  onChange={handelchangerange}
                  className=" w-full accent-orange-800"
                ></input>
              </div>
              <div className="checkbox ">
                <div className="ucheckboxes">
                  <input
                    type="checkbox"
                    name="Uppercase"
                    id="Uppercase"
                    className="accent-red-400"
                    checked={includeUppercase}
                    onChange={(e) => {
                      setIncludeUppercase(e.target.checked);
                    }}
                    style={{ height: "20px", width: "20px" }}
                  />
                  <label htmlFor="Uppercase" className="ml-2">
                    Uppercase
                  </label>
                </div>
                <div className="ucheckboxes">
                  <input
                    type="checkbox"
                    name="lowercase"
                    id="lowercase"
                    className="accent-red-400"
                    checked={includeLowercase}
                    onChange={(e) => {
                      setIncludeLowercase(e.target.checked);
                    }}
                    style={{ height: "20px", width: "20px" }}
                  />
                  <label htmlFor="lowercase" className="ml-2">
                    lowercase
                  </label>
                </div>
                <div className="ucheckboxes">
                  <input
                    type="checkbox"
                    name="number"
                    className="accent-red-400"
                    id="number"
                    checked={includeNumbers}
                    onChange={(e) => {
                      setIncludeNumbers(e.target.checked);
                    }}
                    style={{ height: "20px", width: "20px" }}
                  />
                  <label htmlFor="number" className="ml-2">
                    numbers
                  </label>
                </div>
                <div className="ucheckboxes">
                  <input
                    type="checkbox"
                    name="symbols"
                    id="symbols"
                    className="accent-red-400"
                    checked={includeSymbols}
                    onChange={(e) => {
                      setIncludeSymbols(e.target.checked);
                    }}
                    style={{ height: "20px", width: "20px" }}
                  />
                  <label htmlFor="symbols" className="ml-2">
                    symbols
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <h2 className="mr-2">Strength:</h2>

                <div>
                  {" "}
                  <span className="font-bold mr-2">{strvalue}</span>
                  <span >{renderPasswordStrengthRange()}</span>
                </div>
              </div>
              <div className="generater">
                <button
                  className="bg-red-400 text-white px-64 py-2 my-2 font-bold"
                  onClick={hanelgeneratepassword}
                >
                  {" "}
                  Generater
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Password;
