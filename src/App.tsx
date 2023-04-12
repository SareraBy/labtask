import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {publicRoutes} from "../src/route";
import Navbarmain from "./components/Navbar";

function App() {
  return (
      <>
        <Navbarmain name={"Архитектура компютера"}/>
        <Routes>
        {publicRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Component/>}></Route>;
            }
        )}
    </Routes>
        </>
  );
}

export default App;
