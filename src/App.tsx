import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {publicRoutes} from "../src/route";

function App() {
  return (
    <Routes>
        {publicRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Component/>}></Route>;
            }
        )}
    </Routes>
  );
}

export default App;
