import React, { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();
function GlobalContextProvider({ children }) {
  // TODO Theme
  // const [isDark, setIsDark] = useState(false)
  // TODO Translate
// const [language, setLanguage] = useState('eng')


  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        scrollPosition,
        // headerHeight,
        // setHeaderHeight
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext as default, GlobalContextProvider, useGlobalContext };
