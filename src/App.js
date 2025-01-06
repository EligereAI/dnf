import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DtcList from './components/DtcList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DtcList />} />
      <Route
        path="/troubleshoot/:id"
        element={<div className="text-center mt-10">Troubleshoot Page</div>}
      />
    </Routes>
  );
};

export default App;
