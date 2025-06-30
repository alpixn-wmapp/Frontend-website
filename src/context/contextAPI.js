import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appIdea, setAppIdea] = useState("");
  const [themeType, setThemeType] = useState("Dark Theme");
  const [colorPalette, setColorPalette] = useState([]);
  const [theme, setTheme] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  return (
    <AppContext.Provider
      value={{
        appIdea,
        setAppIdea,
        themeType,
        setThemeType,
        colorPalette,
        setColorPalette,
        theme,
        setTheme,
        selectedFeatures,
        setSelectedFeatures,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
