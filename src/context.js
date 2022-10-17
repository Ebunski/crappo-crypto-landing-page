import React, { useContext, createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(AppContext);
}
