import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Menu from './components/Menu';
import TextForm from './components/TextForm';
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, alerttype) => {
    setAlert({
      message : message,
      alerttype: alerttype
    })
    setTimeout(() => {
      setAlert([null]);
    }, 4000);

  }
  return (
    <>
    <BrowserRouter>
      <Menu />
      <div className="container mt-3 ">
      <Alert alert={alert} />
      <Routes>
            <Route
              exact path="/"
              element={
                <TextForm heading="Enter The Text To Analyze" showAlert={showAlert} />
              }
            ></Route>

            <Route exact path="/about" element={<About/>}></Route>
          </Routes>
        
        
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
