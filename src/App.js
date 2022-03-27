import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import { GlobalContextProvider } from './context/useGlobalContext';
import NotFound from './pages/NotFound';
import PageV1 from './pages/PageV1';
import PageV2 from './pages/PageV2';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/v2022/*" element={<PageV2 />} />
          <Route path="/v2020" element={<PageV1 />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
