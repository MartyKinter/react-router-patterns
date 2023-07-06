import './App.css';
import React from "react";
import SiteRoutes from "./SiteRoutes";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
