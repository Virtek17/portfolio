import { createContext, useState, useContext, ReactNode } from "react";

interface AppContextType {
  colorHEX: string;
  setColorHEX: (color: string) => void;

  textColorHEX: string;
  setTextColorHEX: (color: string) => void;

  decorColorHEX: string;
  setDecorColorHEX: (color: string) => void;

  clientName: string;
  setClientName: (clientName: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [colorHEX, setColorHEX] = useState("#ffffff00");
  const [textColorHEX, setTextColorHEX] = useState("#ffffff");
  const [decorColorHEX, setDecorColorHEX] = useState("#D143EA");
  const [clientName, setClientName] = useState("Аноноим");

  return (
    <AppContext.Provider
      value={{
        colorHEX,
        setColorHEX,
        textColorHEX,
        setTextColorHEX,
        decorColorHEX,
        setDecorColorHEX,
        clientName,
        setClientName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
