import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
