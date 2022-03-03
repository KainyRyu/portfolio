import React, { createContext, useContext } from 'react';

const GlobalContext = createContext();
function GlobalContextProvider({ children }) {
  const aValue = '';

  return <GlobalContext.Provider value={aValue}>{children}</GlobalContext.Provider>;
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext as default, GlobalContextProvider, useGlobalContext };
