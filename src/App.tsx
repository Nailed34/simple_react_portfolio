import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageSceneClient } from "./types/pageNavigation";
import { Header } from "./pages/components/Header/Header";

import "./App.css";


const App = () => {
  const pages = PageSceneClient.getScenes();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {pages.map((e) => (
            <Route key={e.type} path={e.path} element={<e.page />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
