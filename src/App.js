import React from 'react';
import { GlobalContextProvider } from './context/useGlobalContext';
// import PageV1 from './pages/PageV1';
import PageV2 from './pages/PageV2';

function App() {
  return (
    <GlobalContextProvider>
      {/* <PageV1 /> */}
      <PageV2 />
    </GlobalContextProvider>
  );
}

export default App;
