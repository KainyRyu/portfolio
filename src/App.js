import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalContextProvider } from './context/useGlobalContext';
import PageV1 from './pages/PageV1';
import PageV2 from './pages/PageV2';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/v2022/*" element={<PageV2 />} />
          <Route path="/v2020" element={<PageV1 />} />
          <Route path="/*" element={<Navigate replace to="/v2022" />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
