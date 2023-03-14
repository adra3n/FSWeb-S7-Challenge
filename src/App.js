import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <h1>Teknolojik Yemekler</h1>
      <p>Burdaki kodu silip kendi headerınızı ekleyebilirsiniz</p>
      <Routes>
        <Route path="/pizza" element={<Form />} />
      </Routes>
    </>
  );
};
export default App;
