import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={MainPage} exact />
    </div>
  );
}

export default App;
