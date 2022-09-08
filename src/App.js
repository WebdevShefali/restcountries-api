import "./App.css";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import { useState } from "react";

function App(props) {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
    }
  };
  return (
    <Router>
      <Header mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Countries mode={mode} toggleMode={toggleMode} />}
        />
        <Route
          exact
          path="/Countries/:name"
          element={<Country mode={mode} toggleMode={toggleMode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
