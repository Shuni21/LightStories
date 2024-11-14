import React, { useState } from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Album from "./components/Album";
import PhotoPage from "./components/PhotoPage";
import "./App.css";

function App() {
    const [section, setSection] = useState("Главное");
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <div className="App">
            {section === "Главное" && <Header setSection={setSection} />}
            {section === "О нас" && <AboutUs setSection={setSection} />}
            {section === "Фотоальбом" && (
                <Album setSection={setSection} setSelectedPhoto={setSelectedPhoto} />
            )}
            {section === "PhotoPage" && (
                <PhotoPage
                    photo={selectedPhoto}
                    onBack={() => setSection("Фотоальбом")}
                    setSection={setSection}  // Передаем сюда
                />
            )}
        </div>
    );
}

export default App;
