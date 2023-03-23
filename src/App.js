import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import HomeScreen from "./components/home-screen/HomeScreen";

function App() {
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;
