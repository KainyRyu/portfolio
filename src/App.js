import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalContextProvider } from './context/useGlobalContext';
import Ver2020 from './pages/Ver2020';
import Ver2022 from './pages/Ver2022';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/v2022/*" element={<Ver2022 />} />
          <Route path="/v2020" element={<Ver2020 />} />
          <Route path="/*" element={<Navigate replace to="/v2022" />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
