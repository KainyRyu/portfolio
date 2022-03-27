import React, { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();
function GlobalContextProvider({ children }) {
  const [headerHeight, setHeaderHeight] = useState(0);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ scrollPosition, headerHeight, setHeaderHeight }}>
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext as default, GlobalContextProvider, useGlobalContext };
