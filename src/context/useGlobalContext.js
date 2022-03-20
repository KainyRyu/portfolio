import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();
function GlobalContextProvider({ children }) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const aValue = '';

  return (
    <GlobalContext.Provider value={{ aValue, headerHeight, setHeaderHeight }}>
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext as default, GlobalContextProvider, useGlobalContext };
