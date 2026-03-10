import React, { PropsWithChildren, createContext, useEffect } from "react";

type ColorModeContextType = {
  mode: "light" | "dark";
  setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const setColorMode = () => {
    // no-op: app is always dark
  };

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode: "dark",
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

