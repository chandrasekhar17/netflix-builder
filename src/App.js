import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function App() {
  const user = { chandu: 1 };
  return (
    <div className="app">
      <Router>
        <Routes>
          {user ? (
            <Route exact path="/" element={<HomeScreen />}></Route>
          ) : (
            <Route exact path="/" element={<Login />}></Route>
          )}
        </Routes>
      </Router>
      {/* <HomeScreen /> */}
    </div>
  );
}

export default App;
