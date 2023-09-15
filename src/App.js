import React from "react";

import AppContext from "./components/Appcontex";
import Password from "./components/Password";
const App = () => {
  return (
    <AppContext>
      <Password />
    </AppContext>
  );
};

export default App;
