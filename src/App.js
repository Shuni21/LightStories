import React, { useState } from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Album from "./components/Album"
import "./App.css";

function App() {
  const [section, setSection] = useState("Главное");

  return (
    <div className="App">
      {section === "Главное" && <Header setSection={setSection} />}
      {section === "О нас" && <AboutUs setSection={setSection} />}
      {section === "Фотоальбом" && <Album setSection={setSection} />}

    </div>
  );
}

export default App;
