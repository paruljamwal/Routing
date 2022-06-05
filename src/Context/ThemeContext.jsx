import { createContext, useState } from "react";

export const ThemeCreate = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handelTheme = (e) => {
     setTheme(theme==="dark"?"light":"dark")
  };

  return (
    <ThemeCreate.Provider
      value={{ theme, handelTheme }}
    >
      {children}
    </ThemeCreate.Provider>
  );
};
