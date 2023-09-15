import React, { createContext ,useState} from "react";

export const AppContct = createContext();

const AppContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [range, setrange] = useState(20);
  const [password, setpassword] = useState("");
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [strvalue, setstrvalue] = useState("");

  return (
    <>
    
      
      <AppContct.Provider value={
        {darkMode,
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
        setstrvalue}
      }>{children}</AppContct.Provider>
    </>
  );
};
export default AppContext;

