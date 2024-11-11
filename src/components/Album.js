import React, { useState } from "react";
import "./Album.css";
import Sticker from '../assets/PersonCircle.svg';

function Album({ setSection }) {
  const [isMenuOpen, setMenuOpen] = useState(false); // состояние для меню
  const [searchQuery, setSearchQuery] = useState(""); // состояние для инпута

  // Функция для открытия/закрытия меню
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="album">
      <div className="album__left">
        <div className="album__title">LightStories</div>
        <h1 className="album__h1">Фотоальбом</h1>
        
        {/* Кнопка для открытия меню */}
        <button className="album__menu-btn" onClick={toggleMenu}>
          Меню
        </button>

        {isMenuOpen && (
          <div className="album__dropdown">
            <button className="album__close-btn" onClick={toggleMenu}>Закрыть</button>
            <a href="#главное" className="album__dropdown-link" onClick={() => setSection("Главное")}>Главное</a>
            <a href="#о-нас" className="album__dropdown-link" onClick={() => setSection("О нас")}>О нас</a>
            <a href="#фотоальбом" className="album__dropdown-link" onClick={() => setSection("Фотоальбом")}>Фотоальбом</a>
          </div>
        )}
      </div>
      <div className="album__content">
        <nav className="album__nav">
          <a href="#главное" className="album__link" onClick={() => setSection("Главное")}>Главное</a>
          <a href="#о-нас" className="album__link" onClick={() => setSection("О нас")}>О нас</a>
          <a href="#фотоальбом" className="album__link" onClick={() => setSection("Фотоальбом")}>Фотоальбом</a>
          <a href="#логин" className="album__link">
            <img src={Sticker} alt="Sticker" className="album__sticker" />
          </a>
        </nav>
        <input
          type="text"
          className="album__search"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="album__triangle"></div>
    </header>
  );
}

export default Album;
