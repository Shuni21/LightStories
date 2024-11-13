import React, { useState, useEffect } from "react";
import "./Album.css";
import Sticker from '../assets/PersonCircle.svg';

function Album({ setSection }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState([]);  // Стейт для хранения списка фотографий

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Загружаем фотографии с сервера
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("http://localhost:5000/data");
        const data = await response.json();
        setPhotos(data);  // Обновляем стейт с фотографиями
      } catch (error) {
        console.error("Ошибка при загрузке фотографий:", error);
      }
    };

    fetchPhotos();
  }, []);  // Запрос будет сделан только при монтировании компонента

  // Фильтрация фотографий по поисковому запросу
  const filteredPhotos = photos.filter((photo) =>
      photo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="album__container">
        <div className="album__wrapper">
          <header className="album">
            <div className="album__left">
              <div className="album__title">LightStories</div>
              <h1 className="album__h1">Фотоальбом</h1>

              <button className="album__menu-btn" onClick={toggleMenu}>
                Меню
              </button>

              {isMenuOpen && (
                  <div className="album__dropdown">
                    <button className="album__close-btn" onClick={toggleMenu}>
                      Закрыть
                    </button>
                    <a href="#главное" className="album__dropdown-link"
                       onClick={() => setSection("Главное")}>Главное</a>
                    <a href="#о-нас" className="album__dropdown-link" onClick={() => setSection("О нас")}>О нас</a>
                    <a href="#фотоальбом" className="album__dropdown-link"
                       onClick={() => setSection("Фотоальбом")}>Фотоальбом</a>
                  </div>
              )}
            </div>

            <div className="album__content">
              <nav className="album__nav">
                <a href="#главное" className="album__link" onClick={() => setSection("Главное")}>Главное</a>
                <a href="#о-нас" className="album__link" onClick={() => setSection("О нас")}>О нас</a>
                <a href="#фотоальбом" className="album__link" onClick={() => setSection("Фотоальбом")}>Фотоальбом</a>
                <a href="#логин" className="album__link">
                  <img src={Sticker} alt="Sticker" className="album__sticker"/>
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
        </div>

        <div className="album__grid">
          {/* Отображение фотографий */}
          {filteredPhotos.length > 0 ? (
              filteredPhotos.map((photo) => (
                  <div key={photo.id} className="album__rectangle-container">
                    <div className="album__rectangle">
                      <div className="album__rectangle-content">
                        <img src={photo.photo} alt={photo.name} className="photo" />
                        <div className="photo_name">{photo.name}</div>
                      </div>
                    </div>
                  </div>
              ))
          ) : (
              <div>Фотографии не найдены</div>
          )}
        </div>
      </div>
  );
}

export default Album;
